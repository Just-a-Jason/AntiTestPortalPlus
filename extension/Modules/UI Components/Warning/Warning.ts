import { createElement } from "../../Utils/Utils";
import UIComponentProps from "../Interfaces/UIComponentProps";
import UIComponent from "../UIComponent";

export default class Warning extends UIComponent {
  public constructor(private text: string) {
    super();
    this.body.element.textContent = text + "⚠️";
  }

  protected template(): UITemplate<UIComponentProps> {
    const p = createElement("p") as HTMLParagraphElement;

    p.classList.add("warning");

    return { element: p };
  }
}
