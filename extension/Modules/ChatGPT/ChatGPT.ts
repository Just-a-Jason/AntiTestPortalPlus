import ResponseBox from "./UI/ResponseBox/ResponseBox";

export default class ChatGPT {
    constructor(
        private readonly _responseBox:ResponseBox = new ResponseBox()
    ) {
        console.log('%cChatGPT module has been initialized.', 'color:#80d724; font-size: 20px;');
    }

    getWindow():ResponseBox {
        return this._responseBox;
    }
} 
