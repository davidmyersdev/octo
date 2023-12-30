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

type DefineProperty = <T extends object, K extends PropertyKey, V extends PropertyDescriptor>
  (object: T, property: K, descriptor: V) => asserts object is T & AssignedProperty<K, V>

type DefineProperties = <T extends object, V extends PropertyDescriptorMap>
  (object: T, properties: V) => asserts object is T & AssignedProperties<V>

export const defineProperty: DefineProperty = (object, property, descriptor) => {
  Object.defineProperty(object, property, descriptor)
}

export const defineProperties: DefineProperties = (object, properties) => {
  Object.keys(properties).forEach((key: keyof typeof properties) => {
    defineProperty(object, key, properties[key])
  })
}

export const isNotNull = <T>(value: T | null): value is T => {
  return !isNull(value)
}

export const isNotNullish = <T>(value: T | null | undefined): value is T => {
  return !isNullish(value)
}

export const isNull = <T>(value: T | null): value is null => {
  return value === null
}

export const isNullish = <T>(value: T | null | undefined): value is null | undefined => {
  return isNull(value) || isUndefined(value)
}

export const isUndefined = <T>(value: T | undefined): value is undefined => {
  return typeof value === 'undefined'
}
