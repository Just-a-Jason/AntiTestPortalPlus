import UIComponentProps from "../../../UI Components/Interfaces/UIComponentProps";
import HtmlHelper, { createElement, parseUIComponent } from "../../../Helpers/HtmlHelper/HtmlHelper";
import UIComponent from "../../../UI Components/UIComponent";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ExtensionApi from "../../../Extension/ExtensionApi";
import ChatGPTError from "../ChatGPTError/ChatGPTError";
import RetryButton from "../RetryButton/RetryButton";
import './ResponseWindow.scss';

interface ResponseWindowProps extends UIComponentProps {
    responseBody:HTMLElement;
    spinner?: LoadingSpinner;
}

export default class ResponseWindow extends UIComponent<ResponseWindowProps> {

    protected override _template(): UITemplate<ResponseWindowProps> {
        const chatGPTResponse = createElement('div');
        chatGPTResponse.className = 'ChatGPTResponse';

        const headerSection = createElement('section');
        headerSection.className = 'ChatGPTResponse__Header';

        const imageElement = createElement('img') as HTMLImageElement;
        
        imageElement.src = ExtensionApi.runtime.loadAsset('Assets/chat-logo.png');
        
        imageElement.alt = 'chat gpt logo';
        imageElement.className = 'ChatGPTResponse__Image';

        const textParagraph = createElement('p');
        textParagraph.textContent = 'ChatGPT';

        headerSection.appendChild(imageElement);
        headerSection.appendChild(textParagraph);

        const bodySection = createElement('section');
        bodySection.className = 'ChatGPTResponse__Body';

        const spinner = new LoadingSpinner();
        bodySection.appendChild(parseUIComponent(spinner));

        const footerSection = createElement('footer');
        footerSection.className = 'ChatGPTResponse__Footer';

        const poweredByParagraph = createElement('p');
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


    displayError(text:string):void {
        if (this._body.structure?.responseBody) {
            this._body.structure.spinner = undefined;
            const error = new ChatGPTError(text);
            const button = new RetryButton();
    
            HtmlHelper.removeAllChild(this._body.structure.responseBody!);
            this._body.structure?.responseBody.appendChild(parseUIComponent(error));
            this._body.structure?.responseBody.appendChild(parseUIComponent(button));
        }
    }
}