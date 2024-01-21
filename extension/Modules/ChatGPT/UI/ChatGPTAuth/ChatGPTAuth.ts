import UIComponentProps from "../../../UI Components/Interfaces/UIComponentProps";
import { createElement } from "../../../Helpers/HtmlHelper/HtmlHelper";
import UIComponent from "../../../UI Components/UIComponent";

export default class ChatGPTAuth extends UIComponent {
    protected _template(): UITemplate<UIComponentProps> {
        const body = createElement('div');
        body.classList.add('ChatGPTAuth');

        return {
            element: body
        }
    }
}