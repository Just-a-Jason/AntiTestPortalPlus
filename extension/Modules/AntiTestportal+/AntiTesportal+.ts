import SettingsBox from "../UI Components/SettingsBox/SettingsBox";
import QuestionSearch from "../QuestionSearch/QuestionSearch";
import Extension, { buildTarget } from "../Extension/ExtensionApi";
import ChatGPT from "../ChatGPT/ChatGPT";
import AntiBlur from "../Blur/AntiBlur";


export default class AntiTestportalPlus {
    private readonly _settingsBox = new SettingsBox();

    constructor(target:buildTarget) {
        Extension.Build(target);

        if(this._settingsBox.getSettingsValue('questionSearch_Module')) QuestionSearch.turn(true);
        if(this._settingsBox.getSettingsValue('antiBlur_Module')) AntiBlur.turn(true);
        if(this._settingsBox.getSettingsValue('chatGPT_Module')) ChatGPT.turn(true);

        console.clear();
        console.log('%cAntiTestportal+\nby: @Jason.json','color: #ff0; font-size: 20px;');
    }
}