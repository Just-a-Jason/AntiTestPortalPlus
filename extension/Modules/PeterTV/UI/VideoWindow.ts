import UIComponent from "../../UI Components/UIComponent";
import AssetsLoader from "../../Helpers/AssetsLoader/AssetsLoader";
import './VideoWindow.css';

export default class VideoWindow extends UIComponent {
  private selected:boolean = false;
  private currentVideo = 0;
  private maxVideos = 2;
  
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
      peterTV.className = 'PeterTV';

      const image = document.createElement('img');
      image.src = AssetsLoader.LoadAsset('PeterTV/peterTv.png');
      image.alt = 'peterTV';
      image.className = 'PeterTV__TVImage';

      const video = document.createElement('video');
      video.src = AssetsLoader.LoadAsset(`PeterTV/vid_${this.currentVideo || 0}.mp4`);

      video.addEventListener('ended' , () => this.nextVideo(video));

      video.addEventListener('dblclick', () => this.nextVideo(video));

      video.className = 'PeterTV__video';
      video.autoplay = true;

      peterTV.appendChild(image);
      peterTV.appendChild(video);

      return peterTV;
  }

  private nextVideo(video:HTMLVideoElement):void {
    this.currentVideo++;
    this.currentVideo %= this.maxVideos;
    video.src = AssetsLoader.LoadAsset(`PeterTV/vid_${this.currentVideo}.mp4`);
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

