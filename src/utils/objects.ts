type AssignedProperties<DescriptorMap extends PropertyDescriptorMap> = {
  [Property in keyof DescriptorMap]: AssignedProperty<Property, DescriptorMap[Property]>[Property]
}

type AssignedProperty<Property extends PropertyKey, Descriptor extends PropertyDescriptor> =
  Descriptor extends { writable: any, get(): any } | { writable: any, set(value: any): any } ? never
  : Descriptor extends { value: any, get(): any } | { value: any, set(value: any): any } ? never
  : Descriptor extends { get(): any, set(value: any): any } ? AssignedPropertyValue<Property, Descriptor>
  : Descriptor extends { writable: true } ? AssignedPropertyValue<Property, Descriptor>
  : Readonly<AssignedPropertyValue<Property, Descriptor>>

type AssignedPropertyValue<Property extends PropertyKey, Descriptor> =
  Descriptor extends { get(): any, value: any } ? never
  : Descriptor extends { value: infer Value } ? Record<Property, Value>
  : Descriptor extends { get(): infer Value } ? Record<Property, Value>
  : never

type defineProperty = <T extends object, K extends PropertyKey, V extends PropertyDescriptor>
  (object: T, property: K, descriptor: V) => asserts object is T & AssignedProperty<K, V>

type defineProperties = <T extends object, V extends PropertyDescriptorMap>
  (object: T, properties: V) => asserts object is T & AssignedProperties<V>

export const defineProperty: defineProperty = (object, property, descriptor) => {
  Object.defineProperty(object, property, descriptor)
}

export const defineProperties: defineProperties = (object, properties) => {
  Object.keys(properties).forEach((key: keyof typeof properties) => {
    defineProperty(object, key, properties[key])
  })
}
