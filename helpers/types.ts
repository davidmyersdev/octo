export type CustomInputEvent = Event & {
  target: EventTarget & HTMLInputElement,
}

export const inputHandler = (callback: (event: CustomInputEvent) => void) => {
  return (event: Event) => {
    callback(event as CustomInputEvent)
  }
}
