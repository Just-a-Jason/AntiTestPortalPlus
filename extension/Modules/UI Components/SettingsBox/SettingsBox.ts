import UIComponent from "../UIComponent";
import Slider from "../Slider/Slider";
import './SettingsBox.css';

export default class SettingsBox extends UIComponent {
    private menuItems:Slider[] = [];

    override _template(): HTMLElement {
        const widgetContainer = document.createElement('div');
        widgetContainer.id = 'widget-container';
        document.body.appendChild(widgetContainer);
  
        const widgetMenu = document.createElement('div');
        widgetMenu.id = 'widget-menu';
        widgetContainer.appendChild(widgetMenu);
  
        const menuItems = ['Anti Blur 🫧', 'chatGPT 🤖', 'Image Search 🖼️🔍', 'Unlimited Time ⌛'];

        menuItems.forEach(function (itemText) {
          const menuItem = document.createElement('div');
          menuItem.className = 'menu-item';
          menuItem.textContent = itemText;
          
          const slider = new Slider('chatGPTModule');
          menuItem.appendChild(slider._getBody());
          widgetMenu.appendChild(menuItem);
        });
  
        const widgetText = document.createElement('div');
        widgetText.id = 'widget-text';
        widgetText.textContent = 'AntiTestportal+';
        widgetContainer.appendChild(widgetText);
  
        widgetText.addEventListener('click', function () {
          widgetMenu.style.display = (widgetMenu.style.display === 'none' || widgetMenu.style.display === '') ? 'block' : 'none';
        });

        return widgetContainer;
    }

    override _ready():void {
      console.log('Settings window is initialized!');
    }
}