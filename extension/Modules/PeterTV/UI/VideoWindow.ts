import AssetsLoader from "../../Helpers/AssetsLoader/AssetsLoader";
import UIComponent from "../../UI Components/UIComponent";
import './VideoWindow.css';

export default class VideoWindow extends UIComponent {
  private selected:boolean = false;
  
  private moveWindow(e:MouseEvent) {
    if  (this.selected) {
      const x = e.pageX - (this._body.clientWidth/2)+ 'px';
      const y = e.pageY -(this._body.clientHeight/2) + 'px';

      this._body.style['left'] = x;
      this._body.style['top'] = y;
    }
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
    document.onmousemove = (e) => {this.moveWindow(e)};
    this._body.addEventListener('mousedown', () => this.selected = true);
    this._body.addEventListener('mouseup', () => this.selected = false);
  }
}

