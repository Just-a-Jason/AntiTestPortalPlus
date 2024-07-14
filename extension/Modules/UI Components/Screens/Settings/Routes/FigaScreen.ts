import BrowserAPI from "../../../../Browser API/BrowserAPI";
import { createElement } from "../../../../Utils/Utils";
import UIComponentProps from "../../../Interfaces/UIComponentProps";
import UIComponent from "../../../UIComponent";

export default class FigaScreen extends UIComponent {
  protected template(): UITemplate<UIComponentProps> {
    const box = createElement("div");
    const h3 = createElement("h3");
    const p = createElement("p");
    const img = createElement("img") as HTMLImageElement;

    const url = BrowserAPI.loadAsset("Assets/Icons/figa-large.png");
    img.src = url;

    h3.textContent = "What's Figa? 🍇";
    p.textContent =
      "Figa is a lightweight GUI framework for Browser extensions and websites. Build by @Jason.json";

    box.appendChild(h3);
    box.appendChild(p);
    box.appendChild(img);

    return { element: box };
  }
}
