/** @jsx createVirtualNode */
export function createVirtualNode(type, props, ...children) {
    return { type, props: props || {}, children };
}

