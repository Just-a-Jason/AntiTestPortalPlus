import UIComponent from "../UIComponent";

export default interface IUIElement {
    appendChild(child:HTMLElement | IUIElement | UIComponent):void;
    _getBody():HTMLElement;
    _remove():void;
    _ready():void;
    _done():void;
}