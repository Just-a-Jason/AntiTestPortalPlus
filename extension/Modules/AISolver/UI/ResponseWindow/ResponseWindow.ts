import UIComponentProps from "../../../UI Components/Interfaces/UIComponentProps";
import { createElement, extend, removeChildren } from "../../../Utils/Utils";
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
    const window = createElement("div");
    window.className = "response-window";

    const header = createElement("header");
    header.className = "response-window-header";

    const img = createElement("img") as HTMLImageElement;

    img.src = BrowserAPI.loadAsset("Assets/Icons/ai.svg");
    img.alt = "ai provider api logo";
    img.draggable = false;

    const p = createElement("p");
    p.textContent = "AI Solver ✨";

    header.appendChild(img);
    header.appendChild(p);

    const body = createElement("section");
    body.className = "response-window-body";

    const spinner = new LoadingSpinner();
    extend(body, spinner);

    const footer = createElement("footer");
    footer.className = "response-window-footer";

    const p2 = createElement("p");
    p2.textContent = "RuntimeDevStudios.com";

    footer.appendChild(p2);

    window.appendChild(header);
    window.appendChild(body);
    window.appendChild(footer);

    return {
      element: window,
      structure: {
        responseBody: body,
        spinner: spinner,
      },
    };
  }

  public displayError(text: string): void {
    if (this.body.structure?.responseBody) {
      this.body.structure.spinner = undefined;

      removeChildren(this.body.structure.responseBody!);

      if (this.body.structure) {
        extend(this.body.structure.responseBody, new AIErrorUI(text));
        extend(this.body.structure.responseBody, new RetryButton());
      }
    }
  }
}
