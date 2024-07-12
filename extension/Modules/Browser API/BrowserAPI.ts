type Browser =
  | "Chrome"
  | "Edge"
  | "Mozilla Firefox"
  | "Samsung Internet"
  | "Apple Safari"
  | "Opera"
  | "Unknown";

export default class BrowserAPI {
  public static instance: BrowserAPI = new BrowserAPI();
  private assetsCache: Map<string, string> = new Map();
  private browser: Browser = this.getBrowser();

  public static loadAsset(path: string): string {
    return this.instance.loadAssetUrl(path);
  }

  private loadAssetUrl(url: string): string {
    if (this.assetsCache.has(url)) return this.assetsCache.get(url) as string;
    try {
      let asset: string = "";

      switch (this.browser) {
        case "Chrome":
        case "Edge":
        case "Opera":
          asset = chrome.runtime.getURL(url);
          this.assetsCache.set(url, asset);
          break;
        case "Mozilla Firefox":
          asset = browser.runtime.getURL(url);
          this.assetsCache.set(url, asset);
          break;
        default:
          throw new Error(`${this.browser} your browser is not supported.`);
      }
      return asset as string;
    } catch (e) {
      console.warn(`Asset ${url} not found! ⚠️`);
      return "";
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

  public async calculateCacheSize(): Promise<string> {
    const fetchPromises = Array.from(this.assetsCache.values()).map(
      async (v) => {
        const response = await fetch(v);
        if (response.ok) {
          const text = await response.text();
          return text.length;
        }
        return 0;
      }
    );

    const sizes = await Promise.all(fetchPromises);
    const totalSize = sizes.reduce((acc, curr) => acc + curr, 0);

    return Math.ceil(totalSize / 1024) + ` KB (${this.countAssets()} assets)`;
  }

  private countAssets(): number {
    let c = 0;
    for (const _ of this.assetsCache) c++;
    return c;
  }
}
