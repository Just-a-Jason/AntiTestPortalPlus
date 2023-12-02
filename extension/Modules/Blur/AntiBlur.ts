import ScriptBuilder from "../ScriptBuilder/ScriptBuilder";

export default abstract class AntiBlur  {
    private static logScript: HTMLScriptElement | null = null;
    private static blurScript: HTMLScriptElement | null = null;

    static turn(state:boolean):void {
        AntiBlur.destroyScripts();

        if(state) {
            AntiBlur.logScript = ScriptBuilder.build("logToServer = () => {}");
            AntiBlur.blurScript = ScriptBuilder.build("Object.defineProperty(document, 'hasFocus', {get: () => {throw new ReferenceError('AntiBlur')},})");
        }
    }
    
    private static destroyScripts():void {
        AntiBlur.logScript?.remove();
        AntiBlur.blurScript?.remove();
    }
}