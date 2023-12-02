import UIComponent from '../UIComponent';
import './ResponseArea.css';

export default class ResponseArea extends UIComponent {
    private _textArea:HTMLElement | null = null;

    override _template(): HTMLElement {
        const div = document.createElement('div');
        const textarea = document.createElement('textarea');
        textarea.className = 'ChatGPTResponse-responseText';

        const button = document.createElement('button');
        button.className = 'ChatGPT-copyResponse';
        button.textContent = 'Copy Response';
        
        this._textArea = textarea;
        div.appendChild(textarea);
        div.appendChild(button);

        return div;
    }

    setContent(content:string):void {
        console.log(this._textArea);
        if(this._textArea) this._textArea.textContent = content;
    }
}