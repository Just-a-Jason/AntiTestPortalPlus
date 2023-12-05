import AssetsLoader from "../../Helpers/AssetsLoader/AssetsLoader";
import UIComponent from "../../UI Components/UIComponent";
import './VideoWindow.css';

export default class VideoWindow extends UIComponent {
  private selected:boolean = false;
  
  private moveWindow(x:number, y:number) {
    if  (this.selected) {
      this.setPosition({x: x, y: y});
    }
  }  


  setPosition(position: {x:number, y: number}):void {
    const x = position.x - (this._body.clientWidth/2)+ 'px';
    const y = position.y -(this._body.clientHeight/2) + 'px';

    this._body.style['left'] = x;
    this._body.style['top'] = y;
  }

  override _template():HTMLElement {
    const peterTV = document.createElement('div');
    peterTV.classList.add('PeterTV');

    const video = document.createElement('video');
    video.src = AssetsLoader.LoadAsset('PeterTV/vid_1.mp4');
    video.classList.add('PeterTV__video');
    video.autoplay = true;
    video.loop = true;

    peterTV.appendChild(video);
    return peterTV;
  }
  

  override _ready(): void {
    ['mousedown', 'touchstart'].forEach(event => this._body.addEventListener(event, () => this.selected = true));
    
    ['mouseup', 'touchend'].forEach(event =>  this._body.addEventListener(event, () => this.selected = false));
   
    ['mousemove', 'touchmove'].forEach(event => this._body.addEventListener(event, (e) => {
        if(e instanceof TouchEvent) this.moveWindow(e.touches[0].pageX, e.touches[0].pageY);
        if (e instanceof MouseEvent) this.moveWindow(e.pageX, e.pageY);
    }));
  }
}

