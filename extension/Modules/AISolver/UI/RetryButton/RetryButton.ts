import BrowserAPI from "../../../Browser API/BrowserAPI";
import { createElement } from "../../../Utils/Utils";
import UIComponentProps from "../../../UI Components/Interfaces/UIComponentProps";
import UIComponent from "../../../UI Components/UIComponent";
import AISolver from "../../AISolver";
import "./RetryButton.scss";

export default class RetryButton extends UIComponent {
  public constructor() {
    super();
    this.ready();
  }

  protected override template(): UITemplate<UIComponentProps> {
    const button = createElement("div");
    const img = createElement("img") as HTMLImageElement;
    img.src = BrowserAPI.loadAsset("Assets/Icons/reload.svg");

    const p = createElement("p") as HTMLParagraphElement;
    p.textContent = "Retry";

    button.classList.add("ChatGPTResponse-RetryButton");
    button.appendChild(p);
    button.appendChild(img);
    return { element: button };
  }

  override ready(): void {
    this.body?.element?.addEventListener("click", () => {
      AISolver.turn(false);
      AISolver.turn(true);
    });
  }
}
