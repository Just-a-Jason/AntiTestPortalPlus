import MenuItem from "../MenuItem/MenuItem";
import UIComponent from "../UIComponent";
import Slider from "../Slider/Slider";
import './SettingsBox.css';
import AssetsLoader from "../../Helpers/AssetsLoader/AssetsLoader";

type SettingKey = 'antiBlur_Module' | 'chatGPT_Module' | 'imageSearch_Module' | 'unlimitedTime_Module' | 'questionSearch_Module';

export default class SettingsBox extends UIComponent {

  override _template(): HTMLElement {
      const widgetContainer = document.createElement('div');
      widgetContainer.classList.add('SettingsBox');
      document.body.appendChild(widgetContainer);

      const widgetMenu = document.createElement('div');
      widgetMenu.id = 'widget-menu';
      widgetContainer.appendChild(widgetMenu);

      const widgetText = document.createElement('div');
      widgetText.id = 'widget-text';

      const image = document.createElement('img');
      image.src = AssetsLoader.LoadAsset('logo.png');
      image.classList.add('SettingsBox__image');

      widgetText.appendChild(image);
      widgetContainer.appendChild(widgetText);

      widgetText.addEventListener('click', () => {
        widgetMenu.classList.toggle('menuVisible');
      });
      
      return widgetContainer;
  }

  override _ready(): void {
    this.addSliders();
  }

  private addSliders():void {
    const menuItems = ['Anti Blur 🫧', 'chatGPT 🤖', 'Image Search 🖼️🔍', 'Unlimited Time ⌛', 'Question Search ❓🔍'];
    const menu = this._body.querySelector('#widget-menu');
    
    const _keys = new Map([
      ['antiBlur_Module', 'true'],
      ['chatGPT_Module', 'false'],
      ['imageSearch_Module', 'false'],
      ['unlimitedTime_Module', 'false'],
      ['questionSearch_Module', 'true']
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