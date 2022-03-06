import { isArray, isDate, isObject } from '/src/common/ducks'

// Convert reactive objects into regular objects. https://github.com/vuejs/Discussion/issues/292
export const unwrap = (object: any): any => {
  if (isArray(object)) { return unwrapArray(object) }
  if (isDate(object)) { return unwrapDate(object) }
  if (isObject(object)) { return unwrapObject(object) }

  return object
}

export const unwrapArray = <T>(object: T[]): T[] => {
  return object.map<T>((item) => {
    return unwrap(item)
  })
}

export const unwrapDate = (object: Date): Date => {
  return new Date(object)
}

export const unwrapObject = <T extends { [key: string]: any }>(object: T): T => {
  return Object.keys(object).reduce<T>((unwrapped, key: string) => {
    return {
      ...unwrapped,
      [key]: unwrap(object[key]),
    }
  }, {} as T)
}
