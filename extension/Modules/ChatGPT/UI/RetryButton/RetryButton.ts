import { createElement } from "../../../Helpers/HtmlHelper/HtmlHelper";
import UIComponentProps from "../../../UI Components/Interfaces/UIComponentProps";
import UIComponent from "../../../UI Components/UIComponent";
import ChatGPT from "../../ChatGPT";
import './RetryButton.scss';

export default class RetryButton extends UIComponent {
    constructor() {
        super();
    }

    override _template(): UITemplate<UIComponentProps> {
        const div = createElement('div');
        div.textContent = 'Retry';
        div.classList.add('ChatGPTResponse-RetryButton');
        return {element:div};
    }

    override _ready():void {
        this._body?.element?.addEventListener('click', () => {
            ChatGPT.turn(false);
            ChatGPT.turn(true);
        });
    }
}