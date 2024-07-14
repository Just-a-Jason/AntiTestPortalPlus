import UIComponent from "../UI Components/UIComponent";

export const removeChildren = (el: HTMLElement | UIComponent) => {
  if (el instanceof UIComponent) el = parseUIComponent(el);
  el.childNodes.forEach((n) => n.remove());
};

export const createElement = (el: keyof HTMLElementTagNameMap) => {
  return document.createElement(el);
};

export const extend = (
  target: HTMLElement | UIComponent,
  component: UIComponent
) => {
  target.appendChild(parseUIComponent(component));
};

export const find = (query: string, all: boolean = false) =>
  all ? document.querySelectorAll(query) : document.querySelector(query);

export const parseUIComponent = (component: UIComponent): HTMLElement => {
  return component.getBody().element;
};

export const load = (key: SettingKey): any => {
  const v = localStorage.getItem(key);
  if (!v) return false;

  try {
    return JSON.parse(v);
  } catch {
    return v;
  }
};

export const save = (key: SettingKey, value: any) =>
  localStorage.setItem(key, value.toString());

export const isTestPage = (): boolean => document.URL.includes("/exam/");
export const exists = (key: SettingKey) => localStorage.getItem(key) !== null;

export const randomKey = (length: number): string => {
  const chars =
    "0123456789!@$%^&*()abcdefghijklmnoprstuwxyzABCDEFGHIJKLMNOPRSTUWXYZ";
  let output = "";
  for (let i = 0; i < length; i++)
    output += chars[Math.floor(Math.random() * chars.length)];

  return output;
};
// export const wrap = (elements: (HTMLElement | UIComponent)[]) => {
//   const fragment = document.createDocumentFragment();

//   elements.forEach((e) => {
//     if (e instanceof UIComponent) {
//       const body = e.getBody().element;
//       if ((body as Node).nodeType === Node.DOCUMENT_FRAGMENT_NODE) return;
//       fragment.appendChild(body);
//       return;
//     }
//     fragment.appendChild(e);
//   });

//   return fragment;
// };
