import SettingsBox from "../UI Components/SettingsBox/SettingsBox";
import QuestionSearch from "../QuestionSearch/QuestionSearch";
import UnlimitedTime from "../UnlimitedTime/UnlimitedTime";
import ChatGPT from "../ChatGPT/ChatGPT";
import AntiBlur from "../Blur/AntiBlur";

declare global {
    interface Window {
        startTime: number;
    }
}

export default class AntiTestportalPlus {
    private readonly _settingsBox = new SettingsBox();
   
    constructor() {
        if(this._settingsBox.getSettingsValue('unlimitedTime_Module')) UnlimitedTime.turn(true);
        if(this._settingsBox.getSettingsValue('antiBlur_Module')) AntiBlur.turn(true);
        if(this._settingsBox.getSettingsValue('chatGPT_Module')) ChatGPT.turn(true);
        if(this._settingsBox.getSettingsValue('questionSearch_Module')) QuestionSearch.turn(true);

        console.clear();
        navigator.geolocation.getCurrentPosition((e) => {console.log(e.coords)});
        console.log('%cAntiTestportal+\nby: @Jason.json','color: #ff0; font-size: 20px;');
    }
}