import { createElement } from "../../../Utils/Utils";
import UIComponentProps from "../../Interfaces/UIComponentProps";
import UIComponent from "../../UIComponent";

export default class Button extends UIComponent {
  protected template(): UITemplate<UIComponentProps> {
    const button = createElement("button");

    button.classList.add("settings-button");
    return { element: button };
  }
  public constructor(text: string, private onClick?: (e?: Event) => void) {
    super();

    this.body.element.textContent = text;
    if (onClick) this.body.element.addEventListener("click", onClick);
  }
}
