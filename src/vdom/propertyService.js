function isEventProps (name) {
    return /^on/.test(name);
}

function isCustomProperty (name) {
    return isEventProps(name) || name === 'forceUpdate';
}


function extractEventName (name) {
    return name.slice(2).toLowerCase();
}

const setProperty = (target, name, value) => {
    if (isCustomProperty(name)){
        return;
    }
    else if (name === 'classname') {
        target.setAttribute('class', value);
    }
    else if (typeof value === 'boolean') {
        setBooleanProperty(target, name, value);
    }
    else {
        target.setAttribute(name, value);
    }
};

const removeProperty = (target, name, value) => {
  if (isCustomProperty(name)){
      return;
  }
  else if (name === 'classname') {
      target.removeAttribute('class', value);
  }
  else if (typeof value === 'boolean') {
      removeBooleanProperty(target, name, value);
  }
  else {
      target.removeAttribute(name, value);
  }
};

export const setPropertys = (target, props) => {
    Object.keys(props).forEach(name => {
       setProperty(target, name, props[name]);
    })
};

const updateProperty = (target, name, newValue, oldValue) => {
  if(!newValue) {
    removeProperty(target, name, oldValue);
  }
  else if (!oldValue || newValue !== oldValue) {
    setProperty(target, name, newValue);
  }
};

export const updateProperties = (target, newProps, oldProps = {}) => {
  const props = Object.assign({}, newProps, oldProps);

  Object.keys(props).forEach(name => {
    updateProperty(target, name, newProps[name], oldProps[name]);
  })
};

const setBooleanProperty = (target, name, value) => {
   if (value) {
      target.setAttribute(name, value);
      target[name] = true;
   }
   else {
      target[name] = false;
   }
};

const removeBooleanProperty = (target, name) => {
   target.removeAttribute(name);
   target[name] = false;
};

export const addEventListeners = (target, props) => {
    Object.keys(props).forEach(name => {
        if (isEventProps(name)) {
            target.addEventListener(extractEventName(name), props[name]);
        }
    });
};
