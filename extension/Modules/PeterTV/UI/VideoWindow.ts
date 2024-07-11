import UIComponentProps from "../../UI Components/Interfaces/UIComponentProps";
import { createElement } from "../../Utils/Utils";
import UIComponent from "../../UI Components/UIComponent";
import BrowserAPI from "../../Browser API/BrowserAPI";
import "./VideoWindow.scss";

interface VideoWindowProps extends UIComponentProps {
  video: HTMLVideoElement;
}

export default class VideoWindow extends UIComponent<VideoWindowProps> {
  private currentVideo = 0;
  private maxVideos = 10;

  setPosition(position: { x: number; y: number }): void {
    const x = position.x - this.body.element.clientWidth / 2 + "px";
    const y = position.y - this.body.element.clientHeight / 2 + "px";

    this.body.element.style["left"] = x;
    this.body.element.style["top"] = y;
  }

  protected override template(): UITemplate<VideoWindowProps> {
    const peterTV = createElement("div");
    peterTV.className = "PeterTV";

    const image = createElement("img") as HTMLImageElement;
    image.src = BrowserAPI.loadAsset("Assets/PeterTV/peterTv.png");
    image.alt = "peterTV";
    image.className = "PeterTV__TVImage";

    const video = createElement("video") as HTMLVideoElement;
    video.src = BrowserAPI.loadAsset(
      `Assets/PeterTV/vid_${this.currentVideo || 0}.mp4`
    );

    video.addEventListener("ended", () => this.nextVideo());

    video.addEventListener("dblclick", () => this.nextVideo());

    video.className = "PeterTV__video";
    video.autoplay = true;

    peterTV.appendChild(image);
    peterTV.appendChild(video);

    return {
      element: peterTV,
      structure: {
        video: video,
      },
    };
  }

  private nextVideo(): void {
    this.currentVideo++;
    this.currentVideo %= this.maxVideos;
    this.body.structure!.video.src = BrowserAPI.loadAsset(
      `Assets/PeterTV/vid_${this.currentVideo}.mp4`
    );
  }
}
