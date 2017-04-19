class Observer {
  constructor (instance) {
    this.instance = instance;
    this.observers = {}
  }

  notifyArray (items) {
    for(let i = 0; i < items.length; i++) {
      this.notify(items[i]);
    }
  }

  notify () {
    
  }
}
