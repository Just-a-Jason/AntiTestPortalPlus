export default class HtmlHelper {
    static removeAllChild(element:HTMLElement):void {
        element.childNodes?.forEach(node => node.remove());
    }
}
export function createElement(element:keyof HTMLElementTagNameMap) {
    return document.createElement(element);
}