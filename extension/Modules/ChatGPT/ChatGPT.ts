import ResponseWindow from "./UI/ResponseWindow/ResponseWindow";
import QuestionReader from "../QuestionReader/QuestionReader";
import DomInserter from "../DomInserter/DomInserter";

export default abstract class ChatGPT {
    private static _window: ResponseWindow | null = null;

    static turn(state:boolean) {
        if(document.URL.includes('/exam/DoTestQuestion.html') || document.URL.includes('/exam/DoStartTest.html') || document.URL.includes('/exam/LoadQuestion.html')) {

            if (!state) {
                ChatGPT._window?._remove();
                ChatGPT._window = null;
            }
            else {
                ChatGPT._window = new ResponseWindow();
                const parent = document.querySelector('.question-area') as HTMLElement;
                DomInserter.insert(ChatGPT._window, parent);
    
                console.log('%cChatGPT module has been initialized.', 'color:#80d724; font-size: 20px;');
    
                const questionContent = QuestionReader.readQuestionText() + '\n' + QuestionReader.readAnswers();
    
                console.log(questionContent);
    
                setTimeout(() => {
                    ChatGPT._window?.displayError('Something went wrong. Please try again later.');
                }, 3000);
            };
        }
    }
} 
