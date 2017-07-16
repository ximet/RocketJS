export const setComputedProperty = (observer, computed, prop) => {
    const setter = computed[prop].set;

    if(setter !== undefined) {
      observer.setters[prop] = setter;
    }
}

export const getComputedProperty = (observer, intance, prop) => {
    const cache = null;
    if(observer.setters[prop] === undefined) {

    }
    else {
      cache = observer.cache[prop];
    }

    return cache;
}
