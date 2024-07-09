import UIComponentProps from "../../../UI Components/Interfaces/UIComponentProps";
import HtmlHelper, {
  createElement,
  parseUIComponent,
} from "../../../Helpers/HtmlHelper/HtmlHelper";
import UIComponent from "../../../UI Components/UIComponent";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import BrowserAPI from "../../../Browser API/BrowserAPI";
import AIErrorUI from "../AIError/AIErrorUI";
import RetryButton from "../RetryButton/RetryButton";
import "./ResponseWindow.scss";

interface ResponseWindowProps extends UIComponentProps {
  responseBody: HTMLElement;
  spinner?: LoadingSpinner;
}

export default class ResponseWindow extends UIComponent<ResponseWindowProps> {
  protected override template(): UITemplate<ResponseWindowProps> {
    const chatGPTResponse = createElement("div");
    chatGPTResponse.className = "ChatGPTResponse";

    const headerSection = createElement("section");
    headerSection.className = "ChatGPTResponse__Header";

    const imageElement = createElement("img") as HTMLImageElement;

    imageElement.src = BrowserAPI.loadAsset("Assets/Icons/ai.svg");

    imageElement.alt = "chat gpt logo";
    imageElement.className = "ChatGPTResponse__Image";

    const textParagraph = createElement("p");
    textParagraph.textContent = "AI Solver ✨";

    headerSection.appendChild(imageElement);
    headerSection.appendChild(textParagraph);

    const bodySection = createElement("section");
    bodySection.className = "ChatGPTResponse__Body";

    const spinner = new LoadingSpinner();
    bodySection.appendChild(parseUIComponent(spinner));

    const footerSection = createElement("footer");
    footerSection.className = "ChatGPTResponse__Footer";

    const poweredByParagraph = createElement("p");
    poweredByParagraph.textContent = "RuntimeDevStudios.com";

    footerSection.appendChild(poweredByParagraph);

    chatGPTResponse.appendChild(headerSection);
    chatGPTResponse.appendChild(bodySection);
    chatGPTResponse.appendChild(footerSection);

    return {
      element: chatGPTResponse,
      structure: {
        responseBody: bodySection,
        spinner: spinner,
      },
    };
  }

  public displayError(text: string): void {
    if (this.body.structure?.responseBody) {
      this.body.structure.spinner = undefined;
      const error = new AIErrorUI(text);
      const button = new RetryButton();

      HtmlHelper.removeAllChild(this.body.structure.responseBody!);
      this.body.structure?.responseBody.appendChild(parseUIComponent(error));
      this.body.structure?.responseBody.appendChild(parseUIComponent(button));
    }
  }
}
