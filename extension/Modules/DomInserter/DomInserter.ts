export default abstract class DomInserter {
    static insertElement(element: HTMLElement, _parent: null | HTMLElement = null): void {
        if (_parent === null) document.body.append(element);
        else _parent.append(element);
    }
}
