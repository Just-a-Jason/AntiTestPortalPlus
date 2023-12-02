export default interface IUIElement {
    _template():HTMLElement
    _getBody():HTMLElement;
    _remove():void;
    _ready():void;
    _done():void;
}