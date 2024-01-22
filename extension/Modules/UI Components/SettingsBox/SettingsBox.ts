import { createElement, parseUIComponent } from "../../Helpers/HtmlHelper/HtmlHelper";
import UIComponentProps from "../Interfaces/UIComponentProps";
import Extension from "../../Extension/ExtensionApi";
import MenuItem from "../MenuItem/MenuItem";
import UIComponent from "../UIComponent";
import Slider from "../Slider/Slider";
import './SettingsBox.scss';
import SettingsButton from "../SettingsButton/SettingsButton";


interface SliderProps extends UIComponentProps {
  menu:HTMLElement
}

export default class SettingsBox extends UIComponent<SliderProps> {

  protected override _template(): UITemplate<SliderProps> {
      const widgetContainer = createElement('div');
      widgetContainer.classList.add('SettingsBox');
      document.body.appendChild(widgetContainer);

      const widgetMenu = createElement('div');
      widgetMenu.id = 'widget-menu';
      widgetContainer.appendChild(widgetMenu);

      const widgetText = createElement('div');
      widgetText.id = 'widget-text';

      const image = createElement('img') as HTMLImageElement;
      image.src = Extension.runtime.loadAsset('Assets/logo.png');
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

      if (key === 'chatGPT_Module') {
        const container = createElement('div');
        container.classList.add('flex-container');
        
        const settingsButton = new SettingsButton();
        
        container.appendChild(parseUIComponent(settingsButton));
        container.appendChild(parseUIComponent(slider));
        menuItem.appendChild(container);
      }
      else menuItem.appendChild(slider);
      

      menu?.appendChild(parseUIComponent(menuItem));
    }
  }

  getSettingsValue(key:SettingKey):boolean {
    if(!localStorage.getItem(key)) return false;
    else return JSON.parse(localStorage.getItem(key)!);
  }
}