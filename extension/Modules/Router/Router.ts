import UIComponent from "../UI Components/UIComponent";
import { createElement, extend, removeChildren } from "../Utils/Utils";

export default class Router {
  constructor(
    private routes: Map<string, UIComponent>,
    private target: UIComponent | HTMLElement
  ) {}

  public register(route: string, component: UIComponent): void {
    this.routes.set(route, component);
  }

  public navigate(path: string): void {
    try {
      path = path.trim();
      removeChildren(this.target);

      const component = this.routes.get(path) as UIComponent;
      if (this.target instanceof UIComponent)
        this.target.appendChild(component);
      else extend(this.target, component);
    } catch (e) {
      removeChildren(this.target);
      const warningMessage = `Route: "${path}" does not exists! Use router.register(string, UIComponent) to add new route.`;
      const warning = createElement("p") as HTMLParagraphElement;

      warning.classList.add("warning");
      warning.textContent = warningMessage + "⚠️";
      this.target.appendChild(warning);

      console.warn(warningMessage);
    }
  }
}
