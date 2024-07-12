import { createElement, find, save } from "../../../Utils/Utils";
import UIComponentProps from "../../Interfaces/UIComponentProps";
import UIComponent from "../../UIComponent";
import SettingsScreen from "./SettingsScreen";

interface Props extends UIComponentProps {
  text: HTMLElement;
}

export default class SettingsNavButton extends UIComponent {
  public constructor(private path: string) {
    super();

    const routes = path.trim().split(">");
    const text = routes[routes.length - 1].trim();
    (this.body.structure!.text! as HTMLParagraphElement).textContent = text;

    this.body.element.title = `${text} settings.`;
  }

  protected override template(): UITemplate<Props> {
    const li = createElement("li");
    li.classList.add("settings-item");

    const p = createElement("p");
    li.appendChild(p);

    li.addEventListener("click", (e) => {
      const item = find(".settings-item.active");
      save("com.runtimedevstudios.anti-testportal+.settings.route", this.path);

      if (item) (item as HTMLElement).classList.remove("active");
      (e.currentTarget! as HTMLElement).classList.add("active");

      SettingsScreen.instance?.updatePath(`${this.path}`);
    });

    return {
      element: li,
      structure: {
        text: p,
      },
    };
  }
}
