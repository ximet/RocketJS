export const createElement = (node) => {
   if (typeof node === 'string') {
       return document.createTextNode(node);
   }

   const $element = document.createElement(node.type);

   setPropertys($element, node.props);
   addEventListeners($element, node.props);
   node.children.map(createElement)
                .forEach($element.appendChild.bind($element));

   return $element;
}

export const updateElement = (parent, newNode, oldNode, index = 0) => {
    if (!oldNode) {
      parent.appendChild(createElement(newNode));
    }
    else if (!newNode) {
      parent.removeChild(parent.childNodes[index]);
    }
    else if (isChanged(newNode, oldNode)) {
      parent.replaceChild(createElement(newNode), parent.childNodes[index]);
    }
    else if (newNode.type) {
      updatePropertys(parent.childNodes[index], newNode.props, oldNode.props);

      const newLength = newNode.children.length;
      const oldLength = oldNode.children.length;

      for (let i = 0; i < newLength || i < oldLength; i++) {
        updateElement(parent.childNodes[index], newNode.children[i], oldNode.children[i], i);
      }
    }
}
