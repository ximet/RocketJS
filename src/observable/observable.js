export const hasObservers = (observable) => {
  return observable.observers && observable.observers.length > 0
}

export const getObservers = (observable) => {
  return observable.observers
}

const addObservers = (observable, node) => {
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
}
