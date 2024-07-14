import { createElement } from "../../../../Utils/Utils";
import UIComponentProps from "../../../Interfaces/UIComponentProps";
import UIComponent from "../../../UIComponent";

export default class GeneralScreen extends UIComponent {
  protected template(): UITemplate<UIComponentProps> {
    const p = createElement("p");

    return { element: p };
  }
}
