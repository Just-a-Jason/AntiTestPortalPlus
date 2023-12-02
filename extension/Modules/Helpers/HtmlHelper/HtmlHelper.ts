export default class HtmlHelper {
    static removeAllChild(element:HTMLElement):void {
        element.childNodes?.forEach(node => node.remove());
    }
}