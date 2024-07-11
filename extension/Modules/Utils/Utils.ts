import UIComponent from "../UI Components/UIComponent";

export const removeChildren = (el: HTMLElement | UIComponent) => {
  if (el instanceof UIComponent) el = parseUIComponent(el);
  el.childNodes.forEach((n) => n.remove());
};

export const createElement = (el: keyof HTMLElementTagNameMap) => {
  return document.createElement(el);
};

export const extend = (target: HTMLElement, component: UIComponent) =>
  target.appendChild(parseUIComponent(component));

export const find = (query: string, all: boolean = false) =>
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

export const isTestPage = (): boolean =>
  document.URL.includes("/exam/DoTestQuestion.html") ||
  document.URL.includes("/exam/DoStartTest.html") ||
  document.URL.includes("/exam/LoadQuestion.html");
