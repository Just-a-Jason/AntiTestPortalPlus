import UIComponent from '../UIComponent';
import './MenuItem.css';

export default class MenuItem extends UIComponent {
    constructor(private readonly menuItemText:string) {
        super();
        this._body.textContent = this.menuItemText;    
    }

    override _template(): HTMLElement {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        return menuItem;
    }
}