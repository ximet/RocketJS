import { setPropertys, updateProperties, addEventListeners } from './propertyService.js'

function isChanged(node1, node2) {
    return typeof node1 !== typeof node2
        || typeof node1 === 'string' && node1 !== node2
        || node1.type !== node2.type
        || node1.props && node1.props.forceUpdate;
}

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
};

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
        updateProperties(parent.childNodes[index], newNode.props, oldNode.props);

        const newLength = newNode.children.length;
        const oldLength = oldNode.children.length;

        for (let i = 0; i < newLength || i < oldLength; i++) {
            updateElement(parent.childNodes[index], newNode.children[i], oldNode.children[i], i);
        }
    }
};
