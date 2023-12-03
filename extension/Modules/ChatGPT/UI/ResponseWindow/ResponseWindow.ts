import HtmlHelper from "../../../Helpers/HtmlHelper/HtmlHelper";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import UIComponent from "../../../UI Components/UIComponent"; 
import ResponseArea from "../ResponseArea/ResponseArea";
import ChatGPTError from "../ChatGPTError/ChatGPTError";
import RetryButton from "../RetryButton/RetryButton";
import './ResponseWindow.css';

export default class ResponseWindow extends UIComponent {
    private _responseBody: HTMLElement | null = null;

    constructor() {
        super();
        this._responseBody = this._body.querySelector('.ChatGPTResponse__Body');
    }
    
    override _template(): HTMLElement {
        const chatGPTResponse = document.createElement('div');
        chatGPTResponse.className = 'ChatGPTResponse';

        const headerSection = document.createElement('section');
        headerSection.className = 'ChatGPTResponse__Header';

        const imageElement = document.createElement('img');
        
        imageElement.src = 'https://github.com/Just-a-Jason/AntiTestPortalPlus/blob/main/public/Assets/chat-logo.png?raw=true';
        
        imageElement.alt = 'chat gpt logo';
        imageElement.className = 'ChatGPTResponse__Image';

        const textParagraph = document.createElement('p');
        textParagraph.textContent = 'ChatGPT';

        headerSection.appendChild(imageElement);
        headerSection.appendChild(textParagraph);

        const bodySection = document.createElement('section');
        bodySection.className = 'ChatGPTResponse__Body';
        this._responseBody = bodySection;

        bodySection.appendChild(new LoadingSpinner()._getBody());

        const footerSection = document.createElement('footer');
        footerSection.className = 'ChatGPTResponse__Footer';

        const poweredByParagraph = document.createElement('p');
        poweredByParagraph.textContent = 'Powered by OpenAI';

        footerSection.appendChild(poweredByParagraph);

        chatGPTResponse.appendChild(headerSection);
        chatGPTResponse.appendChild(bodySection);
        chatGPTResponse.appendChild(footerSection);
        
        return chatGPTResponse;
    }

    override _ready(): void {
        console.log('ResponseBox is ready!');
    }

    setResponse(content:string):void {
        HtmlHelper.removeAllChild(this._responseBody as HTMLElement);
        const res = new ResponseArea();
        res.setContent(content);

        this._responseBody?.appendChild(res._getBody());
    }

    displayError(text:string):void {
        if (this._responseBody) {
            const error = new ChatGPTError(text);
            const button = new RetryButton();
    
            HtmlHelper.removeAllChild(this._responseBody as HTMLElement);
            this._responseBody.appendChild(error._getBody());
            this._responseBody.appendChild(button._getBody());
        }
    }
}
