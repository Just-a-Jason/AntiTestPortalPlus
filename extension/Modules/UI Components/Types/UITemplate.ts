type UITemplate<T extends never | object = never> = { 
    element: HTMLElement, 
    body?: T; 
};
