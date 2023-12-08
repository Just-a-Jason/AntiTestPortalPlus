import ChatGPT from "../../ChatGPT/ChatGPT";
import AntiBlur from "../../Blur/AntiBlur";
import UIComponent from "../UIComponent";
import UnlimitedTime from "../../UnlimitedTime/UnlimitedTime";
import PeterTV from "../../PeterTV/PeterTV";
import './Slider.css';

export default class Slider extends UIComponent {
  private _on:boolean = false;

  override _template(): HTMLElement {
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider';
    document.body.appendChild(sliderContainer);

    const sliderSet = document.createElement('div');
    sliderSet.className = 'slider__set';
    sliderContainer.appendChild(sliderSet);
    return sliderContainer;
  }

  constructor(private _settingKey:SettingKey) {
    super();

    if (localStorage.getItem(this._settingKey)) this._on = JSON.parse(localStorage.getItem(this._settingKey)!);
    
    this.setState(this._on);
  }

  override _ready(): void {    
    this._body.addEventListener('click', (e) => {
      this.setState(!this._on);
      this.setSettingState();

      if(this._settingKey == "peterTV_Module") {
          PeterTV.turn(this._on, {
            x: e.pageX,
            y: e.pageY
          });
      }
    });
  }

  private setState(_state:boolean):void {
    let state = (_state) ?  120 : 0;
    
    if(_state) this._body.classList.add('on');
    else this._body.classList.remove('on');
    
    const sliderState = this._body.querySelector('.slider__set');
    
    if(sliderState) (sliderState as HTMLElement).style['transform'] = `translateX(${state}%)`;
    this._on = _state;
  }

  private setSettingState():void {
    localStorage.setItem(this._settingKey, (this._on) ? 'true' : 'false');

    this.setState(JSON.parse(localStorage.getItem(this._settingKey)!));
    
    switch (this._settingKey) {
      case 'unlimitedTime_Module':
        UnlimitedTime.turn(this._on);  
      break;
      case 'antiBlur_Module':
        AntiBlur.turn(this._on);
      break;
      case 'chatGPT_Module':
        ChatGPT.turn(this._on);
      break;
    }
  }
}