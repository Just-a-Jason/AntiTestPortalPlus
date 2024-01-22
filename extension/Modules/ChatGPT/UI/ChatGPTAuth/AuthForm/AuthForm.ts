import { createElement } from "../../../../Helpers/HtmlHelper/HtmlHelper";
import UIComponentProps from "../../../../UI Components/Interfaces/UIComponentProps";
import UIComponent from "../../../../UI Components/UIComponent";

export default class AuthForm extends UIComponent {
    protected _template(): UITemplate<UIComponentProps> {
        return {element: createElement('p')}
    }
}