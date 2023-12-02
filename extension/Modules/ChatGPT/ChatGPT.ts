import ResponseWindow from "./UI/ResponseWindow/ResponseWindow";
import ChatGPTError from "./UI/ChatGPTError/ChatGPTError";
import DomInserter from "../DomInserter/DomInserter";
import HtmlHelper from "../Helpers/HtmlHelper/HtmlHelper";
import QuestionReader from "../QuestionReader/QuestionReader";
import RetryButton from "./UI/RetryButton/RetryButton";

export default abstract class ChatGPT {
    private static _window: ResponseWindow | null = null;

    static turn(state:boolean) {
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
