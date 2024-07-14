import GeneralScreen from "./Routes/GeneralScreen";
import SystemScreen from "./Routes/SystemScreen";
import FigaScreen from "./Routes/FigaScreen";
import UIComponent from "../../UIComponent";
import AIScreen from "./Routes/AIScreen";

export const routes = new Map([
  ["System ⚙️", new SystemScreen()],
  ["System ⚙️ > Settings 🛠️ > AI 🤖", new AIScreen()],
  ["System ⚙️ > Settings 🛠️ > General 📁", new GeneralScreen() as UIComponent],
  ["System ⚙️ > GUI 🖼️ > Figa 🍇", new FigaScreen()],
]);
