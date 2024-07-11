import UIComponent from "../UIComponent";

export default interface UIComponentProps {
  [key: string]: HTMLElement | object | undefined | null | UIComponent;
}
