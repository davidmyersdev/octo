import PackageInterface from './interface'

class Manager {
  constructor() {
    this.packages = new Set()
    this.components = new Set()
  }

  emit(event, data) {
    // send events to all registered packages
    this.packages.forEach(pack => pack.emit(event, data))
  }

  getComponents(container, position) {
    return [...this.components].filter((component) => {
      return component.container === container && component.position === position
    }).map(({ component }) => (component))
  }

  register(pack) {
    const sdk = new PackageInterface()

    pack.register(sdk)

    sdk.components.forEach(component => this.components.add(component))

    this.packages.add(pack)
  }
}

// there can be only one
export default new Manager()
