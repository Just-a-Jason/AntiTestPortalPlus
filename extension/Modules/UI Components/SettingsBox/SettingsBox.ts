import MenuItem from "../MenuItem/MenuItem";
import UIComponent from "../UIComponent";
import Slider from "../Slider/Slider";
import './SettingsBox.css';

type SettingKey = 'antiBlur_Module' | 'chatGPT_Module' | 'imageSearch_Module' | 'unlimitedTime_Module';

export default class SettingsBox extends UIComponent {

  override _template(): HTMLElement {
      const widgetContainer = document.createElement('div');
      widgetContainer.id = 'widget-container';
      document.body.appendChild(widgetContainer);

      const widgetMenu = document.createElement('div');
      widgetMenu.id = 'widget-menu';
      widgetContainer.appendChild(widgetMenu);

      const widgetText = document.createElement('div');
      widgetText.id = 'widget-text';
      widgetText.textContent = 'AntiTestportal+';
      widgetContainer.appendChild(widgetText);

      widgetText.addEventListener('click', function () {
        widgetMenu.style.display = (widgetMenu.style.display === 'none' || widgetMenu.style.display === '') ? 'block' : 'none';
      });
      return widgetContainer;
  }

  override _ready(): void {
    this.addSliders();
  }

  private addSliders():void {
    const menuItems = ['Anti Blur 🫧', 'chatGPT 🤖', 'Image Search 🖼️🔍', 'Unlimited Time ⌛'];
    const menu = this._body.querySelector('#widget-menu');
    
    const _keys = new Map([
      ['antiBlur_Module', 'true'],
      ['chatGPT_Module', 'false'],
      ['imageSearch_Module', 'true'],
      ['unlimitedTime_Module', 'false']
    ]);

    let idx = 0;
    for (const key of _keys.keys()) {
      if(!localStorage.getItem(key)) 
      localStorage.setItem(key, _keys.get(key)!);

      const menuItem = new MenuItem(menuItems[idx++]);
      const slider = new Slider(key);
      menuItem.appendChild(slider);

      menu?.appendChild(menuItem._getBody());
    }
  }

  getSettingsValue(key:SettingKey):boolean {
    if(!localStorage.getItem(key)) return false;
    else return JSON.parse(localStorage.getItem(key)!);
  }
}