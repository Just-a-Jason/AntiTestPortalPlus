import ResponseWindow from "./UI/ResponseWindow/ResponseWindow";
import QuestionReader from "../QuestionReader/QuestionReader";
import DomInserter from "../DomInserter/DomInserter";

export default abstract class AISolver {
  private static window: ResponseWindow | null = null;

  static turn(state: boolean) {
    if (
      document.URL.includes("/exam/DoTestQuestion.html") ||
      document.URL.includes("/exam/DoStartTest.html") ||
      document.URL.includes("/exam/LoadQuestion.html")
    ) {
      if (!state) {
        AISolver.window?.remove();
        AISolver.window = null;
      } else {
        AISolver.window = new ResponseWindow();
        const parent = document.querySelector(".question-area") as HTMLElement;

        DomInserter.insert(AISolver.window, parent);

        const questionContent =
          QuestionReader.readQuestionText() +
          "\n" +
          QuestionReader.readAnswers();

        console.log(questionContent);

        setTimeout(() => {
          AISolver.window?.displayError(
            "Hi! I am an AI solver! I will be added soon! 🤖"
          );
        }, 3000);
      }
    }
  }
}
