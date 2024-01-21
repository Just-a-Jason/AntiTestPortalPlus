import { buildTarget } from "../ExtensionApi";
import ExtensionBase from "../ExtensionBase";

export class FireFoxExtension extends ExtensionBase {
    constructor(target:buildTarget) {
        super(target);
    }
    
    loadAsset(path:string): string {
        return browser.runtime.getURL(path);
    }
}
