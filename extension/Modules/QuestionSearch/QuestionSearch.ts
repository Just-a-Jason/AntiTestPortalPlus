import QuestionReader from "../QuestionReader/QuestionReader";
import { find, isTestPage } from "../Utils/Utils";

export default abstract class GoogleSearch {
  private static onClick(): void {
    const text = QuestionReader.readQuestionText();
    const url = encodeURI(`https://google.com/search?q=${text}`);
    window.open(url, "_blank");
  }
  public static turn(state: boolean): void {
    if (!isTestPage()) return;

    const question = find(".question_essence p") as HTMLElement;

    if (state) {
      question.style["fontWeight"] = "bold";
      question.style["cursor"] = "pointer";
      question.style["fontSize"] = "20px";
      question.style["color"] = "#007fff";

      question.addEventListener("click", this.onClick);
      return;
    }

    question.style["fontWeight"] = "400";
    question.style["fontSize"] = "1rem";
    question.style["cursor"] = "text";
    question.style["color"] = "#000";

    question.removeEventListener("click", this.onClick);
  }
}
