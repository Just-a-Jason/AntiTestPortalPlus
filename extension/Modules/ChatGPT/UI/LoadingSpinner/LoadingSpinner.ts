import UIComponentProps from "../../../UI Components/Interfaces/UIComponentProps";
import UIComponentNew from "../../../UI Components/UIComponent";
import './LoadingSpinner.scss';

export default class Spinner extends UIComponentNew {
    override _template(): UITemplate<UIComponentProps> {
       const loadingSpinner = document.createElement('div');
       loadingSpinner.className = 'loadingSpinner';

       for (let i = 0; i < 3; i++) {
           const dot = document.createElement('div');
           dot.className = 'dot';
           loadingSpinner.appendChild(dot);
       }
       return {element: loadingSpinner};
    }
}