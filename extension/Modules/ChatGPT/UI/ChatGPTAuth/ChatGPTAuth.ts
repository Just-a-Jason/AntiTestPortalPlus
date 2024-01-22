import UIComponentProps from "../../../UI Components/Interfaces/UIComponentProps";
import { createElement } from "../../../Helpers/HtmlHelper/HtmlHelper";
import UIComponent from "../../../UI Components/UIComponent";
import './ChatGPTAuth.scss';

export default class ChatGPTAuth extends UIComponent {

    constructor() {
        super();
        this._ready();
    }

    protected override _ready(): void {
        document.body.style['overflow'] = 'hidden';    
    }
    
    protected override _done(): void {
        document.body.style['overflow'] = 'scroll';    
    }
    
    protected _template(): UITemplate<UIComponentProps> {
        const body = createElement('div');
        body.classList.add('ChatGPTAuth');

        
        return {
            element: body
        }
    }
}