import { createElement } from "../../Utils/Utils";
import UIComponentProps from "../Interfaces/UIComponentProps";
import AISolver from "../../AISolver/AISolver";
import PeterTV from "../../PeterTV/PeterTV";
import AntiBlur from "../../Blur/AntiBlur";
import UIComponent from "../UIComponent";
import "./Slider.scss";
import GoogleSearch from "../../QuestionSearch/QuestionSearch";

interface ISliderProps extends UIComponentProps {
  sliderSet: HTMLElement;
}

export default class Slider extends UIComponent<ISliderProps> {
  constructor(private key: SettingKey, private on: boolean = false) {
    super();
    this.ready();
  }

  override template(): UITemplate<ISliderProps> {
    const sliderContainer = createElement("div");
    sliderContainer.className = "slider";
    document.body.appendChild(sliderContainer);

    const sliderSet = createElement("div");
    sliderSet.className = "slider__set";
    sliderContainer.appendChild(sliderSet);
    return {
      element: sliderContainer,
      structure: {
        sliderSet: sliderSet,
      },
    };
  }

  protected override ready(): void {
    if (localStorage.getItem(this.key))
      this.on = JSON.parse(localStorage.getItem(this.key)!);

    this.setState(this.on);

    this.body.element.addEventListener("click", () => {
      this.setState(!this.on);
      this.setSettingState();

      if (this.key == "com.runtimedevstudios.anti-testportal+.peter-tv") {
        PeterTV.turn(this.on);
      }
    });
  }

  private setState(state: boolean): void {
    let isOn = state ? 120 : 0;

    if (state) this.body.element.classList.add("on");
    else this.body.element.classList.remove("on");

    this.body.structure!.sliderSet.style["transform"] = `translateX(${isOn}%)`;
    this.on = state;
  }

  private setSettingState(): void {
    localStorage.setItem(this.key, this.on ? "true" : "false");

    this.setState(JSON.parse(localStorage.getItem(this.key)!));

    switch (this.key) {
      case "com.runtimedevstudios.anti-testportal+.blur":
        AntiBlur.turn(this.on);
        break;
      case "com.runtimedevstudios.anti-testportal+.ai-solver":
        AISolver.turn(this.on);
        break;
      case "com.runtimedevstudios.anti-testportal+.google-search":
        GoogleSearch.turn(this.on);
    }
  }
}
