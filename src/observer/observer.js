class Observer {
  constructor (instance) {
    this.instance = instance;
    this.observers = []
  }

  notifyArray (items) {
    for(let i = 0; i < items.length; i++) {
      this.notify(items[i]);
    }
  }



  notify () {

  }
}

const hasObservers = (observable) => {
  return observable.observers && observable.observers.length > 0
}

const getObservers = (observable) => {
  return observable.observers
}
