import { buildTarget } from "./ExtensionApi";

export interface IExtension {
    loadAsset(path:string): string;
    target:buildTarget;
}