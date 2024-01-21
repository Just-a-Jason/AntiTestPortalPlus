import { ChromeExtension } from "./Targets/ChromeExtension";
import { FireFoxExtension } from "./Targets/FireFoxExtension";
import { IExtension } from "./IExtension";

export type buildTarget = 'Chrome' | 'FireFox';

export default abstract class Extension {
    public static runtime:IExtension = new ChromeExtension("Chrome"); 
    
    public static Build(target:buildTarget) {
        switch(target) {
            case 'Chrome': Extension.runtime = new ChromeExtension(target); break;
            case 'FireFox': Extension.runtime = new FireFoxExtension(target); break;
        }
    }
}