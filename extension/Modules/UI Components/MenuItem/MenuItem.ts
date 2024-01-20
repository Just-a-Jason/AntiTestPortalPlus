import UIComponentProps from '../Interfaces/UIComponentProps';
import UIComponentNew from '../UIComponent';
import './MenuItem.scss';

export default class MenuItem extends UIComponentNew {
    constructor(private readonly menuItemText:string) {
        super();
        this._body.element.textContent = this.menuItemText;    
    }

    override _template(): UITemplate<UIComponentProps> {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        return {element: menuItem};
    }
}