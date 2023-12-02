import SettingsBox from "../UI Components/SettingsBox/SettingsBox";
import QuestionReader  from "../QuestionReader/QuestionReader";
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
            ScriptBuilder.build("window.startTime = 99999999999;");
        }
        
        if(this._settingsBox.getSettingsValue('antiBlur_Module')) AntiBlur.turn(true);

        console.clear();
        console.log('%cAntiTestportal+\nby: @Jason.json','color: #ff0; font-size: 20px;');

        if(document.URL.includes('/exam/DoTestQuestion.html') || document.URL.includes('/exam/DoStartTest.html') || document.URL.includes('/exam/LoadQuestion.html')) {
            const parent = document.querySelector('.question-area');

            if (this._settingsBox.getSettingsValue('imageSearch_Module')) QuestionReader.readImage();
            if (this._settingsBox.getSettingsValue('chatGPT_Module')) {
                ChatGPT.turn(true);
            }

            console.log('Question: ', QuestionReader.readQuestionText());
            QuestionReader.readAnswers();
        }
    }
}