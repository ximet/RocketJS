export const hasObservers = (observable) => {
  return observable.observers && observable.observers.length > 0
}

export const getObservers = (observable) => {
  return observable.observers
}

export const addObservers = (observable, node) => {
  const length = observable.observers.length;

  observable.observers[length] = node;

  return observable;
}

export default class Observable {
  constructor (instance) {
    this.observers = []
  }

  addObservers(node) {
    this.observers = addObservers(this, node);
  }

  notify (key, value) {
    const length = this.observers.length;

    for (let i = 0; i < length; i++) {
      //notify what?
    }
  }
}
