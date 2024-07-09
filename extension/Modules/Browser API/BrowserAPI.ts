type Browser =
  | "Chrome"
  | "Edge"
  | "Mozilla Firefox"
  | "Samsung Internet"
  | "Apple Safari"
  | "Opera"
  | "Unknown";

export default class BrowserAPI {
  private static instance: BrowserAPI = new BrowserAPI();
  private browser: Browser = this.getBrowser();

  public static loadAsset(path: string): string {
    return this.instance.loadAssetUrl(path);
  }

  private loadAssetUrl(url: string): string {
    switch (this.browser) {
      case "Chrome":
      case "Edge":
      case "Opera":
        return chrome.runtime.getURL(url);
      case "Mozilla Firefox":
        browser.runtime.getURL(url);
      default:
        throw new Error(`${this.browser} your browser is not supported.`);
    }
  }

  private getBrowser(): Browser {
    const userAgent = window.navigator.userAgent;

    if (userAgent.includes("Firefox")) return "Mozilla Firefox";
    else if (userAgent.includes("SamsungBrowser")) return "Samsung Internet";
    else if (userAgent.includes("Opera") || userAgent.includes("OPR"))
      return "Opera";
    else if (userAgent.includes("Edge") || userAgent.includes("Edg"))
      return "Edge";
    else if (userAgent.includes("Chrome")) return "Chrome";
    else if (userAgent.includes("Safari")) return "Apple Safari";

    return "Unknown";
  }
}
