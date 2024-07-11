import DomInserter from "../DomInserter/DomInserter";
import { find } from "../Utils/Utils";
import VideoWindow from "./UI/VideoWindow";

export default abstract class PeterTV {
  private static window: VideoWindow | null = null;

  static turn(state: boolean): void {
    if (state) {
      if (
        document.URL.includes("/exam/DoTestQuestion.html") ||
        document.URL.includes("/exam/DoStartTest.html") ||
        document.URL.includes("/exam/LoadQuestion.html")
      ) {
        const parent = find(".question-area") as HTMLElement;
        const window = new VideoWindow();

        this.window = window;
        DomInserter.insert(window, parent);
      }
    } else this.window?.remove();
  }
}
