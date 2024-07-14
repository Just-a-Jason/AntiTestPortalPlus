import { createElement, exists, load, save } from "../../../../Utils/Utils";
import UIComponentProps from "../../../Interfaces/UIComponentProps";
import UIComponent from "../../../UIComponent";
import Warning from "../../../Warning/Warning";
import GptSettings from "../GptSettings";
import { AIProvider } from "./AIProviders";

interface Props extends UIComponentProps {
  select: HTMLSelectElement;
}

export default class AIScreen extends UIComponent {
  public constructor(private currentScreen: Nullable<UIComponent> = null) {
    super();

    const { select } = this.body.structure!;

    if (!exists("com.runtimedevstudios.anti-testportal+.settings.ai.provider"))
      save(
        "com.runtimedevstudios.anti-testportal+.settings.ai.provider",
        AIProvider.ChromeAPI
      );

    (select as HTMLSelectElement).value = load(
      "com.runtimedevstudios.anti-testportal+.settings.ai.provider"
    );

    this.showGPTSettings((select as HTMLSelectElement).value as AIProvider);
  }

  protected template(): UITemplate<Props> {
    const box = createElement("div");

    const h3 = createElement("h3");
    h3.textContent = "AI Provider";

    const select = createElement("select") as HTMLSelectElement;
    const options = [AIProvider.ChatGPT, AIProvider.ChromeAPI];

    options.forEach((o) => {
      const option = createElement("option") as HTMLOptionElement;
      option.innerText = o;
      option.value = o;

      select.appendChild(option);
    });

    select.addEventListener("change", (e) => {
      const provider = (e.currentTarget as HTMLInputElement)
        .value as AIProvider;

      this.showGPTSettings(provider);

      save(
        "com.runtimedevstudios.anti-testportal+.settings.ai.provider",
        provider
      );
    });

    box.appendChild(h3);
    box.appendChild(select);

    return {
      element: box,
      structure: { select: select },
    };
  }

  private showGPTSettings(provider: AIProvider): void {
    this.currentScreen?.remove();
    this.currentScreen = null;

    switch (provider) {
      case AIProvider.ChatGPT:
        this.currentScreen = new GptSettings();
        this.appendChild(this.currentScreen);
        break;

      case AIProvider.ChromeAPI:
        if (!window.ai) {
          this.currentScreen = new Warning(
            "Your browser doesn't support window.ai API."
          );
          this.appendChild(this.currentScreen);
        }

        break;
    }
  }
}
