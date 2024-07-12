import { createElement, extend, find } from "../../../Utils/Utils";
import UIComponentProps from "../../Interfaces/UIComponentProps";
import UIComponent from "../../UIComponent";
import "./SettingsScreen.scss";
import Box from "./Box";

export default class SettingsScreen extends UIComponent {
  public static instance: SettingsScreen | null = null;

  constructor() {
    super();
    SettingsScreen.instance = this;
  }

  protected override template(): UITemplate<UIComponentProps> {
    const screen = createElement("div");

    const box = new Box();
    extend(screen, box);
    console.log("box", box);

    screen.classList.add("settings-screen");
    setTimeout(() => screen.classList.add("visible"), 100);

    return {
      element: screen,
    };
  }

  public override remove(): void {
    super.remove();
    SettingsScreen.instance = null;
  }

  public updatePath(path: string): void {
    (find(".nav-path") as HTMLParagraphElement).textContent = path;
  }
}
