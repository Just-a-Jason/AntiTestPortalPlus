import UIComponent from "../../UI Components/UIComponent";

export default interface IUIElement {
    appendChild(child:HTMLElement | IUIElement | UIComponent):void;
    _template():HTMLElement
    _getBody():HTMLElement;
    _remove():void;
    _ready():void;
    _done():void;
}