import QuestionReader  from "../QuestionReader/QuestionReader";
import DomInserter from "../DomInserter/DomInserter";
import ChatGPT from "../ChatGPT/ChatGPT";
import SettingsBox from "../UI Components/SettingsBox/SettingsBox";

export default class AntiTestportalPlus {
    private _settings:IAntiTestportalSettings | null = null; 
    private _chatGPT:ChatGPT | null = null;
    private _settingsBox = new SettingsBox();
    
    private readonly keys = [
        "chatGPT_Module"
    ];

    constructor() {
        console.clear();
        console.log('%cAntiTestportal+\nby: @Jason.json','color: #ff0; font-size: 20px;');
        this.setSettings();
        
        if(document.URL.includes('/exam/DoTestQuestion.html') || document.URL.includes('/exam/DoStartTest.html')) {
            const parent = document.querySelector('.question-area');
            this._chatGPT = new ChatGPT();
            
            console.log('Question: ', QuestionReader.readQuestionText());
            QuestionReader.readAnswers();

            DomInserter.insertElement(this._chatGPT.getWindow()._getBody(), parent as HTMLElement);
        }
    }

    private setSettings():void {
        this.keys.forEach(key => {
            if(!localStorage.getItem(key)) {
                localStorage.setItem(key, 'true');
            }
        });
    }

    private loadSettings():void {
        
    }
}