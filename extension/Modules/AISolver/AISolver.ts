import ResponseWindow from "./UI/ResponseWindow/ResponseWindow";
import QuestionReader from "../QuestionReader/QuestionReader";
import DomInserter from "../DomInserter/DomInserter";
import { find, isTestPage } from "../Utils/Utils";
import { AI, AISession } from "../AISolver/WindowAI";
import { QuestionType } from "../QuestionReader/QuestionType";

declare global {
  interface Window {
    ai?: AI;
  }
}

export default abstract class AISolver {
  private static window: ResponseWindow | null = null;
  private static session: AISession | null = null;

  public static turn(state: boolean) {
    if (isTestPage()) {
      if (!state) {
        AISolver.window?.remove();
        AISolver.window = null;
        this.destroySession();
      } else {
        // Window for UI (displays on screen)
        AISolver.window = new ResponseWindow();

        const parent = find(".question-area") as HTMLElement;

        DomInserter.insert(AISolver.window, parent);

        if (!window.ai) {
          AISolver.window?.displayError(
            "Twoja przeglądarka nie obsługuje jeszcze Chrome AI API... 🤖"
          );
          return;
        }

        const questionContext =
          QuestionReader.readQuestionText() +
          "\n" +
          QuestionReader.readAnswers();

        if (questionContext.trim() === "") {
          this.window?.displayError(
            "Nie mogę odczytać odpowiedzi ani pytania... 😥"
          );
          return;
        }

        const startSession = async () => {
          try {
            const session = await window.ai!.createGenericSession();
            const response = (await session.execute(questionContext)).trim();
            const type = QuestionReader.getQuestionType();
            this.session = session;

            if (type !== QuestionType.WriteAnswer) {
              const labels = find(
                "label",
                true
              ) as NodeListOf<HTMLLabelElement>;

              for (const label of labels) {
                const isValid = await session.execute(`
                    Napisz "true" lub "false" zależnie od tego czy odpowiedź zgadza się z tekstem. text: "${response}". odpowiedz: "${label.textContent}"
                  `);
                console.log(isValid);
                if (!JSON.parse(isValid)) continue;

                const answer = find(`#${label.htmlFor}`) as HTMLInputElement;
                if (type === QuestionType.SingleAnswer) {
                  answer.click();
                  break;
                } else if (type === QuestionType.MultiSelection) answer.click();
              }
            } else {
              (find("input[type='text']") as HTMLInputElement).value = response;
            }

            this.window?.displayError(response);
            this.destroySession();
          } catch (e) {
            console.error(e);
            this.window?.displayError("Nie można utworzyć sesji. 😥");
          }
        };

        startSession();
      }
    }
  }

  private static destroySession(): void {
    if (!this.session) return;
    this.session.destroy();
    this.session = null;
  }
}
