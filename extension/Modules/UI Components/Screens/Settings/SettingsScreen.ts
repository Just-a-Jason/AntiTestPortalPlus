import {
  createElement,
  extend,
  find,
  removeChildren,
} from "../../../Utils/Utils";
import UIComponentProps from "../../Interfaces/UIComponentProps";
import UIComponent from "../../UIComponent";
import "./SettingsScreen.scss";
import Box from "./Box";
import Router from "../../../Router/Router";
import { routes } from "./Routes";

export default class SettingsScreen extends UIComponent {
  public static instance: SettingsScreen | null = null;

  public router: Nullable<Router> = null;

  constructor() {
    super();
    SettingsScreen.instance = this;
  }

  protected override template(): UITemplate<UIComponentProps> {
    const screen = createElement("div");

    const box = new Box();
    extend(screen, box);

    screen.classList.add("settings-screen");
    setTimeout(() => screen.classList.add("visible"), 100);

    return {
      element: screen,
    };
  }

  public override remove(): void {
    super.remove();
  }

  public updatePath(path: string): void {
    if (!this.router) {
      this.router = new Router(
        routes,
        find(".settings-content-screen") as HTMLDivElement
      );
    }

    const routePath = find(".nav-path") as HTMLParagraphElement;

    removeChildren(routePath);
    routePath.textContent = path;

    this.router.navigate(path);
  }
}
