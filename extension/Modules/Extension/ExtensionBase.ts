import { buildTarget } from "./ExtensionApi";
import { IExtension } from "./IExtension";

export default abstract class ExtensionBase implements IExtension {
    constructor(public target:buildTarget) {}
    abstract loadAsset(path: string): string;
}