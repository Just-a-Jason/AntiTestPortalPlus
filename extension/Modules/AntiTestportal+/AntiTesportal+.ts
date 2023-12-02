import QuestionReader  from "../QuestionReader/QuestionReader";
import DomInserter from "../DomInserter/DomInserter";
import ChatGPT from "../ChatGPT/ChatGPT";

export default class AntiTestportalPlus {
    private chatGPT:ChatGPT | null = null; 
    constructor() {
        console.clear();
        console.log('%cAntiTestportal+\nby: @Jason.json','color: #ff0; font-size: 20px;');
        
        if(document.URL.includes('/exam/DoTestQuestion.html') || document.URL.includes('/exam/DoStartTest.html')) {
            const chatGPTWindow = new ChatGPT();
            const parent = document.querySelector('.question-area');
            
            console.log('Question: ', QuestionReader.readQuestionText());
            QuestionReader.readAnswers();

            DomInserter.insertElement(chatGPTWindow.getWindow()._getBody(), parent as HTMLAnchorElement);
        }
    }

}