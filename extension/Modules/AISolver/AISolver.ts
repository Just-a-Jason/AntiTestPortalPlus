import ResponseWindow from "./UI/ResponseWindow/ResponseWindow";
import QuestionReader from "../QuestionReader/QuestionReader";
import DomInserter from "../DomInserter/DomInserter";

interface TextSession {
  prompt(prompt: string): Promise<string>;
  destroy(): void;
}

interface AI {
  createTextSession(): Promise<TextSession>;
}

declare global {
  interface Window {
    ai?: AI;
  }
}

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

        if (!window.ai) {
          AISolver.window?.displayError(
            "Twoja przeglądarka nie obsługuje jeszcze Chrome AI API... 🤖"
          );
          return;
        }

        const questionContent =
          QuestionReader.readQuestionText() +
          "\n" +
          QuestionReader.readAnswers();

        if (questionContent.trim() === "") {
          this.window?.displayError(
            "Nie mogę odczytać odpowiedzi ani pytania... 😥"
          );
        }

        const startSession = async () => {
          const session = await window.ai!.createTextSession();
          const response = await session.prompt(questionContent);

          this.window?.displayError(response);
          session.destroy();
        };

        startSession();
      }
    }
  }
}
