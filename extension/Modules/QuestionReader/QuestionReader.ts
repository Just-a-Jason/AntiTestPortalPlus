import { QuestionType } from "./QuestionType";

export default abstract class QuestionReader {
  public static readQuestionText(): string {
    const q = document.querySelector(".question_essence");
    return q ? q.textContent! : "";
  }

  public static readAnswers(): string {
    const answers = document.querySelector(".question_answers");
    if (!answers) return "";

    let content = "";

    answers.childNodes.forEach((answer) => {
      const p = (answer as HTMLElement).querySelector("p");
      if (p) content += p.innerText + "\n";
    });

    return content;
  }

  private static getQuestionType(): QuestionType {
    return QuestionType.SingleAnswer;
  }
}
