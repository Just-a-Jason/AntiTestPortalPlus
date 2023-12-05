export default abstract class AssetsLoader {
    static LoadAsset(path:string) : string {
        return chrome.runtime.getURL('Assets/'+path);
    }
}