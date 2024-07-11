import { createElement, load, parseUIComponent, save } from "../../Utils/Utils";
import UIComponentProps from "../Interfaces/UIComponentProps";
import BrowserAPI from "../../Browser API/BrowserAPI";
import MenuItem from "../MenuItem/MenuItem";
import UIComponent from "../UIComponent";
import Slider from "../Slider/Slider";
import "./SettingsBox.scss";
import DomInserter from "../../DomInserter/DomInserter";
import AntiBlur from "../../Blur/AntiBlur";
import AISolver from "../../AISolver/AISolver";
import PeterTV from "../../PeterTV/PeterTV";
import GoogleSearch from "../../QuestionSearch/QuestionSearch";

interface MenuItemData {
  defaultValue: any;
  name: string;
}

interface SliderProps extends UIComponentProps {
  menu: HTMLElement;
}

export default class SettingsBox extends UIComponent<SliderProps> {
  private visible: boolean = false;

  protected override template(): UITemplate<SliderProps> {
    const box = createElement("div");
    box.classList.add("settings-box");
    DomInserter.insert(box);

    const menu = createElement("div");
    menu.id = "widget-menu";
    box.appendChild(menu);

    const button = createElement("div");
    button.id = "widget-button";

    const logo = createElement("img") as HTMLImageElement;

    logo.src = BrowserAPI.loadAsset("Assets/Icons/logo.png");
    logo.draggable = false;
    logo.classList.add("SettingsBox__image");

    button.appendChild(logo);
    box.appendChild(button);

    button.addEventListener("click", () => {
      menu.classList.toggle("visible");
      this.visible = menu.classList.contains("visible");
      save("com.runtimedevstudios.anti-testportal+.window-open", this.visible);
    });

    if (this.get("com.runtimedevstudios.anti-testportal+.window-open")) {
      menu.classList.add("visible");
      this.visible = true;
    }

    return {
      element: box,
      structure: {
        menu: menu,
      },
    };
  }

  private loadSliders(): void {
    const menu = this.body.structure?.menu;

    const items = new Map<SettingKey, MenuItemData>([
      [
        "com.runtimedevstudios.anti-testportal+.blur",
        { name: "Anti Blur 🫧", defaultValue: true },
      ],
      [
        "com.runtimedevstudios.anti-testportal+.ai-solver",
        { name: "AI Solver 🤖", defaultValue: true },
      ],
      [
        "com.runtimedevstudios.anti-testportal+.peter-tv",
        { name: "PeterTV 📺", defaultValue: false },
      ],
      [
        "com.runtimedevstudios.anti-testportal+.google-search",
        {
          name: "Google Search 🔍",
          defaultValue: true,
        },
      ],
    ]);

    items.forEach((v, k) => {
      if (!localStorage.getItem(k)) save(k, v.defaultValue);
      const item = new MenuItem(v.name);
      const slider = new Slider(k);

      item.appendChild(slider);
      menu!.appendChild(parseUIComponent(item));
    });
  }

  public get(key: SettingKey): boolean {
    if (!localStorage.getItem(key)) return false;
    else return load(key);
  }

  public loadSettings() {
    GoogleSearch.turn(
      this.get("com.runtimedevstudios.anti-testportal+.google-search")
    );

    AntiBlur.turn(this.get("com.runtimedevstudios.anti-testportal+.blur"));
    AISolver.turn(this.get("com.runtimedevstudios.anti-testportal+.ai-solver"));
    PeterTV.turn(this.get("com.runtimedevstudios.anti-testportal+.peter-tv"));

    this.loadSliders();
  }
}
