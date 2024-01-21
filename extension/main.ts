import AntiTestportalPlus from "./Modules/AntiTestportal+/AntiTesportal+";

const main = ():void => {
    new AntiTestportalPlus("Chrome");
}

window.addEventListener('load', main);