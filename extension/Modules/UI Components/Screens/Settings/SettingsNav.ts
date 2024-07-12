import { createElement, extend } from "../../../Utils/Utils";
import UIComponentProps from "../../Interfaces/UIComponentProps";
import UIComponent from "../../UIComponent";
import SettingsNavButton from "./SettingsNavButton";
import "./SettingsNav.scss";

export default class SettingsNav extends UIComponent {
  private path: Nullable<HTMLParagraphElement> = null;

  protected override template(): UITemplate<UIComponentProps> {
    const tabs = ["AI 🤖", "General 📁"];
    const nav = createElement("nav");
    nav.classList.add("settings-nav");

    const ul = createElement("ul");
    const path = createElement("p") as HTMLParagraphElement;

    path.textContent = "System > Settings 🛠️";
    path.classList.add("nav-path");

    tabs.forEach((tab) => {
      extend(ul, new SettingsNavButton(tab));
    });

    nav.appendChild(ul);
    nav.appendChild(path);
    this.path = path;

    return {
      element: nav,
    };
  }

  public updatePath(path: string): void {
    if (this.path) {
      this.path.textContent = path;
    }
  }
}
