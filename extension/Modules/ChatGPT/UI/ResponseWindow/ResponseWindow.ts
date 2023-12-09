import UIComponentProps from "../../../UI Components/Interfaces/UIComponentProps";
import UIComponentNew from "../../../UI Components/UIComponentNew";
import AssetsLoader from "../../../Helpers/AssetsLoader/AssetsLoader";
import HtmlHelper from "../../../Helpers/HtmlHelper/HtmlHelper";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ChatGPTError from "../ChatGPTError/ChatGPTError";
import RetryButton from "../RetryButton/RetryButton";
import './ResponseWindow.css';

interface ResponseWindowProps extends UIComponentProps {
    responseBody:HTMLElement;
    spinner?: LoadingSpinner;
}

export default class ResponseWindow extends UIComponentNew<ResponseWindowProps> {

    protected override _template(): UITemplate<ResponseWindowProps> {
        const chatGPTResponse = document.createElement('div');
        chatGPTResponse.className = 'ChatGPTResponse';

        const headerSection = document.createElement('section');
        headerSection.className = 'ChatGPTResponse__Header';

        const imageElement = document.createElement('img');
        
        imageElement.src = AssetsLoader.LoadAsset('chat-logo.png');
        
        imageElement.alt = 'chat gpt logo';
        imageElement.className = 'ChatGPTResponse__Image';

        const textParagraph = document.createElement('p');
        textParagraph.textContent = 'ChatGPT';

        headerSection.appendChild(imageElement);
        headerSection.appendChild(textParagraph);

        const bodySection = document.createElement('section');
        bodySection.className = 'ChatGPTResponse__Body';

        const spinner = new LoadingSpinner();
        bodySection.appendChild(spinner._getBody().element);

        const footerSection = document.createElement('footer');
        footerSection.className = 'ChatGPTResponse__Footer';

        const poweredByParagraph = document.createElement('p');
        poweredByParagraph.textContent = 'Powered by OpenAI';

        footerSection.appendChild(poweredByParagraph);

        chatGPTResponse.appendChild(headerSection);
        chatGPTResponse.appendChild(bodySection);
        chatGPTResponse.appendChild(footerSection);
        
        return {
            element: chatGPTResponse,
            structure: {
                responseBody: bodySection,
                spinner: spinner
            }
        };
    }

    override _ready(): void {
        console.log('ResponseBox is ready!');
    }

    displayError(text:string):void {
        if (this._body.structure?.responseBody) {
            const error = new ChatGPTError(text);
            const button = new RetryButton();
    
            HtmlHelper.removeAllChild(this._body.structure.responseBody!);
            this._body.structure?.responseBody.appendChild(error._getBody().element);
            this._body.structure?.responseBody.appendChild(button._getBody());
        }
    }
}