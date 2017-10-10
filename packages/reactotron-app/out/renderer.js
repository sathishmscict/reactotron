(function(FuseBox){FuseBox.$fuse$=FuseBox;
var __process_env__ = {"NODE_ENV":"development"};
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("renderer/index.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const App_1 = require("./Foundation/App");
require("./app.global.css");
const react_tap_event_plugin_1 = require("react-tap-event-plugin");
react_tap_event_plugin_1.default();
react_dom_1.render(React.createElement(App_1.default, null), document.getElementById('root'));
document.addEventListener('dragover', event => event.preventDefault());
document.addEventListener('drop', event => event.preventDefault());
//# sourceMappingURL=index.js.map
});
___scope___.file("renderer/Foundation/App.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const VisualRoot_1 = require("./VisualRoot");
const mobx_react_1 = require("mobx-react");
const SessionStore_1 = require("../Stores/SessionStore");
const session = new SessionStore_1.default();
class App extends React.Component {
    render() {
        return (React.createElement(mobx_react_1.Provider, { session: session },
            React.createElement(VisualRoot_1.default, null)));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map
});
___scope___.file("renderer/Foundation/VisualRoot.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Colors_1 = require("../Theme/Colors");
const AppStyles_1 = require("../Theme/AppStyles");
const Timeline_1 = require("./Timeline");
const StateKeysAndValuesDialog_1 = require("../Dialogs/StateKeysAndValuesDialog");
const StateDispatchDialog_1 = require("../Dialogs/StateDispatchDialog");
const HelpDialog_1 = require("../Dialogs/HelpDialog");
const StateWatchDialog_1 = require("../Dialogs/StateWatchDialog");
const RenameStateDialog_1 = require("../Dialogs/RenameStateDialog");
const FilterTimelineDialog_1 = require("../Dialogs/FilterTimelineDialog");
const Subscriptions_1 = require("./Subscriptions");
const Backups_1 = require("./Backups");
const Native_1 = require("./Native");
const Sidebar_1 = require("./Sidebar");
const Help_1 = require("./Help");
const mobx_react_1 = require("mobx-react");
const Styles = {
    container: Object.assign({}, AppStyles_1.default.Layout.vbox),
    content: Object.assign({}, AppStyles_1.default.Layout.vbox, { backgroundColor: Colors_1.default.background, color: Colors_1.default.foreground, height: '100vh', scroll: 'hidden' }),
    body: Object.assign({}, AppStyles_1.default.Layout.hbox),
    app: Object.assign({}, AppStyles_1.default.Layout.vbox, { scroll: 'none', overflow: 'hidden' }),
    page: Object.assign({}, AppStyles_1.default.Layout.vbox),
    pageHidden: {
        flex: 0,
        height: 0,
        visibility: 'hidden',
    },
};
let VisualRoot = class VisualRoot extends React.Component {
    render() {
        const { session } = this.props;
        const { ui } = session;
        const showTimeline = ui.tab === 'timeline';
        const showSubscriptions = ui.tab === 'subscriptions';
        const showHelp = ui.tab === 'help';
        const showSettings = ui.tab === 'settings';
        const showBackups = ui.tab === 'backups';
        const showNative = ui.tab === 'native';
        return (React.createElement("div", { style: Styles.container },
            React.createElement("div", { style: Styles.content },
                React.createElement("div", { style: Styles.body },
                    React.createElement(Sidebar_1.default, null),
                    React.createElement("div", { style: Styles.app },
                        React.createElement("div", { style: showTimeline ? Styles.page : Styles.pageHidden },
                            React.createElement(Timeline_1.default, null)),
                        React.createElement("div", { style: showSubscriptions ? Styles.page : Styles.pageHidden },
                            React.createElement(Subscriptions_1.default, null)),
                        React.createElement("div", { style: showBackups ? Styles.page : Styles.pageHidden },
                            React.createElement(Backups_1.default, null)),
                        React.createElement("div", { style: showHelp ? Styles.page : Styles.pageHidden },
                            React.createElement(Help_1.default, null)),
                        React.createElement("div", { style: showNative ? Styles.page : Styles.pageHidden },
                            React.createElement(Native_1.default, null)),
                        React.createElement("div", { style: showSettings ? Styles.page : Styles.pageHidden },
                            React.createElement("h1", null, "Settings"))))),
            React.createElement(StateKeysAndValuesDialog_1.default, null),
            React.createElement(StateDispatchDialog_1.default, null),
            React.createElement(HelpDialog_1.default, null),
            React.createElement(StateWatchDialog_1.default, null),
            React.createElement(RenameStateDialog_1.default, null),
            React.createElement(FilterTimelineDialog_1.default, null)));
    }
};
VisualRoot = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], VisualRoot);
exports.default = VisualRoot;
//# sourceMappingURL=VisualRoot.js.map
});
});
FuseBox.import("fusebox-hot-reload").connect(4445, "")
FuseBox.target = "electron"

FuseBox.import("default/renderer/index.jsx");
FuseBox.main("default/renderer/index.jsx");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((d||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(d){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!d&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=m[a];if(!s){if(d&&"electron"!==h.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),v=i(c),p=s.f[v];return!p&&v.indexOf("*")>-1&&(l=v),p||l||(v=t(c,"/","index.js"),p=s.f[v],p||(v=c+".js",p=s.f[v]),p||(p=s.f[c+".jsx"]),p||(v=c+"/index.jsx",p=s.f[v])),{file:p,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:v}}function s(e,r,n){if(void 0===n&&(n={}),!d)return r(/\.(js|json)$/.test(e)?v.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);h.dynamic(a,o),r(h.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=g[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=m[t.pkgName];if(u){var p={};for(var g in u.f)a.test(g)&&(p[g]=c(t.pkgName+"/"+g));return p}}if(!i){var h="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return h?r(e):null},r)}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var w=i.locals={},y=n(t.validPath);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return c(e,{pkg:_,path:y,v:t.versions})},d||!v.require.main?w.require.main={filename:"./",paths:[]}:w.require.main=v.require.main;var j=[w.module.exports,w.require,w.module,t.validPath,y,_];return l("before-import",j),i.fn.apply(0,j),l("after-import",j),w.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof window&&window.navigator,v=d?window:global;d&&(v.global=window),e=d&&"undefined"==typeof __fbx__dnm__?e:module.exports;var p=d?window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};d||(v.require=require);var m=p.p=p.p||{},g=p.e=p.e||{},h=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){g[e]=g[e]||[],g[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=m[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=m.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(m[e])return n(m[e].s);var t=m[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r.packages=m,r.isBrowser=d,r.isServer=!d,r.plugins=[],r}();return d||(v.FuseBox=h),e.FuseBox=h}(this))
//# sourceMappingURL=renderer.js.map