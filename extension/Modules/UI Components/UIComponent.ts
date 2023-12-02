import DomInserter from "../DomInserter/DomInserter";
import IUIElement from "../ChatGPT/Interfaces/IUIElement";

export default abstract class UIComponent implements IUIElement {
    protected _body;

    constructor() {
        this._body = this._template();
        this._ready();
    }

    /**
     * @description It's called once, when visal content of the component is destroyed.
     * @example 
     * class MyButton extends UIComponent {
     *  override _template():HTMLElement {
     *      const button = doceument.createElement('button');
     *      button.value = 'MyButton';
     *      return button;
     *  }
     * 
     *  override _ready():void {
     *      this._remove();
     *  }
     * 
     *  override _done():void {
     *      // Instructions...
     *      cosnole.log('MyButton has been destroyed.');
     *  }
     * }
     * 
     */
    _done(): void {
        console.log(`${this.constructor.name} has been destroyed.`)
    }

    _getBody(): HTMLElement {
        return this._body;
    }

    /**
     * @description Removes html-template visal from DOM.
     * @example _template():HTMLElement;
     */
    _remove():void {
        this._body.remove();
        this._done();
    }
    
    _ready(): void {
        DomInserter.insertElement(this._body);
    }

    _template(): HTMLElement {
        throw new Error('UIComponent.template() shape is not defined!');
    }
}