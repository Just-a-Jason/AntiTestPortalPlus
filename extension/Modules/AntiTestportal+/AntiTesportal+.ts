import SettingsBox from "../UI Components/SettingsBox/SettingsBox";
import QuestionReader  from "../QuestionReader/QuestionReader";
import QuestionSearch from "../QuestionSearch/QuestionSearch";
import ScriptBuilder from "../ScriptBuilder/ScriptBuilder";
import ChatGPT from "../ChatGPT/ChatGPT";
import AntiBlur from "../Blur/AntiBlur";

declare global {
    interface Window {
        startTime: number;
    }
}

export default class AntiTestportalPlus {
    private _settingsBox = new SettingsBox();
   
    constructor() {
        if (this._settingsBox.getSettingsValue('unlimitedTime_Module')) {
        }
        
        if(this._settingsBox.getSettingsValue('antiBlur_Module')) AntiBlur.turn(true);
        if(this._settingsBox.getSettingsValue('questionSearch_Module')) QuestionSearch.turn(true);

        console.clear();
        console.log('%cAntiTestportal+\nby: @Jason.json','color: #ff0; font-size: 20px;');
    }
}