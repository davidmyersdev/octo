<template>
  <div class="flex justify-end h-screen relative">
    <DocumentList v-if="tag" :tag="tag" :cols="1" class="h-full w-full md:w-1/3 z-index-1 px-4 mt-96" />
    <div ref="graph" class="absolute inset-0"></div>
  </div>
</template>

<script>
import ForceGraph from 'force-graph'

import DocumentList from '/components/DocumentList.vue'

export default {
  name: 'Graph',
  components: {
    DocumentList,
  },
  inject: ['mq'],
  data() {
    return {
      instance: null,
      listener: null,
      tag: null,
    }
  },
  watch: {
    graph() {
      this.resize()
    },
  },
  computed: {
    colors() {
      return {
        edge: this.theme === 'light' ? '#aaa' : '#333',
        label: this.theme === 'light' ? 'rgba(17, 17, 17, 0.8)' : 'rgba(200, 200, 200, 0.8)',
        node: 'rgba(224, 108, 117, 0.9)',
      }
    },
    connections() {
      return this.docs.flatMap((doc) => {
        return doc.tags.flatMap((tag, index) => {
          return doc.tags.slice(index + 1).map((otherTag) => {
            const [source, target] = [tag, otherTag].sort()
            const id = source + '_' + target

            return {
              id,
              source,
              target,
            }
          })
        })
      })
    },
    docs() {
      return this.$store.getters.kept
    },
    edges() {
      return this.connections.reduce((edges, connection) => {
        const found = edges.find(edge => edge.id === connection.id)

        if (found) {
          found.size += 1
        } else {
          edges.push({
            ...connection,
            color: this.colors.edge,
            size: 1,
          })
        }

        return edges
      }, [])
    },
    graph() {
      return {
        nodes: this.nodes,
        links: this.edges,
      }
    },
    maxEdgeSize() {
      return Math.max(...this.edges.map(edge => edge.size))
    },
    maxNodeSize() {
      return Math.max(...this.nodes.map(node => node.size))
    },
    mobile() {
      if (process.browser) {
        return ['xs', 'sm'].includes(this.mq.current)
      }

      return false
    },
    nodes() {
      return this.edges.flatMap(edge => [edge.source, edge.target]).reduce((nodes, tag) => {
        const found = nodes.find(node => node.id === tag)

        if (found) {
          found.size += 1
        } else {
          nodes.push({
            id: tag,
            name: tag,
            size: 1,
          })
        }

        return nodes
      }, [])
    },
    theme() {
      return this.$store.state.settings.theme
    },
  },
  methods: {
    resize() {
      if (this.instance) {
        this.instance
          .graphData(this.graph)
          .height(this.$refs.graph.clientHeight)
          .width(this.$refs.graph.clientWidth)
      }
    },
  },
  mounted() {
    this.instance = ForceGraph()(this.$refs.graph)
      .graphData(this.graph)
      .height(this.$refs.graph.clientHeight)
      .width(this.$refs.graph.clientWidth)
      .linkWidth((link) => {
        return (link.size / this.maxEdgeSize) * 5
      })
      .nodeCanvasObject((node, context, scale) => {
        const fontSize = 16 / scale
        const label = node.id
        const radius = ((node.size / this.maxNodeSize) * 15) / scale

        // draw the node
        context.beginPath()
        context.fillStyle = this.colors.node
        context.arc(node.x, node.y, radius, 0, 2 * Math.PI, false)
        context.fill()
        context.closePath()

        // draw the label
        context.fillStyle = this.colors.label
        context.font = `${fontSize}px Inter`
        context.textAlign = 'center'
        context.textBaseline = 'top'
        context.fillText(label, node.x, node.y + radius + 1)
      })
      .onNodeHover(node => this.$refs.graph.style.cursor = node ? 'pointer' : null)
      .onNodeClick((node) => {
        const offset = this.mobile ? 40 : 0

        this.tag = node.id
        this.instance.centerAt(node.x, node.y + offset, 1000)
        this.instance.zoom(6, 2000)
      })

    this.listener = () => {
      this.resize()
    }

    if (process.browser) {
      window.addEventListener('resize', this.listener)
    }
  },
  beforeUnmount() {
    if (process.browser) {
      window.removeEventListener('resize', this.listener)
    }
  },
}
</script>

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
