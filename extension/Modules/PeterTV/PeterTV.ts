import DomInserter from "../DomInserter/DomInserter";
import VideoWindow from "./UI/VideoWindow";

export default abstract class PeterTV {
  private static _peterTVWindow: VideoWindow | null = null;

  static turn(state: boolean): void {
    if (state) {
      if (
        document.URL.includes("/exam/DoTestQuestion.html") ||
        document.URL.includes("/exam/DoStartTest.html") ||
        document.URL.includes("/exam/LoadQuestion.html")
      ) {
        const parent = document.querySelector(".question-area") as HTMLElement;
        const window = new VideoWindow();

        this._peterTVWindow = window;
        DomInserter.insert(window, parent);
      }
    } else this._peterTVWindow?.remove();
  }
}
