import { createElement } from "../Helpers/HtmlHelper/HtmlHelper";
import DomInserter from "../DomInserter/DomInserter";

export default abstract class ScriptBuilder {
    static build(content: string | object | Function, insertBefore:boolean=false):HTMLScriptElement {
        const script = createElement('script') as HTMLScriptElement;
        script.type = 'text/javascript';

        if (typeof(content) === 'string') script.textContent = content;
        else script.textContent = content.toString();
        
        (!insertBefore) ? DomInserter.insert(script) : document.body.insertBefore(script, document.body.childNodes[0]);

        return script;
    }
}