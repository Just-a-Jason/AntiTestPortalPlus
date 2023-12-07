(()=>{"use strict";var e={296:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),s=n.n(o),r=n(645),i=n.n(r)()(s());i.push([e.id,".ChatGPTResponse-ErrorPopUP {\n    animation: popUp 0.5s ease-in-out;\n    box-shadow: 2px 2px 5px #000;\n    background: #030303;\n    border-radius: 10px;\n    text-align: center;\n    padding: 10px;\n    width: 200px;\n}\n\n@keyframes popUp {\n    from {\n        transform: scale(0);\n    }\n    to {\n        transform: scale(1);\n    }\n}",""]);const a=i},502:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),s=n.n(o),r=n(645),i=n.n(r)()(s());i.push([e.id,".loadingSpinner {\n    display: flex;\n}\n\n.loadingSpinner .dot {\n    animation: pulse 1.5s ease-in-out infinite;\n    background-color: #464646;\n    border-radius: 50%;\n    width: 10px;\n    height: 10px;\n    margin: 4px;\n}\n\n.loadingSpinner .dot:nth-child(2) {\n    animation-delay: 0.5s;\n}\n.loadingSpinner .dot:nth-child(3) {\n    animation-delay: 1s;\n}\n\n@keyframes pulse {\n    0%, 100% {\n        transform: scale(1);\n    }\n    50% {\n        transform: scale(1.5);\n    }\n}",""]);const a=i},4:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),s=n.n(o),r=n(645),i=n.n(r)()(s());i.push([e.id,".ChatGPTResponse-responseText {\n    resize: none;\n    width: 100%;\n    height: 100%;\n    background-color: #222;\n    color:#fff;\n    font-family: monospace;\n    font-weight: bold;\n    border: none;\n}\n\n.ChatGPT-copyResponse {\n    color: #fff;\n    font-family: monospace;\n    cursor: pointer;\n    margin-top: 20px;\n    padding: 10px;\n    background-color: #222;\n    border: none;\n}",""]);const a=i},447:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),s=n.n(o),r=n(645),i=n.n(r)()(s());i.push([e.id,".ChatGPTResponse {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    width: 250px;\n    max-height: 400px;\n    background-color: #171717;\n    font-family: monospace;\n    border-radius: 20px 20px 0px 0px ;\n    box-shadow: 2px 2px 15px #000;\n}\n\n\n.ChatGPTResponse__Image {\n    height: 20px;\n    width: 20px;\n    animation: spin 4s infinite;\n}\n\n.ChatGPTResponse__Header {\n    background-color: #222;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    border-radius: 20px 20px 0px 0px;\n    border-bottom: 2px solid #464646;\n    cursor: pointer;\n}\n\n.ChatGPTResponse__Header p {\n    color: #fff;\n    font-weight: bold;\n    font-size: 15px;\n}\n\n.ChatGPTResponse__Footer {\n    border-radius: 20px 20px 0px 0px;\n    background-color: #222;\n    font-family: monospace;\n    text-align: center;\n    font-weight: bold;\n    color:#464646;\n    padding: 10px;\n}\n\n.ChatGPTResponse__Body {\n    height: 295px;\n    background-color: #171717;\n    padding: 10px;\n    color:#fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.ChatGPTResponse__Footer * {\n    margin: 0;\n}\n\n\n\n@keyframes spin {\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n}",""]);const a=i},302:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),s=n.n(o),r=n(645),i=n.n(r)()(s());i.push([e.id,".ChatGPTResponse-RetryButton {\n    box-shadow: 2px 2px 10px #000;\n    border-radius: 10px;\n    background: #222;\n    margin-top: 10px;\n    cursor: pointer;\n    padding: 10px;\n}\n",""]);const a=i},586:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),s=n.n(o),r=n(645),i=n.n(r)()(s());i.push([e.id,".PeterTV {\n    justify-content: center;\n    background-color:#000;\n    align-items: center;\n    overflow: hidden;\n    height: 125px;\n    display: flex;\n    width: 190px;\n    cursor: grab;\n    margin-top: 50px;\n}\n\n.PeterTV__TVImage {\n    position: absolute;\n    width: 200px;\n}\n\n.PeterTV__video {\n    width: 150px;   \n}",""]);const a=i},523:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),s=n.n(o),r=n(645),i=n.n(r)()(s());i.push([e.id,".menu-item {\n    border-bottom: 1px solid #ccc;\n    font-weight: bold;\n    min-width:100px;\n    font-size: 14px;\n    cursor: pointer;\n    padding: 10px;\n    color:#000;\n}\n  \n.menu-item:last-child {\n    border-bottom: none;\n}",""]);const a=i},196:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),s=n.n(o),r=n(645),i=n.n(r)()(s());i.push([e.id,".SettingsBox {\n  box-shadow: 4px 4px 5px #888;\n  background-color: #fafafa;\n  border:solid 3px #e6e6e6;\n  font-family: monospace;\n  border-radius: 15px;\n  transition: 0.2s;\n  position: fixed;\n  cursor: pointer;\n  font-size: 10px;\n  padding: 10px;\n  z-index: 9999;\n  color: #fff;\n  bottom: 20px;\n  right: 20px;\n}\n\n.SettingsBox:hover {\n  background-color: #a6a6a6;\n  border: solid 3px #303030;\n}\n\n#widget-text {\n  font-weight: bold;\n  transition: 0.2s;\n  cursor: pointer;\n  display: flex;\n  height: 20px;\n  width: 20px;\n}\n\n\n#widget-menu {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  transform: scale(0);\n  position: absolute;\n  transition: 0.2s;\n  bottom: 100%; \n  z-index: 1; \n  right: 0;\n}\n\n#widget-menu.menuVisible {\n  transform: scale(1);\n}\n\n.SettingsBox__image {\n  width: 25px;\n}",""]);const a=i},162:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),s=n.n(o),r=n(645),i=n.n(r)()(s());i.push([e.id,".slider {\n    width: 40px;\n    height: 20px;\n    background-color: #171717;\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    cursor: pointer;\n    position: relative;\n}\n.slider .slider__set {\n    width: 15px;\n    height: 15px;\n    background-color: #fff;\n    border-radius: 50%;\n    margin-left: 2px;\n    position: absolute;\n}\n\n.slider, .slider__set {\n    transition: 0.3s;\n}\n.on {\n    background-color: #ff9d1c;\n}",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);o&&i[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},i=[],a=0;a<e.length;a++){var d=e[a],l=o.base?d[0]+o.base:d[0],c=r[l]||0,u="".concat(l," ").concat(c);r[l]=c+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=s(m,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=o(e=e||[],s=s||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var a=n(r[i]);t[a].references--}for(var d=o(e,s),l=0;l<r.length;l++){var c=n(r[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}r=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,s&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{static LoadAsset(e){return chrome.runtime.getURL("Assets/"+e)}}class t{constructor(){this._body=this.initTemplate()}appendChild(e){this._body.element.appendChild(e)}_getBody(){return this._body}_remove(){this._body.element.remove(),this._done()}initTemplate(){return this._ready(),this._template()}_done(){}_ready(){console.log(`${this.constructor.name} is ready!`)}}class o extends t{constructor(){super(...arguments),this.content="hi"}_template(){return{element:document.createElement("div")}}}class s{static insert(e,n=null){(e=e instanceof r?e._getBody():e)instanceof t&&(e=e._getBody().element),null===n?document.body.append(e):n.append(e)}}class r{constructor(){this._body=this._template(),this._ready()}appendChild(e){e instanceof r?this._body.appendChild(e._getBody()):e instanceof HTMLElement&&this._body.appendChild(e)}_done(){console.log(`${this.constructor.name} has been destroyed.`)}_getBody(){return this._body}_remove(){this._body.remove(),this._done()}_ready(){s.insert(this._body)}}var i=n(379),a=n.n(i),d=n(795),l=n.n(d),c=n(569),u=n.n(c),p=n(565),m=n.n(p),h=n(216),g=n.n(h),f=n(589),y=n.n(f),x=n(523),_={};_.styleTagTransform=y(),_.setAttributes=m(),_.insert=u().bind(null,"head"),_.domAPI=l(),_.insertStyleElement=g(),a()(x.Z,_),x.Z&&x.Z.locals&&x.Z.locals;class b extends r{constructor(e){super(),this.menuItemText=e,this._body.textContent=this.menuItemText}_template(){const e=document.createElement("div");return e.className="menu-item",e}}class v{static removeAllChild(e){var t;null===(t=e.childNodes)||void 0===t||t.forEach((e=>e.remove()))}}var T=n(502),w={};w.styleTagTransform=y(),w.setAttributes=m(),w.insert=u().bind(null,"head"),w.domAPI=l(),w.insertStyleElement=g(),a()(T.Z,w),T.Z&&T.Z.locals&&T.Z.locals;class S extends r{_template(){const e=document.createElement("div");e.className="loadingSpinner";for(let t=0;t<3;t++){const t=document.createElement("div");t.className="dot",e.appendChild(t)}return e}}var C=n(4),E={};E.styleTagTransform=y(),E.setAttributes=m(),E.insert=u().bind(null,"head"),E.domAPI=l(),E.insertStyleElement=g(),a()(C.Z,E),C.Z&&C.Z.locals&&C.Z.locals;class P extends r{constructor(){super(...arguments),this._textArea=null}_template(){const e=document.createElement("div"),t=document.createElement("textarea");t.className="ChatGPTResponse-responseText";const n=document.createElement("button");return n.className="ChatGPT-copyResponse",n.textContent="Copy Response",this._textArea=t,e.appendChild(t),e.appendChild(n),e}setContent(e){console.log(this._textArea),this._textArea&&(this._textArea.textContent=e)}}var Z=n(296),A={};A.styleTagTransform=y(),A.setAttributes=m(),A.insert=u().bind(null,"head"),A.domAPI=l(),A.insertStyleElement=g(),a()(Z.Z,A),Z.Z&&Z.Z.locals&&Z.Z.locals;class L extends r{_template(){const e=document.createElement("p");return e.classList.add("ChatGPTResponse-ErrorPopUP"),e}constructor(e){super(),this.errorText=e,this._body.innerText=this.errorText}}var R=n(302),B={};B.styleTagTransform=y(),B.setAttributes=m(),B.insert=u().bind(null,"head"),B.domAPI=l(),B.insertStyleElement=g(),a()(R.Z,B),R.Z&&R.Z.locals&&R.Z.locals;class I extends r{_template(){const e=document.createElement("div");return e.textContent="Retry",e.classList.add("ChatGPTResponse-RetryButton"),e}_ready(){this._body.addEventListener("click",(()=>{q.turn(!1),q.turn(!0)}))}}var V=n(447),k={};k.styleTagTransform=y(),k.setAttributes=m(),k.insert=u().bind(null,"head"),k.domAPI=l(),k.insertStyleElement=g(),a()(V.Z,k),V.Z&&V.Z.locals&&V.Z.locals;class G extends t{_template(){const t=document.createElement("div");t.className="ChatGPTResponse";const n=document.createElement("section");n.className="ChatGPTResponse__Header";const o=document.createElement("img");o.src=e.LoadAsset("chat-logo.png"),o.alt="chat gpt logo",o.className="ChatGPTResponse__Image";const s=document.createElement("p");s.textContent="ChatGPT",n.appendChild(o),n.appendChild(s);const r=document.createElement("section");r.className="ChatGPTResponse__Body",r.appendChild((new S)._getBody());const i=document.createElement("footer");i.className="ChatGPTResponse__Footer";const a=document.createElement("p");return a.textContent="Powered by OpenAI",i.appendChild(a),t.appendChild(n),t.appendChild(r),t.appendChild(i),{element:t,structure:{responseBody:r}}}_ready(){console.log("ResponseBox is ready!")}setResponse(e){var t,n;v.removeAllChild(null===(t=this._body.structure)||void 0===t?void 0:t.responseBody);const o=new P;o.setContent(e),null===(n=this._body.structure)||void 0===n||n.responseBody.appendChild(o._getBody())}displayError(e){var t,n,o;if(null===(t=this._body.structure)||void 0===t?void 0:t.responseBody){const t=new L(e),s=new I;v.removeAllChild(this._body.structure.responseBody),null===(n=this._body.structure)||void 0===n||n.responseBody.appendChild(t._getBody()),null===(o=this._body.structure)||void 0===o||o.responseBody.appendChild(s._getBody())}}}class M{static readQuestionText(){const e=document.querySelector(".question_essence");return e?e.textContent:""}static readImage(){const e=document.querySelector(".question_essence"),t=null==e?void 0:e.querySelector("img");t&&(t.style.border="4px solid #ad00ff",t.style.cursor="pointer",t.addEventListener("click",(()=>{const e=`https://lens.google.com/search?ep=gisbubb&hl=pl&re=${encodeURIComponent(t.src)}`;window.open(e,"_blank")})))}static readAnswers(){const e=document.querySelector(".question_answers");if(!e)return"";let t="";return e.childNodes.forEach((e=>{const n=e.querySelector("p");n&&(t+=n.innerText+"\n")})),t}}class N{static turn(e){var t;if(document.URL.includes("/exam/DoTestQuestion.html")||document.URL.includes("/exam/DoStartTest.html")||document.URL.includes("/exam/LoadQuestion.html"))if(e){N._window=new G;const e=document.querySelector(".question-area");s.insert(N._window,e),console.log("%cChatGPT module has been initialized.","color:#80d724; font-size: 20px;");const t=M.readQuestionText()+"\n"+M.readAnswers();console.log(t),setTimeout((()=>{var e;null===(e=N._window)||void 0===e||e.displayError("Something went wrong. Please try again later.")}),3e3)}else null===(t=N._window)||void 0===t||t._remove(),N._window=null}}N._window=null;const q=N;class U{static build(e){const t=document.createElement("script");return t.type="text/javascript",t.textContent="string"==typeof e?e:e.toString(),console.log("script injected."),s.insert(t),t}}class j{static turn(e){j.destroyScripts(),e&&(j.logScript=U.build("logToServer = () => {}"),j.blurScript=U.build("Object.defineProperty(document, 'hasFocus', {get: () => {throw new ReferenceError('AntiBlur')},})"))}static destroyScripts(){var e,t;null===(e=j.logScript)||void 0===e||e.remove(),null===(t=j.blurScript)||void 0===t||t.remove()}}j.logScript=null,j.blurScript=null;const z=j;var O=n(162),W={};W.styleTagTransform=y(),W.setAttributes=m(),W.insert=u().bind(null,"head"),W.domAPI=l(),W.insertStyleElement=g(),a()(O.Z,W),O.Z&&O.Z.locals&&O.Z.locals;class H{static turn(e){var t;if(e){Object.defineProperty(window,"startingRemainingTimeInM",{writable:!1,value:99999,configurable:!1}),H.onLoadScript=U.build("onLoad = () => {}");for(let e=0;e<1e3;e++)clearInterval(e)}else null===(t=this.onLoadScript)||void 0===t||t.remove()}}H.onLoadScript=null;const K=H;var Q=n(586),$={};$.styleTagTransform=y(),$.setAttributes=m(),$.insert=u().bind(null,"head"),$.domAPI=l(),$.insertStyleElement=g(),a()(Q.Z,$),Q.Z&&Q.Z.locals&&Q.Z.locals;class F extends r{constructor(){super(...arguments),this.selected=!1,this.currentVideo=0,this.maxVideos=2}moveWindow(e,t){this.selected&&(this._body.style.position="absolute",this.setPosition({x:e,y:t}))}setPosition(e){const t=e.x-this._body.clientWidth/2+"px",n=e.y-this._body.clientHeight/2+"px";this._body.style.left=t,this._body.style.top=n}_template(){const t=document.createElement("div");t.className="PeterTV";const n=document.createElement("img");n.src=e.LoadAsset("PeterTV/peterTv.png"),n.alt="peterTV",n.className="PeterTV__TVImage";const o=document.createElement("video");return o.src=e.LoadAsset(`PeterTV/vid_${this.currentVideo||0}.mp4`),o.addEventListener("ended",(()=>this.nextVideo(o))),o.addEventListener("dblclick",(()=>this.nextVideo(o))),o.className="PeterTV__video",o.autoplay=!0,t.appendChild(n),t.appendChild(o),t}nextVideo(t){this.currentVideo++,this.currentVideo%=this.maxVideos,t.src=e.LoadAsset(`PeterTV/vid_${this.currentVideo}.mp4`)}_ready(){["mousedown","touchstart"].forEach((e=>this._body.addEventListener(e,(()=>this.selected=!0)))),["mouseup","touchend"].forEach((e=>this._body.addEventListener(e,(()=>this.selected=!1)))),["mousemove","touchmove"].forEach((e=>this._body.addEventListener(e,(e=>{e instanceof TouchEvent&&this.moveWindow(e.touches[0].pageX,e.touches[0].pageY),e instanceof MouseEvent&&this.moveWindow(e.pageX,e.pageY)}))))}}class D{static turn(e,t=null){var n;if(e){if(document.URL.includes("/exam/DoTestQuestion.html")||document.URL.includes("/exam/DoStartTest.html")||document.URL.includes("/exam/LoadQuestion.html")){const e=document.querySelector(".question-area"),t=new F;this._peterTVWindow=t,s.insert(t,e)}}else null===(n=this._peterTVWindow)||void 0===n||n._remove()}}D._peterTVWindow=null;const J=D;class X extends r{_template(){const e=document.createElement("div");e.className="slider",document.body.appendChild(e);const t=document.createElement("div");return t.className="slider__set",e.appendChild(t),e}constructor(e){super(),this._settingKey=e,this._on=!1,localStorage.getItem(this._settingKey)&&(this._on=JSON.parse(localStorage.getItem(this._settingKey))),this.setState(this._on)}_ready(){this._body.addEventListener("click",(e=>{this.setState(!this._on),this.setSettingState(),"peterTV_Module"==this._settingKey&&J.turn(this._on,{x:e.pageX,y:e.pageY})}))}setState(e){let t=e?120:0;e?this._body.classList.add("on"):this._body.classList.remove("on");const n=this._body.querySelector(".slider__set");n&&(n.style.transform=`translateX(${t}%)`),this._on=e}setSettingState(){switch(localStorage.setItem(this._settingKey,this._on?"true":"false"),this.setState(JSON.parse(localStorage.getItem(this._settingKey))),this._settingKey){case"unlimitedTime_Module":K.turn(this._on);break;case"antiBlur_Module":z.turn(this._on);break;case"chatGPT_Module":q.turn(this._on)}}}var Y=n(196),ee={};ee.styleTagTransform=y(),ee.setAttributes=m(),ee.insert=u().bind(null,"head"),ee.domAPI=l(),ee.insertStyleElement=g(),a()(Y.Z,ee),Y.Z&&Y.Z.locals&&Y.Z.locals;class te extends r{_template(){const t=document.createElement("div");t.classList.add("SettingsBox"),document.body.appendChild(t);const n=document.createElement("div");n.id="widget-menu",t.appendChild(n);const o=document.createElement("div");o.id="widget-text";const s=document.createElement("img");return s.src=e.LoadAsset("logo.png"),s.classList.add("SettingsBox__image"),o.appendChild(s),t.appendChild(o),o.addEventListener("click",(()=>{n.classList.toggle("menuVisible")})),t}_ready(){this.addSliders()}addSliders(){const e=["Anti Blur 🫧","chatGPT 🤖","Image Search 🖼️🔍","Unlimited Time ⌛","Question Search ❓🔍","PeterTV 📺"],t=this._body.querySelector("#widget-menu"),n=new Map([["antiBlur_Module","true"],["chatGPT_Module","false"],["imageSearch_Module","false"],["unlimitedTime_Module","false"],["questionSearch_Module","true"],["peterTV_Module","false"]]);let o=0;for(const s of n.keys()){localStorage.getItem(s)||localStorage.setItem(s,n.get(s));const r=new b(e[o++]),i=new X(s);r.appendChild(i),null==t||t.appendChild(r._getBody())}}getSettingsValue(e){return!!localStorage.getItem(e)&&JSON.parse(localStorage.getItem(e))}}class ne{static turn(e){if(e){const e=document.querySelector(".question_essence p");if(e){e.style.color="#007fff",e.style.cursor="pointer",e.style.fontWeight="bold",e.style.fontSize="20px";const t=encodeURI(`https://google.com/search?q=${e.textContent}`);e.setAttribute("search",t),e.addEventListener("click",(e=>{const t=e.currentTarget.getAttribute("search");t&&window.open(t,"_blank")}))}}}}new class{constructor(){this._settingsBox=new te,this._settingsBox.getSettingsValue("unlimitedTime_Module")&&K.turn(!0),this._settingsBox.getSettingsValue("antiBlur_Module")&&z.turn(!0),this._settingsBox.getSettingsValue("chatGPT_Module")&&q.turn(!0),this._settingsBox.getSettingsValue("questionSearch_Module")&&ne.turn(!0),console.clear(),console.log("%cAntiTestportal+\nby: @Jason.json","color: #ff0; font-size: 20px;"),new o}}})()})();