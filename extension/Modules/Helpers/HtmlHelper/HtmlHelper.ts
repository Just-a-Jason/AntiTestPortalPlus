import UIComponent from "../../UI Components/UIComponent";

export default class HtmlHelper {
  public static removeAllChild(el: HTMLElement): void {
    el.childNodes?.forEach((node) => node.remove());
  }
}

export const createElement = (el: keyof HTMLElementTagNameMap) => {
  return document.createElement(el);
};

export const find = (query: string, all: boolean) =>
  all ? document.querySelectorAll(query) : document.querySelector(query);

export const parseUIComponent = (component: UIComponent): HTMLElement => {
  return component.getBody().element;
};

export const load = (key: SettingKey): any => {
  const v = localStorage.getItem(key);
  if (!v) return false;
  return JSON.parse(v);
};

export const save = (key: SettingKey, value: any) =>
  localStorage.setItem(key, value.toString());
