import UIComponent from "../UIComponent";
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

  constructor(private _settingsKey:string) {
      super();
  }

  override _ready(): void {
    this._body.addEventListener('click', () => {
         this.setState(!this._on);
    });   
  }

  private setState(_state:boolean):void {
    let state = (_state) ?  0 : 120;
    
    this._body.classList.toggle('on');
    
    const sliderState = this._body.querySelector('.slider__set');
    
    if(sliderState) (sliderState as HTMLElement).style['transform'] = `translateX(${state}%)`;
    this._on = _state;
  }
}