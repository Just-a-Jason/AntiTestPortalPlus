import UIComponentProps from "../../../UI Components/Interfaces/UIComponentProps";
import UIComponentNew from "../../../UI Components/UIComponent";
import './ChatGPTError.scss';

export default class ChatGPTError extends UIComponentNew {
    protected override _template(): UITemplate<UIComponentProps> {
        const p = document.createElement('p');
        p.classList.add('ChatGPTResponse-ErrorPopUP');        
        return {element: p};
    }

    constructor(private readonly errorText:string) {
        super();
        this._body.element.innerText = this.errorText;
    }
}