export function useEventListener(_eventName: string, _handler: Function, element = document): Function | undefined {
  // const savedHandler = ref(_handler)

  if (!(element && element.addEventListener)) return
  const eventListener = (event: Event) => _handler(event)
  element.addEventListener(_eventName, eventListener)
  return () => {
    element.removeEventListener(_eventName, eventListener)
  }
}