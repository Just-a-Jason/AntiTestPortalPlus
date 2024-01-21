import UIComponentProps from "../../../UI Components/Interfaces/UIComponentProps";
import { createElement } from "../../../Helpers/HtmlHelper/HtmlHelper";
import UIComponent from "../../../UI Components/UIComponent";
import './ChatGPTError.scss';

export default class ChatGPTError extends UIComponent {
    protected override _template(): UITemplate<UIComponentProps> {
        const p = createElement('p');
        p.classList.add('ChatGPTResponse-ErrorPopUP');        
        return {element: p};
    }

    constructor(private readonly errorText:string) {
        super();
        this._ready();
    }

    protected override _ready(): void {    
        this._body.element.innerText = this.errorText;
    }
}