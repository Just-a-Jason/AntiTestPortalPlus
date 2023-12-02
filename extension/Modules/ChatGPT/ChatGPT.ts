import ResponseWindow from "./UI/ResponseWindow/ResponseWindow";
import QuestionReader from "../QuestionReader/QuestionReader";
import ChatGPTError from "./UI/ChatGPTError/ChatGPTError";
import HtmlHelper from "../Helpers/HtmlHelper/HtmlHelper";
import RetryButton from "./UI/RetryButton/RetryButton";
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
                    const body = ChatGPT._window?._getBody()?.querySelector('.ChatGPTResponse__Body');
                    if(body) {
                        const error = new ChatGPTError('Something went wrong. Please try again later.');
                        const button = new RetryButton();
    
                        HtmlHelper.removeAllChild(body as HTMLElement);
                        body.appendChild(error._getBody());
                        body.appendChild(button._getBody());
                    }
                }, 3000);
            };
        }
    }
} 
