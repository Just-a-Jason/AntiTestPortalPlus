import UIComponentProps from "../../../UI Components/Interfaces/UIComponentProps";
import UIComponentNew from "../../../UI Components/UIComponent";
import ChatGPT from "../../ChatGPT";
import './RetryButton.scss';

export default class RetryButton extends UIComponentNew {
    constructor() {
        super();
    }

    override _template(): UITemplate<UIComponentProps> {
        const div = document.createElement('div');
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