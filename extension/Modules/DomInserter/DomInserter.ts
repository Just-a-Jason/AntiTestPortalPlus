import UIComponentNew from "../UI Components/UIComponentNew";
import UIComponent from "../UI Components/UIComponent";

export default abstract class DomInserter {
    static insert(element: HTMLElement | UIComponent | UIComponentNew, _parent: null | HTMLElement = null): void {
        element = (element instanceof UIComponent) ? element._getBody() : element;
        if(element instanceof UIComponentNew) element = element._getBody().element;
        
        if (_parent === null) document.body.append(element);
        else _parent.append(element);
        
    }
}
