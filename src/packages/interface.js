class Interface {
  constructor() {
    this.components = new Set()
  }

  registerComponent({ component, container, position }) {
    this.components.add({ component, container, position })
  }
}

export default Interface
