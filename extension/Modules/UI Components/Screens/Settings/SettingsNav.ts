import { createElement, extend } from "../../../Utils/Utils";
import UIComponentProps from "../../Interfaces/UIComponentProps";
import SettingsNavButton from "./SettingsNavButton";
import UIComponent from "../../UIComponent";
import { routes } from "./Routes";
import "./SettingsNav.scss";

export default class SettingsNav extends UIComponent {
  protected override template(): UITemplate<UIComponentProps> {
    const nav = createElement("nav");
    nav.classList.add("settings-nav");

    const ul = createElement("ul");
    const path = createElement("p") as HTMLParagraphElement;

    path.textContent = "System ⚙️ > Settings 🛠️";
    path.classList.add("nav-path");

    routes.forEach((_, name) => {
      extend(ul, new SettingsNavButton(name));
    });

    nav.appendChild(ul);
    nav.appendChild(path);

    return {
      element: nav,
    };
  }
}
