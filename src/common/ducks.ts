export const OBJECT_STRINGS = {
  Array: '[object Array]',
  Boolean: '[object Boolean]',
  Date: '[object Date]',
  Number: '[object Number]',
  Object: '[object Object]',
  String: '[object String]',
}

export const compare = (object: any, string: string): boolean => {
  return Object.prototype.toString.call(object) === string
}

export const isArray = (object: any): boolean => {
  return compare(object, OBJECT_STRINGS.Array)
}

export const isBoolean = (object: any): boolean => {
  return compare(object, OBJECT_STRINGS.Boolean)
}

export const isDate = (object: any): boolean => {
  return compare(object, OBJECT_STRINGS.Date)
}

export const isNumber = (object: any): boolean => {
  return compare(object, OBJECT_STRINGS.Number)
}

export const isObject = (object: any): boolean => {
  return compare(object, OBJECT_STRINGS.Object)
}

export const isString = (object: any): boolean => {
  return compare(object, OBJECT_STRINGS.String)
}
