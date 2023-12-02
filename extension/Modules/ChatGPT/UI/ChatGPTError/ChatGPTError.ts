import UIComponent from "../../../UI Components/UIComponent";
import './ChatGPTError.css';

export default class ChatGPTError extends UIComponent {
    override _template(): HTMLElement {
        const p = document.createElement('p');
        p.classList.add('ChatGPTResponse-ErrorPopUP');        
        return p;
    }

    constructor(private readonly errorText:string) {
        super();
        this._body.innerText = this.errorText;
    }
}