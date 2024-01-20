import { createElement } from '../../Helpers/HtmlHelper/HtmlHelper';
import UIComponentProps from '../Interfaces/UIComponentProps';
import UIComponent from '../UIComponent';
import './MenuItem.scss';

export default class MenuItem extends UIComponent {
    constructor(private readonly menuItemText:string) {
        super();
        this._body.element.textContent = this.menuItemText;    
    }

    override _template(): UITemplate<UIComponentProps> {
        const menuItem = createElement('div');
        menuItem.className = 'menu-item';
        return {element: menuItem};
    }
}