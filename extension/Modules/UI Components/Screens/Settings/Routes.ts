import UIComponent from "../../UIComponent";
import AIScreen from "./Routes/AIScreen";
import GeneralScreen from "./Routes/GeneralScreen";
import SystemScreen from "./Routes/SystemScreen";

export const routes: Map<string, UIComponent> = new Map([
  ["System ⚙️", new SystemScreen()],
  ["System ⚙️ > Settings 🛠️ > AI 🤖", new AIScreen()],
  ["System ⚙️ > Settings 🛠️ > General 📁", new GeneralScreen() as UIComponent],
]);
