import Hello from './Hello'

// Test package
// To use this package, register it in /src/main.js
//
// import TestPackage from '#root/src/packages/test/index'
// PackageManager.register(TestPackage)
class Test {
  constructor() {
    this.name = 'Test'
  }

  emit(event, data) {
    // do something
  }

  register(octo) {
    // register one or more components
    octo.registerComponent({
      component: Hello,
      container: 'app.settings',
      position: 'prepend',
    })
  }
}

export default new Test()
