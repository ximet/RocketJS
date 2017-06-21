export const hasObservers = (observable) => {
  return observable.observers && observable.observers.length > 0
}

export const getObservers = (observable) => {
  return observable.observers
}

export const addObservers = (observable, node) => {
  const length = observable.observers.length;

  observable.observers[length] = node;
}

export default class Observable {
  constructor (instance) {
    this.observers = []
  }
}
