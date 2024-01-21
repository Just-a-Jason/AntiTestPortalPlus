import { buildTarget } from "../ExtensionApi";
import ExtensionBase from "../ExtensionBase";

export class ChromeExtension extends ExtensionBase {
    constructor(target:buildTarget) {
        super(target);
    }
    
    loadAsset(path:string): string {
        return chrome.runtime.getURL(path);
    }
}
