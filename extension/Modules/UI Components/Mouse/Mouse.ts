import UIComponentProps from "../Interfaces/UIComponentProps";
import UIComponent from "../UIComponent";

interface Vector2 {
  x: number;
  y: number;
}

export default class MouseUI extends UIComponent<UIComponentProps> {
  protected override template(): UITemplate<UIComponentProps> {
    const image = new Image();

    image.src =
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2Fbcy%2Fx5b%2Fbcyx5bqcL.jpeg&f=1&nofb=1&ipt=2328545ce9f2299388dbbe3e5508e7c440998db7aaab40aae493757d43536bb5&ipo=images";

    return {
      element: image,
    };
  }

  public setPosition(pos: Vector2): void {
    this.body.element.style.right = pos.x + "px";
    this.body.element.style.top = pos.y + "px";
  }

  public override ready(): void {
    console.log(this.text);

    this.body.element.style.position = "absolute";
  }

  constructor(private text: string) {
    super();
    this.ready();
  }
}
