export default class {
  constructor(timeout) {
    this.timeout = timeout;
    this.timers = [];
  }

  debounce(identifier = null, action) {
    const timer = this._findTimer(identifier);

    if (timer) {
      this._clearTimer(timer);
    }

    this._setTimer(identifier, action);
  }

  _clearTimer(timer) {
    clearTimeout(timer.instance);

    this.timers = this.timers.filter(t => t.identifier !== timer.identifier);
  }

  _findTimer(identifier) {
    return this.timers.find(timer => timer.identifier === identifier);
  }

  _setTimer(identifier, action) {
    this.timers.push({
      identifier: identifier,
      instance: setTimeout(action, this.timeout),
    });
  }
}
