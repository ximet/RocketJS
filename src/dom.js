import { setPropertys, addEventListeners } from './propertyService.js'

export const createElementFromVDOM = (virtualNode) => {
    let element = null;

    if (typeof virtualNode === 'string') {
        element = document.createTextNode(virtualNode.text);
    }
    else {
        element = document.createElement(virtualNode.tag);

        setPropertys(element, virtualNode.props);
        addEventListeners(element, virtualNode.props);
        virtualNode.children.map(createElementFromVDOM)
            .forEach(element.appendChild.bind(element));
    }

    return element;
};
