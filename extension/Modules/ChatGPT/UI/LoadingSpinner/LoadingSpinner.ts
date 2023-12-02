import UIComponent from "../../../UI Components/UIComponent";
import './LoadingSpinner.css';

export default class Spinner extends UIComponent {
    override _template(): HTMLElement {
       const loadingSpinner = document.createElement('div');
       loadingSpinner.className = 'loadingSpinner';

       for (let i = 0; i < 3; i++) {
           const dot = document.createElement('div');
           dot.className = 'dot';
           loadingSpinner.appendChild(dot);
       }
       return loadingSpinner;
    }
}