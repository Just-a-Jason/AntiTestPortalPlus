import { createElement } from "../../../Utils/Utils";
import UIComponentProps from "../../Interfaces/UIComponentProps";
import UIComponent from "../../UIComponent";

export default class SettingsContentScreen extends UIComponent {
  protected override template(): UITemplate<UIComponentProps> {
    const screen = createElement("div");

    screen.classList.add("settings-content-screen");

    return {
      element: screen,
    };
  }
}
