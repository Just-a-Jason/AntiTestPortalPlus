import SettingsBox from "../UI Components/SettingsBox/SettingsBox";
import QuestionSearch from "../QuestionSearch/QuestionSearch";
import ChatGPT from "../ChatGPT/ChatGPT";
import AntiBlur from "../Blur/AntiBlur";
import DomInserter from "../DomInserter/DomInserter";
import VideoWindow from "../PeterTV/UI/VideoWindow";

declare global {
    interface Window {
        startTime: number;
    }
}

export default class AntiTestportalPlus {
    private readonly _settingsBox = new SettingsBox();
   
    constructor() {
        
        const button = document.createElement('button');
        button.innerText = 'new PeaterTV';

        button.onclick = () => {
            DomInserter.insert(new VideoWindow());
        }
        
        DomInserter.insert(button);

        if (this._settingsBox.getSettingsValue('unlimitedTime_Module')) {
        }
        
        if(this._settingsBox.getSettingsValue('antiBlur_Module')) AntiBlur.turn(true);
        if(this._settingsBox.getSettingsValue('chatGPT_Module')) ChatGPT.turn(true);
        if(this._settingsBox.getSettingsValue('questionSearch_Module')) QuestionSearch.turn(true);

        console.clear();
        console.log('%cAntiTestportal+\nby: @Jason.json','color: #ff0; font-size: 20px;');
    }
}