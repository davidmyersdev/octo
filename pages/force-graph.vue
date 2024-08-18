<script lang="ts">
import type { ForceGraphInstance } from 'force-graph'
import DocList from '#root/components/DocList.vue'

type GraphConnection = {
  id: string,
  source: string,
  target: string,
}

type GraphEdge = GraphConnection & {
  color: string,
  size: number,
}

type GraphNode = GraphConnection & {
  color: string,
  name: string,
  size: number,
  x: number,
  y: number,
}

export default {
  components: {
    DocList,
  },
  setup() {
    const instance = ref<ForceGraphInstance>()
    const tag = ref()
    const graphElement = ref<HTMLElement>()
    const rootStyles = ref<CSSStyleDeclaration>()
    const maxEdgeSize = computed(() => {
      return Math.max(...edges.value.map(edge => edge.size))
    })
    const maxNodeSize = computed(() => {
      return Math.max(...nodes.value.map(node => node.size))
    })
    const { keptDocs: docs } = useDocs()
    const colors = computed(() => {
      const textValue = rootStyles.value?.getPropertyValue('--layer-3-text') || '212 212 216'
      const lineValue = rootStyles.value?.getPropertyValue('--layer-3-bg') || '39 39 42'
      const text = `rgb(${textValue})`
      const line = `rgb(${lineValue})`

      return {
        edge: line,
        label: text,
        node: text,
      }
    })
    const mq = useMq()
    const isMobile = computed(() => {
      return ['xs', 'sm'].includes(mq.value.current)
    })
    const connections = computed<GraphConnection[]>(() => {
      return docs.value.flatMap((doc) => {
        return (doc.tags as string[]).flatMap((tag: string, index: number) => {
          return (doc.tags as string[]).slice(index + 1).map((otherTag) => {
            const [source, target] = [tag, otherTag].sort()
            const id = `${source}_${target}`

            return {
              id,
              color: '',
              size: 1,
              source,
              target,
            }
          })
        })
      })
    })
    const edges = computed(() => Object.values(edgesHash.value))
    const edgesHash = computed<Record<string, GraphEdge>>(() => {
      return connections.value.reduce<Record<string, GraphEdge>>((hash, connection) => {
        if (hash[connection.id]) {
          hash[connection.id].size++
        } else {
          hash[connection.id] = {
            ...connection,
            color: colors.value.edge,
            size: 1,
          }
        }

        return hash
      }, {})
    })
    const nodes = computed(() => Object.values(nodesHash.value))
    const nodesHash = computed(() => {
      return edges.value.reduce<Record<string, GraphNode>>((hash, edge) => {
        if (hash[edge.source]) {
          hash[edge.source].size++
        } else {
          hash[edge.source] = {
            ...edge,
            id: edge.source,
            name: edge.source,
            size: 1,
            x: 0,
            y: 0,
          }
        }

        if (hash[edge.target]) {
          hash[edge.target].size++
        } else {
          hash[edge.target] = {
            ...edge,
            id: edge.target,
            name: edge.target,
            size: 1,
            x: 0,
            y: 0,
          }
        }

        return hash
      }, {})
    })
    const graph = computed(() => {
      return {
        links: edges.value,
        nodes: nodes.value,
      }
    })

    const resize = () => {
      if (instance.value && graphElement.value) {
        instance.value
          .graphData(graph.value)
          .height(graphElement.value.clientHeight)
          .width(graphElement.value.clientWidth)
      }
    }

    onMounted(async () => {
      const { default: ForceGraph } = await import('force-graph')

      if (graphElement.value) {
        instance.value = (
          ForceGraph()(graphElement.value)
            .graphData(graph.value)
            .height(graphElement.value.clientHeight)
            .width(graphElement.value.clientWidth)
            .linkWidth((link) => {
              return ((link as GraphEdge).size / maxEdgeSize.value) * 5
            })
            .nodeCanvasObject((fgNode, context, scale) => {
              const node = fgNode as GraphNode
              const fontSize = 16 / scale
              const label = node.id || ''
              const radius = ((node.size / maxNodeSize.value) * 15) / scale

              // draw the node
              context.beginPath()
              context.fillStyle = colors.value.node
              context.arc(node.x, node.y, radius, 0, 2 * Math.PI, false)
              context.fill()
              context.closePath()

              // draw the label
              context.fillStyle = colors.value.label
              context.font = `${fontSize}px Inter`
              context.textAlign = 'center'
              context.textBaseline = 'top'
              context.fillText(label, node.x, node.y + radius + 1)
            })
            .onNodeHover((node) => {
              if (graphElement.value) {
                graphElement.value.style.cursor = node ? 'pointer' : 'inherit'
              }
            })
            .onNodeClick((fgNode) => {
              const node = fgNode as GraphNode
              const offset = isMobile.value ? 40 : 0

              tag.value = node.id

              if (instance.value) {
                instance.value.centerAt(node.x, node.y + offset, 1000)
                instance.value.zoom(6, 2000)
              }
            })
        )
      }

      window.addEventListener('resize', resize)

      rootStyles.value = window.getComputedStyle(document.documentElement)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', resize)
    })

    useHead({
      title: 'Force Graph',
    })

    watch(graph, () => {
      resize()
    })

    return {
      docs,
      edges,
      graphElement,
      instance,
      nodes,
      tag,
    }
  },
}
</script>

<template>
  <div class="flex h-full relative">
    <div v-if="edges.length || nodes.length" class="flex flex-row flex-grow h-full">
      <div ref="graphElement" class="flex-grow" />
      <CoreScrollable v-if="tag" v-slot="{ element }" class="flex-shrink md:max-w-md w-full p-4">
        <div :ref="element">
          <DocList :tag="tag" :cols="1" />
        </div>
      </CoreScrollable>
    </div>
    <div v-else class="flex flex-col flex-grow items-center justify-center p-4 text-center text-layer-muted text-xl">Create relationships between your docs to use this feature.</div>
  </div>
</template>

<style>
/*
This fix can be removed if the following PR is accepted.
https://github.com/vasturiano/force-graph/pull/258
*/
.graph-tooltip {
  left: 0;
  top: 0;
}
</style>
