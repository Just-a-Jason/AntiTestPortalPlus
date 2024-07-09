import UIComponentProps from "./Interfaces/UIComponentProps";

export default abstract class UIComponent<
  Props extends UIComponentProps = UIComponentProps
> {
  protected body: UITemplate<Props>;

  public constructor() {
    this.body = this.initTemplate();
  }

  public appendChild(child: HTMLElement | UIComponent): void {
    if (child instanceof UIComponent)
      this.body.element.appendChild(child.body.element);
    else this.body.element.appendChild(child);
  }

  public getBody(): UITemplate<Props> {
    return this.body;
  }

  public remove(): void {
    this.body.element.remove();
    this.done();
  }

  private initTemplate(): UITemplate<Props> {
    return this.template();
  }

  protected done(): void {}

  protected abstract template(): UITemplate<Props>;
  protected ready(): void {}
}
