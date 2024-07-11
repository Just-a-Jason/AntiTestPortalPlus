import UIComponentProps from "../../../UI Components/Interfaces/UIComponentProps";
import { createElement } from "../../../Utils/Utils";
import UIComponent from "../../../UI Components/UIComponent";
import "./AIErrorUI.scss";

export default class AIErrorUI extends UIComponent {
  protected override template(): UITemplate<UIComponentProps> {
    const p = createElement("p");
    p.classList.add("ChatGPTResponse-ErrorPopUP");
    return { element: p };
  }

  constructor(private readonly errorText: string) {
    super();
    this.ready();
  }

  protected override ready(): void {
    this.body.element.innerText = this.errorText;
  }
}
