export default abstract class QuestionSearch {
    static turn(state:boolean):void {
        if (state) {
            const question = document.querySelector('.question_essence p') as HTMLElement;
            if(question) {
                question.style['color'] = '#007fff';
                question.style['cursor'] = 'pointer';
                question.style['fontWeight'] = 'bold';
                question.style['fontSize'] = '20px';

                const search = encodeURI(`https://google.com/search?q=${question.textContent}`);

                question.setAttribute('search', search);
                
                question.addEventListener('click', (e) => {
                    const search = (e.currentTarget as HTMLElement).getAttribute('search');
                    if(search) {
                        window.open(search, '_blank');
                    }
                });
            }
        }
    }
}