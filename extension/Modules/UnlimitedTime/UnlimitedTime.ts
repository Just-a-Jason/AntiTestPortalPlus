import ScriptBuilder from "../ScriptBuilder/ScriptBuilder";

export default abstract class UnlimitedTime {
    private static onLoadScript: HTMLScriptElement | null = null;
    static turn(state:boolean):void {
        
        if(state) {
            UnlimitedTime.onLoadScript = ScriptBuilder.build('onLoad = () => {}');
            for (let i = 0; i < 1000; i++) {
                clearInterval(i);
            }
        }
        else {
            this.onLoadScript?.remove();
        }
    }
}