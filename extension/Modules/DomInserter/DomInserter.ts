import { parseUIComponent } from "../Utils/Utils";
import UIComponent from "../UI Components/UIComponent";

export default abstract class DomInserter {
  static insert(
    element: HTMLElement | UIComponent,
    _parent: null | HTMLElement | UIComponent = null
  ): void {
    element =
      element instanceof UIComponent ? parseUIComponent(element) : element;

    if (_parent === null) document.body.append(element);
    else if (_parent instanceof UIComponent) _parent.appendChild(element);
    else _parent.append(element);
  }
}
