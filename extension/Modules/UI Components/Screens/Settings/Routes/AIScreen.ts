import { createElement } from "../../../../Utils/Utils";
import UIComponentProps from "../../../Interfaces/UIComponentProps";
import UIComponent from "../../../UIComponent";
import { AIProviders } from "./AIProviders";

export default class AIScreen extends UIComponent {
  protected template(): UITemplate<UIComponentProps> {
    const box = createElement("div");

    const p = createElement("p");
    p.textContent = "AI Provider";

    const select = createElement("select") as HTMLSelectElement;
    const options = [AIProviders.ChatGPT, AIProviders.ChromeAIAPI];

    options.forEach((o) => {
      const option = createElement("option") as HTMLOptionElement;
      option.innerText = o;
      option.value = o;

      select.appendChild(option);
    });

    box.appendChild(p);
    box.appendChild(select);

    return { element: box };
  }
}
