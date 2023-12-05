import DomInserter from "../DomInserter/DomInserter";
import VideoWindow from "./UI/VideoWindow";

export default class PeterTV {
    private static _peterTVWindow: VideoWindow | null = null;

    static turn(state:boolean, position:null | {x:number, y:number} = null):void {
        if (state) {
            const window = new VideoWindow();

            if(position) window.setPosition(position);
            
            this._peterTVWindow = window;
            DomInserter.insert(window);
            
            console.log(chrome.cookies);
        }
        else this._peterTVWindow?._remove();
    }
}