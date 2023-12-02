import DomInserter from "../DomInserter/DomInserter";
import ResponseWindow from "./UI/ResponseWindow/ResponseWindow";

export default abstract class ChatGPT {
    private static _window: ResponseWindow | null = null;

    constructor() {
        console.log('%cChatGPT module has been initialized.', 'color:#80d724; font-size: 20px;');
    }

    static turn(state:boolean) {
        if (!state) {
            ChatGPT._window?._remove();
            ChatGPT._window = null;
        }
        else {
            ChatGPT._window = new ResponseWindow();
            const parent = document.querySelector('.question-area') as HTMLElement;
            DomInserter.insert(ChatGPT._window, parent)
        };
    }
} 
