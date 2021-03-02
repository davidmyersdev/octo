<template>
  <div class="flex flex-col md:flex-row items-stretch justify-end">
    <div ref="graph" class="graph flex flex-col overflow-hidden fixed left-0 right-0 top-0 bottom-0"></div>
    <div v-if="selectedTag" class="docs flex flex-col">
      <DocumentList :tag="selectedTag" cols="1" class="z-index-1" />
    </div>
  </div>
</template>

<script>
import ForceGraph from 'force-graph'

import DocumentList from '@/components/DocumentList'

export default {
  name: 'Graph',
  components: {
    DocumentList,
  },
  data() {
    return {
      instance: null,
      selectedTag: null,
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
        edge: this.theme === 'dark' ? '#333' : '#aaa',
        label: this.theme === 'dark' ? 'rgba(200, 200, 200, 0.8)' : 'rgba(17, 17, 17, 0.8)',
        node: 'rgba(224, 108, 117, 0.8)',
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
      return this.$store.getters.allKept
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
      .height(this.$refs.graph.clientHeight)
      .width(this.$refs.graph.clientWidth)
      .graphData(this.graph)
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
        context.font = `${fontSize}px Fira Sans`
        context.textAlign = 'center'
        context.textBaseline = 'top'
        context.fillText(label, node.x, node.y + radius + 1)
      })
      .onNodeHover(node => this.$refs.graph.style.cursor = node ? 'pointer' : null)
      .onNodeClick((node) => {
        this.selectedTag = node.id
        this.instance.centerAt(node.x, node.y, 1000)
        this.instance.zoom(6, 2000)
      })

    window.addEventListener('resize', () => {
      this.resize()
    })
  },
}
</script>

<style scoped>
.docs {
  margin-top: 50vh !important;
}

.md-plus .docs {
  margin-top: auto !important;
  width: 30% !important;
  min-width: 30rem !important;
}
</style>
