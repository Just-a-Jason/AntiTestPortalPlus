import BrowserAPI from "../../Browser API/BrowserAPI";
import { createElement } from "../../Utils/Utils";
import UIComponentProps from "../Interfaces/UIComponentProps";
import UIComponent from "../UIComponent";

export default class SystemStatistic extends UIComponent {
  constructor(
    private image: string,
    private content: string,
    private header: string
  ) {
    super();
  }

  protected template(): UITemplate<UIComponentProps> {
    const box = createElement("div");

    const h3 = createElement("h3");
    h3.textContent = "Cached resources size";

    const p = createElement("p");
    p.classList.add("system-statistic");

    const img = createElement("img") as HTMLImageElement;
    img.src = BrowserAPI.loadAsset("Assets/Icons/js.svg");
    img.draggable = false;

    box.appendChild(h3);
    box.appendChild(p);

    return { element: box };
  }
}
