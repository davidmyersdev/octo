const useHooks = (context = window) => {
  const emit = (name) => {
    context.postMessage(name);
  };
  const subscribe = (handler) => {
    const listener = (event) => handler(event.data);
    const unsubscribe = () => context.removeEventListener("message", listener);
    context.addEventListener("message", listener);
    return unsubscribe;
  };
  return {
    emit,
    subscribe
  };
};
export {
  useHooks as u
};
//# sourceMappingURL=useHooks-93920b51.js.map
