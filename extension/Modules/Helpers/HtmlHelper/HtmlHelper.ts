import UIComponent from "../../UI Components/UIComponent";

export default class HtmlHelper {
    static removeAllChild(element:HTMLElement):void {
        element.childNodes?.forEach(node => node.remove());
    }
}
export function createElement(element:keyof HTMLElementTagNameMap) {
    return document.createElement(element);
}
export function parseUIComponent(component:UIComponent):HTMLElement {
    return component._getBody().element;
}
