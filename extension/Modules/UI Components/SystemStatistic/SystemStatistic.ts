import BrowserAPI from "../../Browser API/BrowserAPI";
import { createElement } from "../../Utils/Utils";
import UIComponentProps from "../Interfaces/UIComponentProps";
import UIComponent from "../UIComponent";

interface Props extends UIComponentProps {
  header: HTMLElement;
  p: HTMLElement;
  img: HTMLElement;
}
export default class SystemStatistic extends UIComponent {
  constructor(
    private image: string,
    private headerText: string,
    private content: string
  ) {
    super();

    if (this.body.structure) {
      const { header, img, p } = this.body.structure!;
      (p as HTMLParagraphElement).textContent = content;
      (header as HTMLHeadingElement).textContent = headerText;

      const url = BrowserAPI.loadAsset(image);
      (img as HTMLImageElement).src = url;

      (p as HTMLParagraphElement).appendChild(img as HTMLImageElement);
    }
  }

  protected template(): UITemplate<Props> {
    const box = createElement("div");

    const h3 = createElement("h3");

    const p = createElement("p");
    p.classList.add("system-statistic");

    const img = createElement("img") as HTMLImageElement;
    img.draggable = false;

    p.appendChild(img);
    box.appendChild(h3);
    box.appendChild(p);

    return {
      element: box,
      structure: {
        header: h3,
        img: img,
        p: p,
      },
    };
  }

  public setText(text: string) {
    const { p, img } = this.body.structure!;

    (p as HTMLParagraphElement).textContent = text;
    (p as HTMLParagraphElement).appendChild(img as HTMLImageElement);
  }
}
