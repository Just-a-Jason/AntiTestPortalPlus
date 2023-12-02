import SettingsBox from "../UI Components/SettingsBox/SettingsBox";
import QuestionReader  from "../QuestionReader/QuestionReader";
import DomInserter from "../DomInserter/DomInserter";
import ChatGPT from "../ChatGPT/ChatGPT";

export default class AntiTestportalPlus {
    private _settings:IAntiTestportalSettings | null = null; 
    private _chatGPT:ChatGPT | null = null;
    private _settingsBox = new SettingsBox();
    
    constructor() {
        console.clear();
        console.log('%cAntiTestportal+\nby: @Jason.json','color: #ff0; font-size: 20px;');
        
        if(document.URL.includes('/exam/DoTestQuestion.html') || document.URL.includes('/exam/DoStartTest.html')) {
            const parent = document.querySelector('.question-area');
            if (this._settingsBox.getSettingsValue('chatGPT_Module')) {
                this._chatGPT = new ChatGPT();
                DomInserter.insertElement(this._chatGPT.getWindow()._getBody(), parent as HTMLElement);
            }
            
            console.log('Question: ', QuestionReader.readQuestionText());
            QuestionReader.readAnswers();
        }
    }
}