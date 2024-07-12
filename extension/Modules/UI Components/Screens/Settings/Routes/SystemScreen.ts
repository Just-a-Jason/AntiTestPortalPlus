import BrowserAPI from "../../../../Browser API/BrowserAPI";
import { createElement, extend } from "../../../../Utils/Utils";
import UIComponentProps from "../../../Interfaces/UIComponentProps";
import SystemStatistic from "../../../SystemStatistic/SystemStatistic";
import UIComponent from "../../../UIComponent";

export default class SystemScreen extends UIComponent {
  protected template(): UITemplate<UIComponentProps> {
    const start = performance.now();
    const fetchData = async () => {
      const url = BrowserAPI.loadAsset("Assets/index.js");

      const response = await fetch(url, {
        method: "GET",
      });

      if (response.ok) {
        const size = Math.ceil((await response.text()).length / 1024) + " KB";
        bundle.setText(size);
      }

      cache.setText(await BrowserAPI.instance.calculateCacheSize());

      perf.setText((performance.now() - start).toFixed(3) + " ms");
    };

    const box = createElement("div");

    const cache = new SystemStatistic(
      "Assets/Icons/cache.svg",
      "Cached assets size",
      "Calculating cache size..."
    );

    const bundle = new SystemStatistic(
      "Assets/Icons/js.svg",
      "JS bundle size",
      "Loading bundle size..."
    );

    const version = new SystemStatistic(
      "Assets/Icons/version.svg",
      "App Version",
      "1.0.0"
    );

    const perf = new SystemStatistic(
      "Assets/Icons/timer.svg",
      "Render performance",
      "Calculaing performance..."
    );

    extend(box, bundle);
    extend(box, cache);
    extend(box, perf);

    extend(
      box,
      new SystemStatistic(
        "Assets/Icons/figa.png",
        "GUI engine",
        "Figa (custom engine)"
      )
    );

    extend(box, version);
    fetchData();

    return { element: box };
  }
}
