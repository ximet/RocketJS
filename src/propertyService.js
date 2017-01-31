function setProperty(target, name, value) {
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
}

function removeProperty(target, name, value) {
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
}

function setPropertys(target, props) {
    Object.keys(props).forEach(name => {
       setProperty(target, name, props[name]);
    })
}

function updateProperty(target, name, newValue, oldValue) {
  if(!newValue) {
    removeProperty(target, name, oldValue);
  }
  else if (!oldValue || newValue !== oldValue) {
    setProperty(target, name, newValue);
  }
}

function updatePropertys(target, newProps, oldProps = {}) {
  const props = Object.assign({}, newProps, oldProps);

  Object.keys(props).forEach(name => {
    updateProperty(target, name, newProps[name], oldProps[name]);
  })
}

function setBooleanProperty(target, name, value) {
   if (value) {
      target.setAttribute(name, value);
      target[name] = true;
   }
   else {
      target[name] = false;
   }
}

function removeBooleanProperty(target, name) {
   target.removeAttribute(name);
   target[name] = false;
}
