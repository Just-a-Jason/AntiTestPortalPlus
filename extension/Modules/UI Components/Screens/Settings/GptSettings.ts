import { AES, enc } from "crypto-js";
import {
  createElement,
  exists,
  extend,
  load,
  randomKey,
  save,
} from "../../../Utils/Utils";
import UIComponentProps from "../../Interfaces/UIComponentProps";
import SystemStatistic from "../../SystemStatistic/SystemStatistic";
import UIComponent from "../../UIComponent";
import Button from "./Button";

export default class GptSettings extends UIComponent {
  protected template(): UITemplate<UIComponentProps> {
    const box = createElement("div");

    if (
      !exists("com.runtimedevstudios.anti-testportal+.settings.ai.secret-key")
    ) {
      save(
        "com.runtimedevstudios.anti-testportal+.settings.ai.secret-key",
        randomKey(20)
      );
    }
    const key = load(
      "com.runtimedevstudios.anti-testportal+.settings.ai.secret-key"
    );

    const secretKey = new SystemStatistic(
      "Assets/Icons/secret.svg",
      "Secret KEY",
      key,
      true
    );

    const apiKey = new SystemStatistic(
      "Assets/Icons/key.svg",
      "API KEY",
      exists("com.runtimedevstudios.anti-testportal+.settings.ai.api-key")
        ? AES.decrypt(
            load("com.runtimedevstudios.anti-testportal+.settings.ai.api-key"),
            key
          ).toString(enc.Utf8)
        : "Empty",
      true
    );

    const saveSettings = (): void => {
      save(
        "com.runtimedevstudios.anti-testportal+.settings.ai.api-key",
        AES.encrypt(apiKey.content, secretKey.content)
      );
      save(
        "com.runtimedevstudios.anti-testportal+.settings.ai.secret-key",
        secretKey.content
      );
    };

    const resetKey = (): void => {
      secretKey.setText(randomKey(20));
      saveSettings();
    };

    const saveButton = new Button("Save settings 🗃️", saveSettings);
    const resetButton = new Button("Reset Secret Key 💾", resetKey);

    extend(box, apiKey);
    extend(box, secretKey);
    extend(box, saveButton);
    extend(box, resetButton);

    return { element: box };
  }
}
