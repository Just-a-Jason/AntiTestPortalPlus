import DomInserter from "../DomInserter/DomInserter";

export default abstract class ScriptBuilder {
    static build(content: string | object | Function):HTMLScriptElement {
        const script = document.createElement('script');
        script.type = 'text/javascript';

        if (typeof(content) === 'string') script.textContent = content;
        else script.textContent = content.toString();
        DomInserter.insert(script);
        return script;
    }
}