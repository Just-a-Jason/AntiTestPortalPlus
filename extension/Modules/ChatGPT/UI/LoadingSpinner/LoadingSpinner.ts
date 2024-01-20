import UIComponentProps from "../../../UI Components/Interfaces/UIComponentProps";
import { createElement } from "../../../Helpers/HtmlHelper/HtmlHelper";
import UIComponent from "../../../UI Components/UIComponent";
import './LoadingSpinner.scss';

export default class Spinner extends UIComponent {
    override _template(): UITemplate<UIComponentProps> {
       const loadingSpinner = createElement('div');
       loadingSpinner.className = 'loadingSpinner';

       for (let i = 0; i < 3; i++) {
           const dot = createElement('div');
           dot.className = 'dot';
           loadingSpinner.appendChild(dot);
       }
       return {element: loadingSpinner};
    }
}