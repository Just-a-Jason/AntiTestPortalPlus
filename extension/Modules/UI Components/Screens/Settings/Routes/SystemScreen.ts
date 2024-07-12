import BrowserAPI from "../../../../Browser API/BrowserAPI";
import { createElement } from "../../../../Utils/Utils";
import UIComponentProps from "../../../Interfaces/UIComponentProps";
import UIComponent from "../../../UIComponent";

export default class SystemScreen extends UIComponent {
  protected template(): UITemplate<UIComponentProps> {
    const size = async () => {
      const url = BrowserAPI.loadAsset("Assets/index.js");

      const response = await fetch(url, {
        method: "GET",
      });

      if (response.ok) {
        const size = Math.ceil((await response.text()).length / 1024);

        p.textContent = `${size} KB`;
        p.appendChild(img);
      }
    };

    const box = createElement("div");
    const h3 = createElement("h3");
    h3.textContent = "JS bundle size";

    const h32 = createElement("h3");
    h32.textContent = "Cached resources size";

    const p = createElement("p");
    p.classList.add("system-statistic");

    const img = createElement("img") as HTMLImageElement;
    img.src = BrowserAPI.loadAsset("Assets/Icons/js.svg");
    img.draggable = false;

    const p2 = createElement("p");
    p2.classList.add("system-statistic");

    const img2 = createElement("img") as HTMLImageElement;

    img2.src = BrowserAPI.loadAsset("Assets/Icons/cache.svg");
    img2.draggable = false;

    const cacheSize = async () => {
      let totalBits = 0;
      p2.textContent = totalBits + " KB";
      p2.appendChild(img2);
    };

    box.appendChild(h3);
    box.appendChild(p);
    box.appendChild(h32);
    box.appendChild(p2);

    size();
    cacheSize();

    BrowserAPI.instance.getCacheSize();

    return { element: box };
  }
}
