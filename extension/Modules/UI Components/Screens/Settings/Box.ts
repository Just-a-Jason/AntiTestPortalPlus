import BrowserAPI from "../../../Browser API/BrowserAPI";
import { createElement, extend, save } from "../../../Utils/Utils";
import UIComponentProps from "../../Interfaces/UIComponentProps";
import SettingsContentScreen from "./SettingsContentScreen";
import SettingsScreen from "./SettingsScreen";
import UIComponent from "../../UIComponent";
import SettingsNav from "./SettingsNav";

export default class Box extends UIComponent {
  public showScreen(screen: SettingsContentScreen): void {
    this.appendChild(screen);
  }

  protected template(): UITemplate<UIComponentProps> {
    const box = createElement("div");
    box.classList.add("settings-screen-content");

    const onClick = () => {
      SettingsScreen.instance?.getBody().element.classList.remove("visible");
      save("com.runtimedevstudios.anti-testportal+.settings.open", false);

      setTimeout(() => SettingsScreen.instance?.remove(), 600);
    };

    const h1 = createElement("h1");
    h1.textContent = "Settings 🛠️";

    const img = createElement("img") as HTMLImageElement;
    img.src = BrowserAPI.loadAsset("Assets/Icons/close.svg");
    img.draggable = false;
    img.title = "Close tab. ❌";

    h1.appendChild(img);
    box.appendChild(h1);

    const nav = new SettingsNav();
    extend(box, nav);

    const content = new SettingsContentScreen();
    extend(box, content);

    img.addEventListener("click", onClick);

    return {
      element: box,
    };
  }
}
