import UIComponentProps from "../Interfaces/UIComponentProps";
import UnlimitedTime from "../../UnlimitedTime/UnlimitedTime";
import UIComponentNew from "../UIComponentNew";
import ChatGPT from "../../ChatGPT/ChatGPT";
import PeterTV from "../../PeterTV/PeterTV";
import AntiBlur from "../../Blur/AntiBlur";
import './Slider.css';

interface ISliderProps extends UIComponentProps {
    sliderState:HTMLElement;
}

export default class Slider extends UIComponentNew<ISliderProps> {
  private _on:boolean = false;

  override _template(): UITemplate<ISliderProps> {
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider';
    document.body.appendChild(sliderContainer);

    const sliderSet = document.createElement('div');
    sliderSet.className = 'slider__set';
    sliderContainer.appendChild(sliderSet);
    return {
      element:sliderContainer, 
      structure: {
        sliderState:sliderSet
      }
    };
  }

  constructor(private _settingKey:SettingKey) {
    super();

    if (localStorage.getItem(this._settingKey)) this._on = JSON.parse(localStorage.getItem(this._settingKey)!);
    
    this.setState(this._on);
    
    this._body.element.addEventListener('click', (e) => {
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
    
    if(_state) this._body.element.classList.add('on');
    else this._body.element.classList.remove('on');
        
    this._body.structure!.sliderState.style['transform'] = `translateX(${state}%)`;
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