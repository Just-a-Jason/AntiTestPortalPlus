export default abstract class QuestionReader {
    static readQuestionText():string  {
        const q = document.querySelector('.question_essence');
        return q ? q.textContent! : '';
    }
    static readAnswers(): string  {
        const answers = document.querySelector('.question_answers');

        if(!answers) return '';

        answers.childNodes.forEach(answer => {
            const p = (answer as HTMLElement).querySelector('p');
            if (p) console.log(p.innerText);
        });

        return 'some text';
    }
}