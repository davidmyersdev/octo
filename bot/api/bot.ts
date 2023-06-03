// Types for `process.env` properties.
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly API_TOKEN: string
      readonly DISCORD_TOKEN: string
    }
  }
}

type Message = {
  content: string,
  role: 'assistant' | 'system' | 'user',
  name?: string,
}

const discordAppId = process.env.DISCORD_APP_ID
const discordToken = process.env.DISCORD_TOKEN
const mention = `<@${discordAppId}>`
const model = 'gpt-3.5-turbo'
const openAiApiKey = process.env.OPENAI_API_KEY

const clean = (text: string) => {
  return text.replace(/<@.*?>/g, '').trim()
}

const json = (data: any) => {
  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json',
    },
  })
}

const maybeCreateThread = async (channel: { id: string, type: number }, messageId: string, message: string, isMentioned: boolean) => {
  if (channel.type === 11) {
    return channel
  }

  if (!isMentioned) {
    throw new Error('No @Octo mention found')
  }

  const text = message.replace(mention, '').trim()

  try {
    const threadResponse = await fetch(`https://discord.com/api/v10/channels/${channel.id}/messages/${messageId}/threads`, {
      method: 'POST',
      headers: {
        'authorization': `Bot ${discordToken}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: text.slice(0, 100),
      }),
    })
    const thread = await threadResponse.json()

    return thread
  } catch (error) {
    console.error(error)
  }
}

const unauthorized = () => {
  return new Response('Unauthorized', { status: 401 })
}

// Necessary for Vercel to treat this as an Edge Function.
export const config = {
  runtime: 'edge',
}

export default async (request: Request): Promise<Response> => {
  const isValid = (request.headers.get('authorization') === `Bearer ${process.env.API_TOKEN}`)

  if (!isValid) {
    return unauthorized()
  }

  try {
    const { data: { channel_id, content, id }, type } = await request.json()
    const isMentioned = content.includes(mention)

    try {
      const channelResponse = await fetch(`https://discord.com/api/v10/channels/${channel_id}`, {
        method: 'GET',
        headers: {
          'authorization': `Bot ${discordToken}`,
          'content-type': 'application/json',
        },
      })
      const channel = await channelResponse.json()
      const thread = await maybeCreateThread(channel, id, content, isMentioned)

      const threadMessagesResponse = await fetch(`https://discord.com/api/v10/channels/${thread.id}/messages`, {
        method: 'GET',
        headers: {
          'authorization': `Bot ${discordToken}`,
          'content-type': 'application/json',
        },
      })
      const threadMessages = await threadMessagesResponse.json() as any[]
      const messages = threadMessages.sort((a, b) => (new Date(a.timestamp)).getTime() - (new Date(b.timestamp)).getTime()).reduce((messages: Message[], threadMessage: any) => {
        const currentMessage = threadMessage.type === 21 ? threadMessage.referenced_message : threadMessage

        if (content) {
          messages.push({
            content: clean(currentMessage.content),
            role: currentMessage.author.id === discordAppId ? 'assistant' : 'user',
            name: currentMessage.author.username,
          })
        }

        return messages
      }, [])

      const lastMessage = messages[messages.length - 1]

      if (lastMessage && lastMessage.role === 'assistant') {
        return json({})
      }

      if (!isMentioned && !messages.some(m => m.role === 'assistant')) {
        console.log('No @Octo mention found')
        return json({})
      }

      const completion = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${openAiApiKey}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          model,
          messages,
        }),
      })

      const completionData = await completion.json()
      const gptMessage = completionData.choices[0].message

      if (!gptMessage) {
        return json({})
      }

      const replyResponse = await fetch(`https://discord.com/api/v10/channels/${thread.id}/messages`, {
        method: 'POST',
        headers: {
          'authorization': `Bot ${discordToken}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          content: gptMessage.content,
        }),
      })
      const reply = await replyResponse.json()
    } catch (error) {
      console.error(error)
    }


  } catch (error) {
    return json({ error: JSON.stringify(error) })
  }

  return json({})
}
