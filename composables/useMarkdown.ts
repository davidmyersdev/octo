// import { type MaybeRef, nextTick, onMounted, ref, toValue } from 'vue'
// import { toHtml } from '/src/utils/markdown'

// export const useMarkdown = ({ markdown }: { markdown: MaybeRef<string> }) => {
//   const html = ref('')

//   onMounted(() => {
//     toHtml(toValue(markdown)).then(value => html.value = value)

//     // nextTick(() => {
//     //   // html.value = value
//     // })
//   })

//   return {
//     html,
//   }
// }
