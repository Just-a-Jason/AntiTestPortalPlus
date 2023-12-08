import UIComponentProps from "./Interfaces/UIComponentProps";

export default abstract class UIComponentNew<Props extends UIComponentProps = UIComponentProps> {
    protected _body: UITemplate<Props>;

    constructor() {
       this._body = this.initTemplate();
    }

    appendChild(child: HTMLElement): void {
        this._body.element.appendChild(child);
    }

    _getBody(): UITemplate<Props> {
        return this._body;
    }

    _remove(): void {
        this._body.element.remove();
        this._done();
    }

    private initTemplate():UITemplate<Props> {
        this._ready();
        return this._template();
    }

    protected _done():void {}

    protected abstract _template(): UITemplate<Props>;
    protected _ready(): void {console.log(`${this.constructor.name} is ready!`)};
}