import { find } from "../Utils/Utils";
import { QuestionType } from "./QuestionType";

export default abstract class QuestionReader {
  public static readQuestionText(): string {
    const q = find(".question_essence") as HTMLElement;
    return q ? q.textContent! : "";
  }

  public static readAnswers(): string {
    const answers = find(".question_answers") as HTMLElement;
    if (!answers) return "";

    let content = "";

    answers.childNodes.forEach((answer) => {
      const p = (answer as HTMLElement).querySelector("p");
      if (p) content += p.innerText + "\n";
    });

    return content;
  }

  public static getQuestionType(): QuestionType {
    const answer = find(".question_answers input") as HTMLInputElement;

    switch (answer.type) {
      case "radio":
        return QuestionType.SingleAnswer;
      case "checkbox":
        return QuestionType.MultiSelection;
      default:
        return QuestionType.WriteAnswer;
    }
  }
}
