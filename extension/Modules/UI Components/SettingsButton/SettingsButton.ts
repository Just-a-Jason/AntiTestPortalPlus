import { createElement, parseUIComponent } from "../../Helpers/HtmlHelper/HtmlHelper";
import ChatGPTAuth from "../../ChatGPT/UI/ChatGPTAuth/ChatGPTAuth";
import UIComponentProps from "../Interfaces/UIComponentProps";
import Extension from "../../Extension/ExtensionApi";
import UIComponent from "../UIComponent";
import './SettingsButton.scss';


export default class SettingsButton extends UIComponent {
    constructor() {
        super();
        this._ready();
    }

    protected override _ready(): void {
        this._body.element.addEventListener('click', this.onClick);
    }

    private onClick():void {
        const auth = new ChatGPTAuth();
        document.body.appendChild(parseUIComponent(auth));
    }

    protected _template(): UITemplate<UIComponentProps> {
        const image = createElement('img') as HTMLImageElement;
        image.src = Extension.runtime.loadAsset('Assets/settings.svg');
        image.classList.add('SettingsButton');

        image.title = 'Login to ChatGPT API';

        return {element: image}
    }
}