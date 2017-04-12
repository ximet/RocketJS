import { setPropertys, addEventListeners } from './propertyService.js'

const createElementFromVDOM = (virtualNode) => {
    let element = null;

    if (typeof virtualNode === 'string') {
        element = document.createTextNode(virtualNode);
    }
    else {
        element = document.createElement(virtualNode.type);

        setPropertys(element, virtualNode.props);
        addEventListeners(element, virtualNode.props);
        virtualNode.children.map(createElementFromVDOM)
            .forEach(element.appendChild.bind(element));
    }

    return element;
};
