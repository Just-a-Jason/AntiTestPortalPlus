import AssetsLoader from "../../Helpers/AssetsLoader/AssetsLoader";
import UIComponentProps from "../Interfaces/UIComponentProps";
import UIComponentNew from "../UIComponentNew";
import MenuItem from "../MenuItem/MenuItem";
import Slider from "../Slider/Slider";
import './SettingsBox.css';


interface SliderProps extends UIComponentProps {
  menu:HTMLElement
}

export default class SettingsBox extends UIComponentNew<SliderProps> {

  protected override _template(): UITemplate<SliderProps> {
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
      
      return {
        element: widgetContainer, 
        structure: {
          menu: widgetMenu
        }
      };
  }

  constructor() {
    super();
    this.addSliders();
  }

  private addSliders():void {
    const menuItems = ['Anti Blur 🫧', 'chatGPT 🤖', 'Question Search ❓🔍', 'PeterTV 📺'];
    const menu = this._body.structure?.menu;
    
    const _keys:Map<SettingKey, string> = new Map([
      ['antiBlur_Module', 'true'],
      ['chatGPT_Module', 'false'],
      ['questionSearch_Module', 'true'],
      ['peterTV_Module', 'false']
    ]);

    let idx = 0;
    for (const key of _keys.keys()) {
      if(!localStorage.getItem(key)) 
      localStorage.setItem(key, _keys.get(key)!);

      const menuItem = new MenuItem(menuItems[idx++]);
      const slider = new Slider(key);
      menuItem.appendChild(slider._getBody().element);

      menu?.appendChild(menuItem._getBody().element);
    }
  }

  getSettingsValue(key:SettingKey):boolean {
    if(!localStorage.getItem(key)) return false;
    else return JSON.parse(localStorage.getItem(key)!);
  }
}