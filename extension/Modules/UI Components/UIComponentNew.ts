interface UIComponentProps {
    [key:string]: HTMLElement;
}

export abstract class UIComponentNew<Props extends UIComponentProps = UIComponentProps> {
    protected _body: UITemplate<Props>;

    constructor() {
        this._body = this._template();
        this._ready();
    }
    
    appendChild(child: HTMLElement): void {
        this._body.element.appendChild(child);
    }
    
    _getBody(): UITemplate<Props> {
        return this._body;
    }
    
    _remove(): void {
        this._body.element.remove();
    }
    
    _ready(): void {}

    _done(): void { }

    protected abstract _template(): UITemplate<Props>;
}