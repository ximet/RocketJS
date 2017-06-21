export default class Observable {
  constructor (instance) {
    this.observers = []
  }
}

export const hasObservers = (observable) => {
  return observable.observers && observable.observers.length > 0
}

export const getObservers = (observable) => {
  return observable.observers
}
