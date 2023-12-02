import UIComponent from "../../../UI Components/UIComponent";
import ChatGPT from "../../ChatGPT";
import './RetryButton.css';

export default class RetryButton extends UIComponent {
    override _template(): HTMLElement {
        const div = document.createElement('div');
        div.textContent = 'Retry';
        div.classList.add('ChatGPTResponse-RetryButton');
        return div;
    }

    override _ready():void {
        this._body.addEventListener('click', () => {
            ChatGPT.turn(false);
            ChatGPT.turn(true);
        });
    }
}