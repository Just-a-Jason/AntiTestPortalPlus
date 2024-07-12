import { createElement, find } from "../../../Utils/Utils";
import UIComponentProps from "../../Interfaces/UIComponentProps";
import UIComponent from "../../UIComponent";
import SettingsScreen from "./SettingsScreen";

interface Props extends UIComponentProps {
  text: HTMLElement;
}

export default class SettingsNavButton extends UIComponent {
  public constructor(private text: string) {
    super();
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

      if (item) (item as HTMLElement).classList.remove("active");
      (e.currentTarget! as HTMLElement).classList.add("active");
      console.log(SettingsScreen.instance);

      SettingsScreen.instance?.updatePath(
        `System > Settings 🛠️ > ${this.text}`
      );
    });

    return {
      element: li,
      structure: {
        text: p,
      },
    };
  }
}
