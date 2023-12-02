export default abstract class QuestionReader {
    static readQuestionText():string  {
        const q = document.querySelector('.question_essence');
        return q ? q.textContent! : '';
    }

    static readImage():void {
        const q = document.querySelector('.question_essence');
        const img = q?.querySelector('img') as HTMLImageElement;

        if (img) {
            img.style['border'] = '4px solid #ad00ff';
            img.style['cursor'] = 'pointer';

            img.addEventListener('click', () => {
                const search = `https://lens.google.com/search?ep=gisbubb&hl=pl&re=${encodeURIComponent(img.src)}`;
                window.open(search, '_blank');
            });
        }
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