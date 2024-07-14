import UIComponent from "../UI Components/UIComponent";
import Warning from "../UI Components/Warning/Warning";
import { createElement, extend, removeChildren } from "../Utils/Utils";

export default class Router {
  constructor(
    private routes: Map<string, UIComponent> = new Map(),
    private target: UIComponent | HTMLElement,
    private currentRoute = "/"
  ) {}

  public register(route: string, component: UIComponent): void {
    this.routes.set(route, component);
  }

  public navigate(path: string): void {
    try {
      path = path.trim();

      if (path === this.currentRoute) return;

      removeChildren(this.target);

      const component = this.routes.get(path) as UIComponent;
      if (this.target instanceof UIComponent)
        this.target.appendChild(component);
      else extend(this.target, component);

      this.currentRoute = path;
    } catch (e) {
      removeChildren(this.target);
      const warningMessage = `Route: "${path}" does not exists! Use router.register(string, UIComponent) to add new route.`;

      extend(this.target, new Warning(warningMessage));
      this.currentRoute = path;
      console.warn(warningMessage);
    }
  }
}
