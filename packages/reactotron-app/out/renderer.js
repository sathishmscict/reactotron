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
___scope___.file("renderer/Theme/Colors.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("color");
const react_base16_styling_1 = require("react-base16-styling");
// https://github.com/chriskempson/base16/blob/master/styling.md
const getStylingFromBase16 = base16Theme => ({
    roles: {
        backgroundDarker: color_1.default(base16Theme.base00).darken(0.1).hsl().string(),
        background: base16Theme.base00,
        backgroundSubtleLight: color_1.default(base16Theme.base00).lighten(0.05).hsl().string(),
        backgroundSubtleDark: color_1.default(base16Theme.base00).darken(0.3).hsl().string(),
        backgroundLighter: base16Theme.base01,
        line: color_1.default(base16Theme.base01).darken(0.1).hsl().string(),
        subtleLine: color_1.default(base16Theme.base01).darken(0.2).hsl().string(),
        backgroundHighlight: base16Theme.base02,
        highlight: base16Theme.base03,
        foregroundDark: base16Theme.base04,
        foreground: base16Theme.base05,
        foregroundLight: base16Theme.base06,
        backgroundLight: base16Theme.base07,
        tag: base16Theme.base08,
        tagComplement: color_1.default(base16Theme.base08).lighten(0.65).hsl().string(),
        constant: base16Theme.base09,
        bold: base16Theme.base0A,
        glow: color_1.default(base16Theme.base00).darken(0.2).fade(0.2).hsl().string(),
        string: base16Theme.base0B,
        support: base16Theme.base0C,
        heading: base16Theme.base0D,
        keyword: base16Theme.base0E,
        warning: base16Theme.base0F,
        chrome: color_1.default(base16Theme.base00).lighten(0.1).hsl().string(),
        chromeLine: color_1.default(base16Theme.base00).lighten(0.25).hsl().string()
    },
    theme: base16Theme,
});
// the default theme until i figure out how to customize it on the fly
// http://chriskempson.github.io/base16/
// const defaultTheme = 'atliersavanah'
// const defaultTheme = 'ocean'
// const defaultTheme = 'mocha'
// const defaultTheme = 'railscasts'
// const defaultTheme = 'greenscreen'
const defaultTheme = 'twilight';
// the natural or inverted look
const invertTheme = false;
// some kind of wierd factory?
const createStylingFromTheme = react_base16_styling_1.createStyling(getStylingFromBase16, {});
// here's where I think i should be allowing user customization?
const styling = createStylingFromTheme(defaultTheme);
// fish out the roles because I haven't committed fully to styling in the components just yet
const roles = styling('roles').style;
// awkwardly expose the theme for the ObjectTree component
const theme = styling('theme').style;
exports.default = Object.assign({}, roles, { theme,
    invertTheme });
//# sourceMappingURL=Colors.js.map
});
___scope___.file("renderer/Theme/AppStyles.js", function(exports, require, module, __filename, __dirname){

const Layout = {
  vbox: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  hbox: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row'
  }
}

export default {
  Layout
}

});
___scope___.file("renderer/Foundation/Timeline.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const mobx_react_1 = require("mobx-react");
const Commands_1 = require("../Commands");
const TimelineHeader_1 = require("./TimelineHeader");
const ramda_1 = require("ramda");
const AppStyles_1 = require("../Theme/AppStyles");
const EmptyState_1 = require("../Foundation/EmptyState");
const Styles = {
    container: Object.assign({}, AppStyles_1.default.Layout.vbox, { margin: 0, flex: 1 }),
    commands: {
        margin: 0,
        padding: 0,
        overflowY: 'auto',
        overflowX: 'hidden'
    }
};
let Timeline = class Timeline extends react_1.Component {
    // fires when we will update
    componentWillUpdate() {
        const node = this.refs.commands;
        // http://blog.vjeux.com/2013/javascript/scroll-position-with-react.html
        // remember our height, position, and if we're at the top
        this.scrollHeight = node.scrollHeight;
        this.scrollTop = node.scrollTop;
        this.isPinned = this.scrollTop === 0;
    }
    // fires after we did update
    componentDidUpdate() {
        // should we be pinned to top, let's not auto-scroll
        if (this.isPinned)
            return;
        const node = this.refs.commands;
        // scroll to the place we were before
        // TODO: this falls apart as we reach max queue size as the scrollHeigh no longer changes
        node.scrollTop = this.scrollTop + node.scrollHeight - this.scrollHeight;
    }
    renderEmpty() {
        return (react_1.default.createElement(EmptyState_1.default, { icon: 'reorder', title: 'No Activity' },
            react_1.default.createElement("p", null, "Once your app connects and starts sending events, they will appear here.")));
    }
    render() {
        // grab the commands, but sdrawkcab
        const commands = this.props.session.commands;
        const isEmpty = commands.length === 0;
        const renderItem = command => {
            const CommandComponent = Commands_1.default(command);
            if (ramda_1.isNil(CommandComponent))
                return null;
            return react_1.default.createElement(CommandComponent, { key: command.messageId, command: command });
        };
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement(TimelineHeader_1.default, null),
            isEmpty && this.renderEmpty(),
            react_1.default.createElement("div", { style: Styles.commands, ref: 'commands' }, ramda_1.map(renderItem, commands))));
    }
};
Timeline = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], Timeline);
exports.default = Timeline;
//# sourceMappingURL=Timeline.js.map
});
___scope___.file("renderer/Commands/index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogCommand_1 = require("./LogCommand");
var StateActionCompleteCommand_1 = require("./StateActionCompleteCommand");
var ApiResponseCommand_1 = require("./ApiResponseCommand");
var ClientIntroCommand_1 = require("./ClientIntroCommand");
var BenchmarkReportCommand_1 = require("./BenchmarkReportCommand");
var StateValuesResponseCommand_1 = require("./StateValuesResponseCommand");
var StateKeysResponseCommand_1 = require("./StateKeysResponseCommand");
var StateValuesChangeCommand_1 = require("./StateValuesChangeCommand");
var DisplayCommand_1 = require("./DisplayCommand");
var ImageCommand_1 = require("./ImageCommand");
var SagaTaskCompleteCommand_1 = require("./SagaTaskCompleteCommand");
var AsyncStorageValuesCommand_1 = require("./AsyncStorageValuesCommand");
exports.default = function (command) {
    var type = command.type;
    switch (type) {
        case 'benchmark.report': return BenchmarkReportCommand_1.default;
        case 'log': return LogCommand_1.default;
        case 'state.action.complete': return StateActionCompleteCommand_1.default;
        case 'api.response': return ApiResponseCommand_1.default;
        case 'client.intro': return ClientIntroCommand_1.default;
        case 'state.values.response': return StateValuesResponseCommand_1.default;
        case 'state.keys.response': return StateKeysResponseCommand_1.default;
        case 'state.values.change': return StateValuesChangeCommand_1.default;
        case 'display': return DisplayCommand_1.default;
        case 'image': return ImageCommand_1.default;
        case 'saga.task.complete': return SagaTaskCompleteCommand_1.default;
        case 'asyncStorage.values.change': return AsyncStorageValuesCommand_1.default;
        default: {
            return null;
        }
    }
};

});
___scope___.file("renderer/Commands/LogCommand.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const mobx_react_1 = require("mobx-react");
const Command_1 = require("../Shared/Command");
const ramda_1 = require("ramda");
const ramdasauce_1 = require("ramdasauce");
const Colors_1 = require("../Theme/Colors");
const AppStyles_1 = require("../Theme/AppStyles");
const Content_1 = require("../Shared/Content");
const react_tooltip_1 = require("react-tooltip");
const fs_1 = require("fs");
const PREVIEW_LENGTH = 500;
const SOURCE_LINES_UP = 3;
const SOURCE_LINES_DOWN = 3;
const SOURCE_FILE_PATH_COUNT = 3;
const getName = level => {
    switch (level) {
        case 'debug': return 'DEBUG';
        case 'warn': return 'WARNING';
        case 'error': return 'ERROR';
        default: return 'LOG';
    }
};
const stackFrameBaseStyle = Object.assign({}, AppStyles_1.default.Layout.hbox, { padding: 6, wordBreak: 'break-all', cursor: 'pointer' });
const selectionStyle = {
    color: Colors_1.default.tag,
    backgroundColor: Colors_1.default.backgroundDarker,
    borderLeft: `1px solid ${Colors_1.default.tag}`,
    borderRight: `1px solid ${Colors_1.default.subtleLine}`,
    borderTop: `1px solid ${Colors_1.default.subtleLine}`,
    borderBottom: `1px solid ${Colors_1.default.subtleLine}`
};
const Styles = {
    container: {
        paddingTop: 4
    },
    stack: Object.assign({ marginTop: 10 }, AppStyles_1.default.Layout.vbox),
    stackTable: Object.assign({}, AppStyles_1.default.Layout.vbox),
    stackFrame: Object.assign({}, stackFrameBaseStyle, AppStyles_1.default.Layout.hbox, { padding: 6 }),
    stackFrameNodeModule: Object.assign({}, stackFrameBaseStyle, { opacity: 0.4 }),
    selectedStackFrame: Object.assign({}, selectionStyle),
    number: {
        color: Colors_1.default.constant,
        textAlign: 'right',
        width: 50,
        paddingRight: 10,
        paddingTop: 3
    },
    functionName: {
        flex: 1
    },
    fileName: {
        flex: 1,
        wordBreak: 'break-all'
    },
    lineNumber: {
        color: Colors_1.default.constant,
        wordBreak: 'break-all',
        width: 50,
        textAlign: 'right'
    },
    stackLabel: {
        color: Colors_1.default.foregroundDark,
        margin: '0 7px',
        wordBreak: 'break-all'
    },
    stackTitle: {
        color: Colors_1.default.constant,
        paddingBottom: 10,
        wordBreak: 'break-all'
    },
    theadRow: Object.assign({}, AppStyles_1.default.Layout.hbox, { padding: 6, color: Colors_1.default.foregroundDark }),
    headerFrame: {
        textAlign: 'right',
        width: 60,
        paddingRight: 5
    },
    headerFunction: {
        textAlign: 'left',
        flex: 1
    },
    headerFile: {
        flex: 1,
        textAlign: 'left'
    },
    headerLineNumber: {
        textAlign: 'right',
        width: 60
    },
    errorMessage: Object.assign({ wordBreak: 'break-all', marginBottom: 30, color: Colors_1.default.tag, paddingLeft: 10, paddingTop: 20, paddingBottom: 20, WebkitUserSelect: 'text', cursor: 'text' }, selectionStyle),
    sourceFilename: {
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 5,
        color: Colors_1.default.tag,
        borderBottom: `1px solid ${Colors_1.default.line}`
    },
    sourceCode: Object.assign({}, AppStyles_1.default.Layout.vbox, { paddingBottom: 10 }),
    sourceLine: Object.assign({}, AppStyles_1.default.Layout.hbox, { paddingTop: 6, paddingBottom: 6, cursor: 'pointer', color: Colors_1.default.foregroundDark }),
    sourceLineHighlight: Object.assign({ opacity: 1 }, selectionStyle),
    sourceLineNumber: {
        width: 60,
        paddingRight: 15,
        color: Colors_1.default.constant,
        textAlign: 'right'
    },
    sourceLineCode: {
        flex: 1,
        whiteSpace: 'pre-wrap'
    }
};
let LogCommand = class LogCommand extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            lines: null,
            lineNumber: null
        };
        this.loadingSource = false;
        this.renderStackFrame = this.renderStackFrame.bind(this);
        this.fetchLines = this.fetchLines.bind(this);
        this.renderSource = this.renderSource.bind(this);
        this.fetchLines();
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.command.id !== nextProps.command.id ||
            this.state.lines !== nextState.lines;
    }
    fetchLines() {
        // prevent-reentry
        if (this.loadingSource)
            return;
        if (!this.state)
            return;
        this.loadingSource = true;
        // fetch the top stack frame
        const frame = ramdasauce_1.dotPath('props.command.payload.stack.0', this);
        // jet if we don't have it'
        if (ramdasauce_1.isNilOrEmpty(frame))
            return;
        const { fileName, lineNumber } = frame;
        if (ramdasauce_1.isNilOrEmpty(fileName))
            return;
        const partialFileName = ramda_1.join('/', ramda_1.takeLast(SOURCE_FILE_PATH_COUNT, ramda_1.split('/', fileName)));
        // kick-off a file read async
        fs_1.default.readFile(fileName, 'utf-8', (err, data) => {
            // die quietly for we have failed
            if (err) {
                return;
            }
            if (data && ramda_1.is(String, data)) {
                try {
                    let lines;
                    let lineCounter = 0;
                    const lineBreak = /\n/g;
                    const contents = ramda_1.split(lineBreak, data);
                    // create a new structure of lines
                    const sourceLines = ramda_1.map(line => {
                        lineCounter = lineCounter + 1;
                        // i am sorry my tab-based brethern.
                        const source = ramda_1.replace(/\t/, '  ', line);
                        return {
                            isSelected: lineCounter === lineNumber,
                            lineNumber: lineCounter,
                            source
                        };
                    }, contents);
                    // should just load it all?
                    const showWholeFile = contents.length < SOURCE_LINES_UP + SOURCE_LINES_DOWN;
                    if (showWholeFile) {
                        lines = sourceLines;
                    }
                    else {
                        const lo = ramda_1.max(0, lineNumber - SOURCE_LINES_UP - 1);
                        const hi = ramda_1.min(contents.length - 1, lineNumber + SOURCE_LINES_UP);
                        lines = ramda_1.slice(lo, hi, sourceLines);
                    }
                    // kick it back to React
                    this.setState({ lines, lineNumber, fileName, partialFileName });
                }
                catch (e) {
                }
            }
        });
    }
    renderSource() {
        const { lines, fileName, partialFileName } = this.state;
        if (ramdasauce_1.isNilOrEmpty(lines))
            return null;
        const { ui } = this.props.session;
        // render a line of code
        const renderLine = line => {
            const { lineNumber, source, isSelected } = line;
            const key = `line-${lineNumber}`;
            const style = isSelected ? ramda_1.merge(Styles.sourceLine, Styles.sourceLineHighlight) : Styles.sourceLine;
            const onClickStackFrame = e => ui.openInEditor(fileName, lineNumber);
            return (react_1.default.createElement("div", { style: style, key: key, onClick: onClickStackFrame },
                react_1.default.createElement("div", { style: Styles.sourceLineNumber }, lineNumber),
                react_1.default.createElement("div", { style: Styles.sourceLineCode }, source)));
        };
        return (react_1.default.createElement("div", { style: Styles.sourceCode },
            react_1.default.createElement("div", { style: Styles.sourceFilename }, partialFileName),
            ramda_1.map(renderLine, lines)));
    }
    renderStackFrame(stackFrame, number) {
        const { session } = this.props;
        const { ui } = session;
        const key = `stack-${number}`;
        let { fileName, functionName, lineNumber } = stackFrame;
        const justTheFile = ramda_1.last(ramda_1.split('/', fileName));
        fileName = fileName && ramda_1.replace('webpack://', '', fileName);
        functionName = functionName && ramda_1.replace('webpack://', '', functionName);
        const isNodeModule = fileName.indexOf('/node_modules/') >= 0;
        const onClickStackFrame = e => ui.openInEditor(fileName, lineNumber);
        const isSelected = number === 1;
        let style = isNodeModule ? Styles.stackFrameNodeModule : Styles.stackFrame;
        if (isSelected) {
            style = ramda_1.merge(style, Styles.selectedStackFrame);
        }
        const tooltip = fileName;
        return (react_1.default.createElement("div", { key: key, style: style, onClick: onClickStackFrame },
            react_1.default.createElement("div", { style: Styles.functionName }, functionName || '(anonymous function)'),
            react_1.default.createElement("div", { style: Styles.fileName, "data-tip": tooltip },
                justTheFile,
                react_1.default.createElement(react_tooltip_1.default, { place: 'bottom', class: 'tooltipThemeReducedWidth' })),
            react_1.default.createElement("div", { style: Styles.lineNumber }, lineNumber)));
    }
    renderStack(stack) {
        this.fetchLines();
        let i = 0;
        return (react_1.default.createElement("div", { style: Styles.stack },
            react_1.default.createElement("div", { style: Styles.sourceFilename }, "Stack Trace"),
            react_1.default.createElement("div", { style: Styles.stackTable },
                react_1.default.createElement("div", { style: Styles.theadRow },
                    react_1.default.createElement("div", { style: Styles.headerFunction }, "Function"),
                    react_1.default.createElement("div", { style: Styles.headerFile }, "File"),
                    react_1.default.createElement("div", { style: Styles.headerLineNumber }, "line")),
                ramda_1.map(stackFrame => {
                    i++;
                    return this.renderStackFrame(stackFrame, i);
                }, stack))));
    }
    getPreview(message) {
        if (typeof message === 'string') {
            return `${ramda_1.take(PREVIEW_LENGTH, message)}`;
        }
        return null;
    }
    render() {
        const { command } = this.props;
        const { payload } = command;
        const { level } = payload;
        const { message, stack } = payload;
        const title = getName(level);
        const containerTypes = ramda_1.merge(Styles.container, { color: level === 'debug' ? Colors_1.default.foreground : Colors_1.default.foreground });
        const hasLines = !!this.state.lines;
        let preview = this.getPreview(message);
        return (react_1.default.createElement(Command_1.default, { command: command, title: title, preview: preview },
            react_1.default.createElement("div", { style: containerTypes },
                !stack && react_1.default.createElement(Content_1.default, { value: message }),
                stack && react_1.default.createElement("div", { style: Styles.errorMessage }, message),
                stack && hasLines && this.renderSource(),
                stack && this.renderStack(stack))));
    }
};
LogCommand.propTypes = {
    command: react_1.PropTypes.object.isRequired
};
LogCommand = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], LogCommand);
exports.default = LogCommand;
//# sourceMappingURL=LogCommand.js.map
});
___scope___.file("renderer/Shared/Command.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const AppStyles_1 = require("../Theme/AppStyles");
const Timestamp_1 = require("../Shared/Timestamp");
const mobx_react_1 = require("mobx-react");
const ramda_1 = require("ramda");
const CommandToolbar_1 = require("./CommandToolbar");
const label_1 = require("react-icons/lib/md/label");
const IconOpen = require('react-icons/lib/md/expand-more');
const IconClosed = require('react-icons/lib/md/chevron-right');
const Styles = {
    container: Object.assign({}, AppStyles_1.default.Layout.hbox, { marginTop: 0, alignItems: 'flex-start', borderBottom: `1px solid ${Colors_1.default.line}` }),
    containerOpen: {
        backgroundColor: Colors_1.default.backgroundSubtleLight
    },
    icon: {
        color: Colors_1.default.backgroundHighlight
    },
    body: Object.assign({}, AppStyles_1.default.Layout.vbox, { marginLeft: 0 }),
    topRow: Object.assign({}, AppStyles_1.default.Layout.hbox, { justifyContent: 'space-between', alignItems: 'flex-start', padding: '15px 20px', cursor: 'pointer' }),
    title: {
        textAlign: 'left',
        width: 168
    },
    titleText: {
        color: Colors_1.default.tag
    },
    titleTextInverse: {
        backgroundColor: Colors_1.default.tag,
        color: Colors_1.default.tagComplement,
        borderRadius: 4,
        padding: '4px 8px'
    },
    displayIcon: {
        marginRight: 4,
        marginBottom: 4
    },
    displayIconSize: 16,
    preview: {
        color: Colors_1.default.highlight,
        textAlign: 'left',
        paddingRight: 16,
        overflow: 'hidden',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        flex: 1,
        wordBreak: 'break-all'
    },
    duration: {
        color: Colors_1.default.foregroundDark,
        paddingRight: 10
    },
    timestamp: {
        color: Colors_1.default.foregroundDark,
        paddingRight: 10
    },
    spacer: {
        flex: 1
    },
    children: {
        overflow: 'hidden',
        animation: 'fade-up 0.25s',
        willChange: 'transform opacity',
        padding: '0 40px 30px 40px'
    }
};
let Command = class Command extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.state = {
            isOpen: props.startsOpen || false
        };
        this.handleToggleOpen = this.handleToggleOpen.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !(ramda_1.equals(nextProps, this.props) && ramda_1.equals(this.state, nextState));
    }
    handleToggleOpen() {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        const { isOpen } = this.state;
        const { command, children, title, preview } = this.props;
        const { important, type } = command;
        const isDisplay = type === 'display';
        const { date } = command;
        const titleTextStyle = ramda_1.merge(Styles.titleText, important ? Styles.titleTextInverse : {});
        const topRowStyle = Styles.topRow;
        const timestampStyle = Styles.timestamp;
        const Icon = isOpen ? IconOpen : IconClosed;
        const containerStyles = ramda_1.merge(Styles.container, isOpen && Styles.containerOpen);
        return (react_1.default.createElement("div", { style: containerStyles },
            react_1.default.createElement("div", { style: Styles.body },
                react_1.default.createElement("div", { style: topRowStyle, onClick: this.handleToggleOpen },
                    react_1.default.createElement(Timestamp_1.default, { date: date, style: timestampStyle }),
                    react_1.default.createElement("div", { style: Styles.title },
                        react_1.default.createElement("span", { style: titleTextStyle },
                            isDisplay && react_1.default.createElement(label_1.default, { size: Styles.displayIconSize, style: Styles.displayIcon }),
                            title)),
                    !isOpen && react_1.default.createElement("span", { style: Styles.preview }, preview),
                    isOpen && react_1.default.createElement(CommandToolbar_1.default, { command: command }),
                    isOpen && react_1.default.createElement("span", { style: Styles.spacer }),
                    react_1.default.createElement(Icon, { size: 20, style: Styles.icon })),
                isOpen &&
                    react_1.default.createElement("div", { style: Styles.children }, children))));
    }
};
Command.propTypes = {
    command: react_1.PropTypes.object.isRequired,
    title: react_1.PropTypes.string.isRequired,
    preview: react_1.PropTypes.string,
    subtitle: react_1.PropTypes.string,
    duration: react_1.PropTypes.number
};
Command = __decorate([
    mobx_react_1.observer
], Command);
exports.default = Command;
//# sourceMappingURL=Command.js.map
});
___scope___.file("renderer/Shared/Timestamp.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const moment_1 = require("moment");
const Colors_1 = require("../Theme/Colors");
const Styles = {
    container: {
        margin: 0,
        padding: 0
    },
    left: {
        color: Colors_1.default.foregroundDark
    },
    right: {
        color: Colors_1.default.foreground
    }
};
class Timestamp extends react_1.Component {
    render() {
        const date = moment_1.default(this.props.date);
        const left = date.format('h:mm');
        // const right = date.format('ss.SS')
        const right = date.format(':ss');
        const containerStyles = Object.assign({}, Styles.container, this.props.style);
        return (react_1.default.createElement("span", { style: containerStyles },
            react_1.default.createElement("span", { style: Styles.left }, left),
            react_1.default.createElement("span", { style: Styles.right }, right)));
    }
}
Timestamp.propTypes = {
    date: react_1.PropTypes.object.isRequired,
    style: react_1.PropTypes.object
};
exports.default = Timestamp;
//# sourceMappingURL=Timestamp.js.map
});
___scope___.file("renderer/Shared/CommandToolbar.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const mobx_react_1 = require("mobx-react");
const CommandToolbarButton_1 = require("./CommandToolbarButton");
const AppStyles_1 = require("../Theme/AppStyles");
const stringify_object_1 = require("stringify-object");
const electron_1 = require("electron");
const ramdasauce_1 = require("ramdasauce");
const Styles = {
    container: Object.assign({}, AppStyles_1.default.Layout.hbox, { marginLeft: -6 })
};
// the tips
const TIP_SAGA_VIEW_DETAILS = 'Toggle saga details';
const TIP_REPLAY_ACTION = 'Repeat this action.';
const TIP_CUSTOMIZE_REPLAY_ACTION = 'Edit and dispatch this action.';
const ToggleSagaViewDetailButton = props => react_1.default.createElement(CommandToolbarButton_1.default, { icon: 'list', onClick: props.onClick, tip: TIP_SAGA_VIEW_DETAILS });
const ReplayButton = props => react_1.default.createElement(CommandToolbarButton_1.default, { icon: 'repeat', onClick: props.onClick, tip: TIP_REPLAY_ACTION });
const CustomizeReplayButton = props => react_1.default.createElement(CommandToolbarButton_1.default, { icon: 'code', onClick: props.onClick, tip: TIP_CUSTOMIZE_REPLAY_ACTION });
const CopyApiResponseButton = props => react_1.default.createElement(CommandToolbarButton_1.default, { icon: 'call-received', onClick: props.onClick, tip: 'Copy JSON response to clipboard' });
const CopyApiRequestButton = props => react_1.default.createElement(CommandToolbarButton_1.default, { icon: 'call-made', onClick: props.onClick, tip: 'Copy JSON request to clipboard' });
const CopyLogButton = props => react_1.default.createElement(CommandToolbarButton_1.default, { icon: 'content-copy', onClick: props.onClick, tip: 'Copy text to clipboard' });
const CopyDisplayButton = props => react_1.default.createElement(CommandToolbarButton_1.default, { icon: 'content-copy', onClick: props.onClick, tip: 'Copy text to clipboard' });
let CommandToolbar = class CommandToolbar extends react_1.Component {
    constructor() {
        super(...arguments);
        // fires when it is time to replay an action
        this.handleReplayAction = event => {
            const { command, session } = this.props;
            const { ui } = session;
            ui.dispatchAction(command.payload.action);
            event.stopPropagation();
        };
        // customize this action before replaying
        this.handleCustomizeReplayAction = event => {
            const { command, session } = this.props;
            const { ui } = session;
            const { payload } = command;
            const { action } = payload;
            const newAction = stringify_object_1.default(action, {
                indent: '  ',
                singleQuotes: true
            });
            ui.setActionToDispatch(newAction);
            event.stopPropagation();
        };
        // copy the log to the clipboard
        this.handleCopyLogToClipboard = event => {
            event.stopPropagation();
            try {
                const payload = ramdasauce_1.dotPath('props.command.payload', this) || {};
                const { level, stack, message } = payload;
                if (!message)
                    return;
                if (level === 'error' && stack) {
                    electron_1.clipboard.writeText(JSON.stringify({ message, stack }, 2, 2));
                }
                else if (typeof message === 'string') {
                    electron_1.clipboard.writeText(message);
                }
                else if (typeof message === 'object') {
                    const text = JSON.stringify(message, 2, 2);
                    electron_1.clipboard.writeText(text);
                }
            }
            catch (e) {
            }
        };
        // copy the display to the clipboard
        this.handleCopyDisplayToClipboard = event => {
            event.stopPropagation();
            try {
                const message = ramdasauce_1.dotPath('props.command.payload.value', this);
                if (!message)
                    return;
                if (typeof message === 'string') {
                    electron_1.clipboard.writeText(message);
                }
                else if (typeof message === 'object') {
                    const text = JSON.stringify(message, 2, 2);
                    electron_1.clipboard.writeText(text);
                }
            }
            catch (e) {
            }
        };
        // copy api response to clipboard
        this.handleCopyApiResponseToClipboard = event => {
            event.stopPropagation();
            try {
                const { command } = this.props;
                const { payload } = command;
                const body = ramdasauce_1.dotPath('response.body', payload);
                const text = JSON.stringify(body, 2, 2);
                electron_1.clipboard.writeText(text);
            }
            catch (e) {
            }
        };
        // copy api request to clipboard
        this.handleCopyApiRequestToClipboard = event => {
            event.stopPropagation();
            const { command } = this.props;
            const { payload } = command;
            const body = ramdasauce_1.dotPath('request.data', payload);
            try {
                const text = JSON.stringify(JSON.parse(body), 2, 2);
                electron_1.clipboard.writeText(text);
            }
            catch (e) {
                electron_1.clipboard.writeText(body);
            }
        };
        this.handleToggleViewSagaDetails = event => {
            event.stopPropagation();
            const { command, session } = this.props;
            const { ui } = session;
            const { messageId } = command;
            const key = 'details';
            const currentValue = ui.getCommandProperty(messageId, key);
            ui.setCommandProperty(messageId, key, !currentValue);
        };
    }
    render() {
        const { command } = this.props;
        const { payload } = command;
        const requestBody = ramdasauce_1.dotPath('request.data', payload);
        const showReplayAction = command.type === 'state.action.complete';
        const showCustomizeReplayAction = command.type === 'state.action.complete';
        const showCopyApiResponse = command.type === 'api.response';
        const showCopyApiRequest = command.type === 'api.response' && !ramdasauce_1.isNilOrEmpty(requestBody);
        const showToggleViewSagaDetails = command.type === 'saga.task.complete';
        const showCopyLog = command.type === 'log';
        const showCopyDisplay = command.type === 'display';
        return (react_1.default.createElement("div", { style: Styles.container },
            showReplayAction &&
                react_1.default.createElement(ReplayButton, { onClick: this.handleReplayAction }),
            showCustomizeReplayAction &&
                react_1.default.createElement(CustomizeReplayButton, { onClick: this.handleCustomizeReplayAction }),
            showCopyApiResponse &&
                react_1.default.createElement(CopyApiResponseButton, { onClick: this.handleCopyApiResponseToClipboard }),
            showCopyApiRequest &&
                react_1.default.createElement(CopyApiRequestButton, { onClick: this.handleCopyApiRequestToClipboard }),
            showToggleViewSagaDetails &&
                react_1.default.createElement(ToggleSagaViewDetailButton, { onClick: this.handleToggleViewSagaDetails }),
            showCopyLog &&
                react_1.default.createElement(CopyLogButton, { onClick: this.handleCopyLogToClipboard }),
            showCopyDisplay &&
                react_1.default.createElement(CopyDisplayButton, { onClick: this.handleCopyDisplayToClipboard })));
    }
};
CommandToolbar.propTypes = {
    command: react_1.PropTypes.object.isRequired
};
CommandToolbar = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], CommandToolbar);
exports.default = CommandToolbar;
//# sourceMappingURL=CommandToolbar.js.map
});
___scope___.file("renderer/Shared/CommandToolbarButton.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const react_tooltip_1 = require("react-tooltip");
const Styles = {
    container: {
        color: Colors_1.default.highlight,
        marginTop: -2,
        marginRight: 8
    },
    iconSize: 24,
    icon: {}
};
class CommandToolbarButton extends react_1.Component {
    render() {
        const { tip, icon, onClick } = this.props;
        const Icon = require(`react-icons/lib/md/${icon}`);
        return (react_1.default.createElement("div", { "data-tip": tip, onClick: onClick, style: Styles.container },
            react_1.default.createElement(Icon, { size: Styles.iconSize, style: Styles.icon }),
            react_1.default.createElement(react_tooltip_1.default, { place: 'bottom', className: 'tooltipTheme' })));
    }
}
CommandToolbarButton.propTypes = {
    tip: react_1.PropTypes.string,
    icon: react_1.PropTypes.string.isRequired,
    onClick: react_1.PropTypes.func.isRequired
};
exports.default = CommandToolbarButton;
//# sourceMappingURL=CommandToolbarButton.js.map
});
___scope___.file("renderer/Shared/Content.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ramda_1 = require("ramda");
const ObjectTree_1 = require("./ObjectTree");
const IsShallow_1 = require("../Lib/IsShallow");
const MakeTable_1 = require("./MakeTable");
const Colors_1 = require("../Theme/Colors");
const OMG_NULL = react_1.default.createElement("div", { style: { color: Colors_1.default.tag } }, "null");
const OMG_UNDEFINED = react_1.default.createElement("div", { style: { color: Colors_1.default.tag } }, "undefined");
class Content extends react_1.Component {
    constructor(props) {
        super(props);
        this.spanCount = 0;
        this.breakIntoSpans = this.breakIntoSpans.bind(this);
    }
    breakIntoSpans(part) {
        this.spanCount++;
        return (react_1.default.createElement("span", { key: `span-${this.spanCount}` },
            part,
            react_1.default.createElement("br", null)));
    }
    renderString() {
        const { value } = this.props;
        return (react_1.default.createElement("div", { style: { WebkitUserSelect: 'text', cursor: 'text' } }, ramda_1.map(this.breakIntoSpans, ramda_1.split('\n', ramda_1.trim(value)))));
    }
    // render as object with shallow objects rendered as tables
    renderObject() {
        const { treeLevel = 0, value } = this.props;
        return IsShallow_1.default(value) ? MakeTable_1.default(value) : react_1.default.createElement(ObjectTree_1.default, { object: value, level: treeLevel });
    }
    // arrays just render as objects at this point
    renderArray() {
        this.renderObject();
    }
    renderMysteryMeat() {
        const { value } = this.props;
        return (react_1.default.createElement("div", { style: { WebkitUserSelect: 'text', cursor: 'text' } }, String(value)));
    }
    render() {
        const { value } = this.props;
        if (value === null)
            return OMG_NULL;
        if (value === undefined)
            return OMG_UNDEFINED;
        const valueType = typeof value;
        switch (valueType) {
            case 'string': return this.renderString();
            case 'object': return this.renderObject();
            case 'array': return this.renderArray();
            default: return this.renderMysteryMeat();
        }
    }
}
Content.propTypes = {
    value: react_1.PropTypes.oneOfType([react_1.PropTypes.object, react_1.PropTypes.array, react_1.PropTypes.string, react_1.PropTypes.number, react_1.PropTypes.bool]),
    treeLevel: react_1.PropTypes.number
};
exports.default = Content;
//# sourceMappingURL=Content.js.map
});
___scope___.file("renderer/Shared/ObjectTree.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_json_tree_1 = require("react-json-tree");
const Colors_1 = require("../Theme/Colors");
const theme = Object.assign({}, Colors_1.default.theme, { base0B: Colors_1.default.foreground });
const Styles = {
    container: {},
    theme: Object.assign({ tree: { backgroundColor: 'transparent', marginTop: -3 } }, theme),
    muted: {
        color: Colors_1.default.highlight
    }
};
class ObjectTree extends react_1.Component {
    render() {
        const { object, level = 1 } = this.props;
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement(react_json_tree_1.default, { data: object, hideRoot: true, shouldExpandNode: (keyName, data, minLevel) => minLevel <= level, theme: Styles.theme, invertTheme: Colors_1.default.invertTheme, getItemString: (type, data, itemType, itemString) => {
                    if (type === 'Object')
                        return react_1.default.createElement("span", { style: Styles.muted }, itemType);
                    return react_1.default.createElement("span", { style: Styles.muted },
                        itemType,
                        " ",
                        itemString);
                }, valueRenderer: (transformed, untransformed) => {
                    return `${untransformed || transformed}`;
                } })));
    }
}
ObjectTree.propTypes = {
    object: react_1.PropTypes.oneOfType([react_1.PropTypes.object, react_1.PropTypes.array]),
    level: react_1.PropTypes.number
};
exports.default = ObjectTree;
//# sourceMappingURL=ObjectTree.js.map
});
___scope___.file("renderer/Lib/IsShallow.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = require("ramda");
// inspects an object's values to see if they go deeper than 1 level.
exports.default = ramda_1.pipe(ramda_1.values, ramda_1.without([null, undefined]), ramda_1.map(function (x) { return typeof x; }), ramda_1.reject(ramda_1.contains(ramda_1.__, ['number', 'string', 'boolean'])), ramda_1.length, ramda_1.equals(0));

});
___scope___.file("renderer/Shared/MakeTable.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Colors_1 = require("../Theme/Colors");
var ramda_1 = require("ramda");
var NULL_TEXT = 'null';
var UNDEFINED_TEXT = 'undefined';
var TRUE_TEXT = 'true';
var FALSE_TEXT = 'false';
var Styles = {
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        WebkitUserSelect: 'all',
        padding: '2px 0'
    },
    key: {
        width: 210,
        paddingRight: 10,
        wordBreak: 'break-all',
        textAlign: 'left',
        color: Colors_1.default.foregroundDark,
        WebkitUserSelect: 'text',
        cursor: 'text'
    },
    value: {
        flex: 1,
        wordBreak: 'break-all'
    }
};
function textForValue(value) {
    return ramda_1.cond([
        [ramda_1.equals(null), ramda_1.always(NULL_TEXT)],
        [ramda_1.equals(undefined), ramda_1.always(UNDEFINED_TEXT)],
        [function (x) { return typeof x === 'boolean'; }, ramda_1.always(value ? TRUE_TEXT : FALSE_TEXT)],
        [ramda_1.T, ramda_1.identity]
    ])(value);
}
exports.textForValue = textForValue;
function colorForValue(value) {
    if (ramda_1.isNil(value))
        return Colors_1.default.tag;
    var valueType = typeof value;
    switch (valueType) {
        case 'boolean': return Colors_1.default.constant;
        case 'string': return Colors_1.default.foreground;
        case 'number': return Colors_1.default.constant;
        default: return Colors_1.default.foreground;
    }
}
exports.colorForValue = colorForValue;
var makeRow = function (_a) {
    var key = _a[0], value = _a[1];
    var textValue = textForValue(value);
    var valueStyle = ramda_1.merge(Styles.value, {
        color: colorForValue(value),
        WebkitUserSelect: 'text',
        cursor: 'text'
    });
    return key = { key: key };
    style = { Styles: .row } >
        style;
    {
        Styles.key;
    }
     > { key: key } < /div>
        < div;
    style = { valueStyle: valueStyle } >
        { textValue: textValue }
        < /div>
        < /div>;
};
exports.default = function (headers) { return ({}
    < /div>); };

});
___scope___.file("renderer/Commands/StateActionCompleteCommand.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Command_1 = require("../Shared/Command");
const Colors_1 = require("../Theme/Colors");
const Content_1 = require("../Shared/Content");
const COMMAND_TITLE = 'ACTION';
const Styles = {
    name: {
        color: Colors_1.default.bold,
        margin: 0,
        paddingBottom: 10
    }
};
class StateActionComplete extends react_1.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.command.id !== nextProps.command.id;
    }
    render() {
        const { command } = this.props;
        const { payload } = command;
        const { ms, action, name } = payload;
        const preview = `${name}`;
        return (react_1.default.createElement(Command_1.default, { command: command, title: COMMAND_TITLE, duration: ms, preview: preview },
            react_1.default.createElement("div", { style: Styles.container },
                react_1.default.createElement("div", { style: Styles.name }, name),
                react_1.default.createElement(Content_1.default, { value: action }))));
    }
}
StateActionComplete.propTypes = {
    command: react_1.PropTypes.object.isRequired
};
exports.default = StateActionComplete;
//# sourceMappingURL=StateActionCompleteCommand.js.map
});
___scope___.file("renderer/Commands/ApiResponseCommand.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Command_1 = require("../Shared/Command");
const ramdasauce_1 = require("ramdasauce");
const ramda_1 = require("ramda");
const MakeTable_1 = require("../Shared/MakeTable");
const Colors_1 = require("../Theme/Colors");
const AppStyles_1 = require("../Theme/AppStyles");
const SectionLink_1 = require("./SectionLink");
const Content_1 = require("../Shared/Content");
// Given a request body (string), attempts to coerce it to a JSON string.
// and if successful, returns that JSON object instead.  A friendlier way
// to display the request.
const getRequestText = request => {
    // nulls be nulls
    if (ramda_1.isNil(request))
        return null;
    try {
        // attemp? to parse as json
        const toJson = JSON.parse(request);
        // is it empty?
        if (ramdasauce_1.isNilOrEmpty(toJson)) {
            return request;
        }
        else {
            // embed a "root" level node
            return { ' ': toJson };
        }
    }
    catch (e) {
        // any problems, return the original string
        return request;
    }
};
const COMMAND_TITLE = 'API RESPONSE';
const REQUEST_HEADER_TITLE = 'Request Headers';
const RESPONSE_HEADER_TITLE = 'Response Headers';
const REQUEST_BODY_TITLE = 'Request';
const RESPONSE_BODY_TITLE = 'Response';
const REQUEST_PARAMS_TITLE = 'Request Params';
const NO_REQUEST_BODY = 'Nothing sent.';
const NO_REQUEST_PARAMS = 'No params sent.';
const Styles = {
    container: {},
    method: {},
    status: {},
    duration: {},
    url: {
        wordBreak: 'break-all',
        color: Colors_1.default.constant,
        paddingBottom: 10,
        WebkitUserSelect: 'text',
        cursor: 'text'
    },
    headerTitle: {
        margin: 0,
        padding: 0,
        paddingTop: 8,
        paddingBottom: 0,
        color: Colors_1.default.constant
    },
    sectionLinks: Object.assign({}, AppStyles_1.default.Layout.hbox, { paddingTop: 10, paddingBottom: 10 }),
    spacer: {
        flex: 1
    }
};
const INITIAL_STATE = {
    showRequestHeaders: false,
    showResponseHeaders: false,
    showRequestBody: false,
    showResponseBody: false,
    showRequestParams: false
};
class ApiResponseCommand extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
        this.toggleRequestHeaders = this.toggleRequestHeaders.bind(this);
        this.toggleResponseHeaders = this.toggleResponseHeaders.bind(this);
        this.toggleRequestBody = this.toggleRequestBody.bind(this);
        this.toggleResponseBody = this.toggleResponseBody.bind(this);
        this.toggleRequestParams = this.toggleRequestParams.bind(this);
    }
    toggleRequestHeaders() {
        this.setState(Object.assign({}, INITIAL_STATE, { showRequestHeaders: !this.state.showRequestHeaders }));
    }
    toggleResponseHeaders() {
        this.setState(Object.assign({}, INITIAL_STATE, { showResponseHeaders: !this.state.showResponseHeaders }));
    }
    toggleRequestBody() {
        this.setState(Object.assign({}, INITIAL_STATE, { showRequestBody: !this.state.showRequestBody }));
    }
    toggleResponseBody() {
        this.setState(Object.assign({}, INITIAL_STATE, { showResponseBody: !this.state.showResponseBody }));
    }
    toggleRequestParams() {
        this.setState(Object.assign({}, INITIAL_STATE, { showRequestParams: !this.state.showRequestParams }));
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !(ramda_1.equals(nextProps, this.props) && ramda_1.equals(this.state, nextState));
    }
    render() {
        const { command } = this.props;
        const { showRequestHeaders, showResponseHeaders, showRequestBody, showResponseBody, showRequestParams } = this.state;
        const { payload } = command;
        const { duration } = payload;
        const status = ramdasauce_1.dotPath('response.status', payload);
        const url = ramdasauce_1.dotPath('request.url', payload);
        const smallUrl = ramda_1.pipe(ramda_1.replace(/^http(s):\/\/[a-zA-Z0-9.]*/i, ''), ramda_1.replace(/\?.*$/i, ''))(url);
        const method = ramda_1.toUpper(ramdasauce_1.dotPath('request.method', payload) || '');
        const requestHeaders = ramdasauce_1.dotPath('request.headers', payload);
        const responseHeaders = ramdasauce_1.dotPath('response.headers', payload);
        const requestBody = getRequestText(ramdasauce_1.dotPath('request.data', payload));
        const responseBody = ramdasauce_1.dotPath('response.body', payload);
        const requestParams = ramdasauce_1.dotPath('request.params', payload);
        const subtitle = `${method} ${smallUrl}`;
        const preview = subtitle;
        const summary = { 'Status Code': status, 'Method': method, 'Duration (ms)': duration };
        return (react_1.default.createElement(Command_1.default, { command: command, title: COMMAND_TITLE, duration: duration, preview: preview },
            react_1.default.createElement("div", { style: Styles.container },
                react_1.default.createElement("div", { style: Styles.url }, url),
                MakeTable_1.default(summary),
                react_1.default.createElement("div", { style: Styles.sectionLinks },
                    react_1.default.createElement(SectionLink_1.default, { text: RESPONSE_BODY_TITLE, isActive: showResponseBody, onClick: this.toggleResponseBody }),
                    react_1.default.createElement(SectionLink_1.default, { text: RESPONSE_HEADER_TITLE, isActive: showResponseHeaders, onClick: this.toggleResponseHeaders }),
                    !ramdasauce_1.isNilOrEmpty(requestBody) && react_1.default.createElement(SectionLink_1.default, { text: REQUEST_BODY_TITLE, isActive: showRequestBody, onClick: this.toggleRequestBody }),
                    !ramdasauce_1.isNilOrEmpty(requestParams) && react_1.default.createElement(SectionLink_1.default, { text: REQUEST_PARAMS_TITLE, isActive: showRequestParams, onClick: this.toggleRequestParams }),
                    react_1.default.createElement(SectionLink_1.default, { text: REQUEST_HEADER_TITLE, isActive: showRequestHeaders, onClick: this.toggleRequestHeaders })),
                react_1.default.createElement("div", { style: Styles.content },
                    showResponseBody && react_1.default.createElement(Content_1.default, { value: responseBody }),
                    showResponseHeaders && MakeTable_1.default(responseHeaders),
                    showRequestBody && (ramdasauce_1.isNilOrEmpty(requestBody) ? NO_REQUEST_BODY : react_1.default.createElement(Content_1.default, { value: requestBody, treeLevel: 1 })),
                    showRequestParams && (ramdasauce_1.isNilOrEmpty(requestParams) ? NO_REQUEST_PARAMS : react_1.default.createElement(Content_1.default, { value: requestParams })),
                    showRequestHeaders && MakeTable_1.default(requestHeaders)))));
    }
}
ApiResponseCommand.propTypes = {
    command: react_1.PropTypes.oneOfType([react_1.PropTypes.object, react_1.PropTypes.array]).isRequired
};
exports.default = ApiResponseCommand;
//# sourceMappingURL=ApiResponseCommand.js.map
});
___scope___.file("renderer/Commands/SectionLink.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const ramda_1 = require("ramda");
const Styles = {
    container: {
        backgroundColor: Colors_1.default.backgroundLighter,
        padding: '4px 8px',
        margin: 4,
        borderRadius: 4,
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerActive: {
        backgroundColor: Colors_1.default.constant
    },
    text: {
        color: Colors_1.default.foreground,
        textAlign: 'center'
    },
    textActive: {
        color: Colors_1.default.background
    }
};
class SectionLink extends react_1.Component {
    render() {
        const { isActive = false, text, onClick } = this.props;
        const containerStyles = ramda_1.merge(Styles.container, isActive ? Styles.containerActive : {});
        const textStyles = ramda_1.merge(Styles.text, isActive ? Styles.textActive : {});
        return (react_1.default.createElement("div", { style: containerStyles, onClick: onClick },
            react_1.default.createElement("div", { style: textStyles }, text)));
    }
}
SectionLink.propTypes = {
    isActive: react_1.PropTypes.bool.isRequired,
    text: react_1.PropTypes.string.isRequired,
    onClick: react_1.PropTypes.func.isRequired
};
exports.default = SectionLink;
//# sourceMappingURL=SectionLink.js.map
});
___scope___.file("renderer/Commands/ClientIntroCommand.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Command_1 = require("../Shared/Command");
const MakeTable_1 = require("../Shared/MakeTable");
const COMMAND_TITLE = 'CONNECTION';
class ClientIntroCommand extends react_1.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.command.id !== nextProps.command.id;
    }
    render() {
        const { command } = this.props;
        const { payload } = command;
        const preview = payload.name;
        return (react_1.default.createElement(Command_1.default, { command: command, title: COMMAND_TITLE, preview: preview }, MakeTable_1.default(payload)));
    }
}
ClientIntroCommand.propTypes = {
    command: react_1.PropTypes.object.isRequired
};
exports.default = ClientIntroCommand;
//# sourceMappingURL=ClientIntroCommand.js.map
});
___scope___.file("renderer/Commands/BenchmarkReportCommand.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Command_1 = require("../Shared/Command");
const Colors_1 = require("../Theme/Colors");
const ramda_1 = require("ramda");
const ramdasauce_1 = require("ramdasauce");
const AppStyles_1 = require("../Theme/AppStyles");
const react_tooltip_1 = require("react-tooltip");
const COMMAND_TITLE = 'BENCHMARK';
const LAST_STEP_DEFAULT = 'Last';
const MS_LABEL = 'ms';
const mapIndexed = ramda_1.addIndex(ramda_1.map);
const graphUsed = Colors_1.default.backgroundLighter;
const graphEmpty = Colors_1.default.background;
function percentStyle(start, length, total) {
    const p1 = Number((start / total * 100).toFixed(0));
    const p2 = Number((length / total * 100).toFixed(0)) + p1;
    const p3 = 100 - p2 - p1;
    const stop1 = `${graphEmpty} 0%`;
    const stop2 = `${graphEmpty} ${p1}%`;
    const stop3 = `${graphUsed} 0%`;
    const stop4 = `${graphUsed} ${p2}%`;
    const stop5 = `${graphEmpty} 0%`;
    const stop6 = `${graphEmpty} ${p3}%`;
    return { 'background': `-webkit-linear-gradient(left, ${stop1}, ${stop2}, ${stop3}, ${stop4}, ${stop5}, ${stop6})` };
}
const Styles = {
    step: Object.assign({ position: 'relative', margin: '2px 0' }, AppStyles_1.default.Layout.hbox, { padding: '4px 4px', justifyContent: 'space-between', WebkitUserSelect: 'all' }),
    stepLast: {
        paddingTop: 4
    },
    reportTitle: {
        wordBreak: 'break-all',
        paddingBottom: 10,
        color: Colors_1.default.bold
    },
    stepNumber: {
        paddingRight: 10
    },
    stepTitle: {
        flex: 1,
        wordBreak: 'break-all'
    },
    delta: {
        textAlign: 'right',
        width: 100
    },
    elapsed: {
        width: 75,
        textAlign: 'right'
    }
};
const makeStep = (step, idx, last, totalDuration) => {
    const { time, title, delta } = step;
    const pct = Number(delta / totalDuration * 100.0).toFixed(0);
    const startedAt = Number(time - delta).toFixed(0);
    const endedAt = Number(time).toFixed(0);
    const timeText = `${startedAt} - ${endedAt} ${{ MS_LABEL }} (${pct}%)`;
    const key = `step-${idx}`;
    const titleText = (last && ramdasauce_1.isNilOrEmpty(title)) ? LAST_STEP_DEFAULT : title;
    const pStyle = percentStyle(step.time - step.delta, step.delta, totalDuration);
    const stepStyle = ramda_1.merge(ramda_1.merge(Styles.step, last && Styles.stepLast), pStyle);
    return (react_1.default.createElement("div", { "data-tip": timeText, key: key, style: stepStyle },
        react_1.default.createElement("div", { style: Styles.stepTitle }, titleText),
        react_1.default.createElement("div", { style: Styles.delta },
            delta,
            MS_LABEL)));
};
class BenchmarkReportCommand extends react_1.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.command.id !== nextProps.command.id;
    }
    componentDidReact() {
        react_tooltip_1.default.rebuild();
    }
    render() {
        const { command } = this.props;
        const { payload } = command;
        const { title, steps } = ramda_1.clone(payload);
        const duration = ramda_1.last(steps).time;
        const preview = `${title} in ${duration}ms`;
        return (react_1.default.createElement(Command_1.default, { command: command, title: COMMAND_TITLE, duration: duration, preview: preview },
            react_1.default.createElement("div", { style: Styles.reportTitle }, title),
            mapIndexed((step, idx) => makeStep(step, idx, idx === steps.length - 2, duration), ramda_1.tail(steps))));
    }
}
BenchmarkReportCommand.propTypes = {
    command: react_1.PropTypes.object.isRequired
};
exports.default = BenchmarkReportCommand;
//# sourceMappingURL=BenchmarkReportCommand.js.map
});
___scope___.file("renderer/Commands/StateValuesResponseCommand.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Command_1 = require("../Shared/Command");
const Colors_1 = require("../Theme/Colors");
const Content_1 = require("../Shared/Content");
const ROOT_TEXT = '(root)';
const COMMAND_TITLE = 'STATE';
const PATH_LABEL = '';
const Styles = {
    path: {
        padding: '0 0 10px 0',
        color: Colors_1.default.bold
    },
    pathLabel: {
        color: Colors_1.default.foregroundDark
    },
    stringValue: {
        WebkitUserSelect: 'all',
        wordBreak: 'break-all'
    }
};
class StateValuesResponseCommand extends react_1.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.command.id !== nextProps.command.id;
    }
    render() {
        const { command } = this.props;
        const { payload } = command;
        const { path, value } = payload;
        const pathText = path || ROOT_TEXT;
        return (react_1.default.createElement(Command_1.default, { command: command, title: COMMAND_TITLE, startsOpen: true },
            react_1.default.createElement("div", { style: Styles.container },
                react_1.default.createElement("div", { style: Styles.path },
                    react_1.default.createElement("span", { style: Styles.pathLabel }, PATH_LABEL),
                    " ",
                    pathText),
                react_1.default.createElement(Content_1.default, { value: value }))));
    }
}
StateValuesResponseCommand.propTypes = {
    command: react_1.PropTypes.object.isRequired
};
exports.default = StateValuesResponseCommand;
//# sourceMappingURL=StateValuesResponseCommand.js.map
});
___scope___.file("renderer/Commands/StateKeysResponseCommand.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Command_1 = require("../Shared/Command");
const Colors_1 = require("../Theme/Colors");
const ramda_1 = require("ramda");
const mobx_react_1 = require("mobx-react");
const AppStyles_1 = require("../Theme/AppStyles");
const COMMAND_TITLE = 'STATE KEYS';
const NULL_MESSAGE = '¯\\_(ツ)_/¯';
const EMPTY_MESSAGE = 'Sorry, no keys in there.';
const ROOT_TEXT = '(root)';
const PATH_LABEL = '';
const Styles = {
    path: {
        padding: '0 0 10px 0',
        color: Colors_1.default.bold
    },
    pathLabel: {
        color: Colors_1.default.foregroundDark
    },
    stringValue: {
        color: Colors_1.default.text,
        WebkitUserSelect: 'all',
        wordBreak: 'break-all'
    },
    null: {},
    empty: {},
    keyList: Object.assign({}, AppStyles_1.default.Layout.hbox, { flexWrap: 'wrap' }),
    key: {
        backgroundColor: Colors_1.default.backgroundLighter,
        padding: '4px 8px',
        margin: 4,
        borderRadius: 4,
        cursor: 'pointer'
    }
};
const sortKeys = ramda_1.sortBy(ramda_1.toLower);
class StateKey extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleClick = () => {
            const { onClick, stateKey } = this.props;
            onClick && onClick(stateKey);
        };
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const { stateKey } = this.props;
        return (react_1.default.createElement("div", { style: Styles.key, onClick: this.handleClick }, stateKey));
    }
}
StateKey.propTypes = {
    stateKey: react_1.PropTypes.string.isRequired,
    onClick: react_1.PropTypes.func
};
let StateKeysResponseCommand = class StateKeysResponseCommand extends react_1.Component {
    constructor(props) {
        super(props);
        this.renderKey = this.renderKey.bind(this);
        this.handleKeyClick = this.handleKeyClick.bind(this);
    }
    shouldComponentUpdate(nextProps) {
        return this.props.command.id !== nextProps.command.id;
    }
    renderKey(key) {
        return react_1.default.createElement(StateKey, { key: `key-${key}`, stateKey: key, onClick: this.handleKeyClick });
    }
    handleKeyClick(key) {
        const { session, command } = this.props;
        const { ui } = session;
        const path = ramda_1.isNil(command.payload.path) ? '' : command.payload.path + '.';
        ui.getStateValues(`${path}${key}`);
    }
    renderKeys(keys) {
        if (ramda_1.isNil(keys))
            return react_1.default.createElement("div", { style: Styles.null },
                NULL_MESSAGE,
                ">");
        if (keys.length === 0)
            return react_1.default.createElement("div", { style: Styles.empty }, EMPTY_MESSAGE);
        return (react_1.default.createElement("div", { style: Styles.keyList }, ramda_1.map(this.renderKey, sortKeys(keys))));
    }
    render() {
        const { command } = this.props;
        const { payload } = command;
        const { path, keys } = payload;
        const pathText = path || ROOT_TEXT;
        return (react_1.default.createElement(Command_1.default, { command: command, title: COMMAND_TITLE, startsOpen: true },
            react_1.default.createElement("div", { style: Styles.container },
                react_1.default.createElement("div", { style: Styles.path },
                    react_1.default.createElement("span", { style: Styles.pathLabel }, PATH_LABEL),
                    " ",
                    pathText),
                this.renderKeys(keys))));
    }
};
StateKeysResponseCommand.propTypes = {
    command: react_1.PropTypes.object.isRequired
};
StateKeysResponseCommand = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], StateKeysResponseCommand);
exports.default = StateKeysResponseCommand;
//# sourceMappingURL=StateKeysResponseCommand.js.map
});
___scope___.file("renderer/Commands/StateValuesChangeCommand.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Command_1 = require("../Shared/Command");
const Colors_1 = require("../Theme/Colors");
const Content_1 = require("../Shared/Content");
const ramda_1 = require("ramda");
const ramdasauce_1 = require("ramdasauce");
const COMMAND_TITLE = 'SUBSCRIPTIONS';
const Styles = {
    name: {
        color: Colors_1.default.bold,
        margin: 0,
        paddingBottom: 10
    }
};
class StateValuesChangeCommand extends react_1.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.command.id !== nextProps.command.id;
    }
    render() {
        const { command } = this.props;
        const { payload } = command;
        const phrase = [];
        let { changed, added, removed } = payload;
        const hasAdded = !ramdasauce_1.isNilOrEmpty(added);
        const hasRemoved = !ramdasauce_1.isNilOrEmpty(removed);
        const hasChanged = !ramdasauce_1.isNilOrEmpty(changed);
        if (hasChanged) {
            phrase.push(`${ramda_1.keys(changed).length} changed`);
        }
        if (hasAdded) {
            added = ramdasauce_1.mapKeys(ramda_1.concat('+ '), added);
            phrase.push(`${ramda_1.keys(added).length} added`);
        }
        if (hasRemoved) {
            removed = ramdasauce_1.mapKeys(ramda_1.concat('- '), removed);
            phrase.push(`${ramda_1.keys(removed).length} removed`);
        }
        const preview = ramda_1.join(' ', phrase);
        return (react_1.default.createElement(Command_1.default, { command: command, title: COMMAND_TITLE, preview: preview },
            react_1.default.createElement("div", { style: Styles.container },
                hasChanged && react_1.default.createElement(Content_1.default, { value: changed }),
                hasAdded && react_1.default.createElement(Content_1.default, { value: added }),
                hasRemoved && react_1.default.createElement(Content_1.default, { value: removed }))));
    }
}
StateValuesChangeCommand.propTypes = {
    command: react_1.PropTypes.object.isRequired
};
exports.default = StateValuesChangeCommand;
//# sourceMappingURL=StateValuesChangeCommand.js.map
});
___scope___.file("renderer/Commands/DisplayCommand.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Command_1 = require("../Shared/Command");
const Content_1 = require("../Shared/Content");
const COMMAND_TITLE = 'DISPLAY';
const Styles = {
    imageContainer: {},
    image: {
        maxWidth: '100%',
        maxHeight: '100%'
    }
};
class DisplayCommand extends react_1.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.command.id !== nextProps.command.id;
    }
    render() {
        const { command } = this.props;
        const { payload, important } = command;
        const { name, value, image, preview } = payload;
        return (react_1.default.createElement(Command_1.default, { command: command, title: name || COMMAND_TITLE, important: important, preview: preview },
            value && react_1.default.createElement(Content_1.default, { value: value }),
            image &&
                react_1.default.createElement("div", { style: Styles.imageContainer },
                    react_1.default.createElement("img", { style: Styles.image, src: image.uri }))));
    }
}
DisplayCommand.propTypes = {
    command: react_1.PropTypes.object.isRequired
};
exports.default = DisplayCommand;
//# sourceMappingURL=DisplayCommand.js.map
});
___scope___.file("renderer/Commands/ImageCommand.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Command_1 = require("../Shared/Command");
const Colors_1 = require("../Theme/Colors");
const COMMAND_TITLE = 'IMAGE';
const Styles = {
    imageContainer: {},
    image: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    caption: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 'larger'
    },
    dimensions: {
        color: Colors_1.default.constant
    },
    filename: {
        color: Colors_1.default.highlight
    }
};
class DisplayCommand extends react_1.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.command.id !== nextProps.command.id;
    }
    render() {
        const { command } = this.props;
        const { payload, important } = command;
        const { uri, preview, caption, width, height, filename } = payload;
        const dimensions = width && height && `${width} x ${height}`;
        return (react_1.default.createElement(Command_1.default, { command: command, title: COMMAND_TITLE, important: important, preview: preview },
            react_1.default.createElement("div", { style: Styles.imageContainer },
                react_1.default.createElement("img", { style: Styles.image, src: uri }),
                caption && react_1.default.createElement("div", { style: Styles.caption }, caption),
                dimensions && react_1.default.createElement("div", { style: Styles.dimensions }, dimensions),
                filename && react_1.default.createElement("div", { style: Styles.filename }, filename))));
    }
}
DisplayCommand.propTypes = {
    command: react_1.PropTypes.object.isRequired
};
exports.default = DisplayCommand;
//# sourceMappingURL=ImageCommand.js.map
});
___scope___.file("renderer/Commands/SagaTaskCompleteCommand.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Command_1 = require("../Shared/Command");
const Colors_1 = require("../Theme/Colors");
const Content_1 = require("../Shared/Content");
const AppStyles_1 = require("../Theme/AppStyles");
const ramda_1 = require("ramda");
const done_1 = require("react-icons/lib/md/done");
const error_1 = require("react-icons/lib/md/error");
const eject_1 = require("react-icons/lib/md/eject");
const mobx_react_1 = require("mobx-react");
const COMMAND_TITLE = 'SAGA';
const INDENT_SPACE = 20;
const STATUS_MAP = {
    'RESOLVED': react_1.default.createElement(done_1.default, { size: 18 }),
    'REJECTED': react_1.default.createElement(error_1.default, null),
    'CANCELLED': react_1.default.createElement(eject_1.default, null)
};
const Styles = {
    details: {},
    effects: {},
    giant: {
        borderTop: `1px solid ${Colors_1.default.line}`,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    effect: Object.assign({}, AppStyles_1.default.Layout.hbox, { paddingTop: 4, marginTop: 2, borderBottom: `1px solid ${Colors_1.default.subtleLine}` }),
    effectStatus: {
        color: Colors_1.default.tag,
        paddingRight: 4
    },
    effectNameContainer: {
        width: 140,
        alignItems: 'center',
        marginBottom: 4
    },
    triggerType: {
        color: Colors_1.default.tag,
        paddingRight: 20
    },
    count: {},
    duration: {
        textAlign: 'right',
        flex: 1
    },
    effectName: {
        color: Colors_1.default.constant
    },
    effectDescription: {
        paddingBottom: 4
    },
    winning: {},
    losing: {
        textDecoration: 'line-through',
        color: Colors_1.default.foregroundDark
    },
    effectExtra: {
        flex: 1
    },
    effectTitle: Object.assign({}, AppStyles_1.default.Layout.hbox, { borderBottom: `1px solid ${Colors_1.default.highlight}`, paddingBottom: 4, marginBottom: 4 }),
    ms: {
        color: Colors_1.default.foregroundDark
    }
};
let SagaTaskCompleteCommand = class SagaTaskCompleteCommand extends react_1.Component {
    constructor(props) {
        super(props);
        this.renderEffect = this.renderEffect.bind(this);
    }
    renderEffect(effect) {
        const { extra, loser, winner, status, name, description, duration, depth, result } = effect;
        const key = `effect-${effect.effectId}`;
        const losingStyle = loser || status === 'CANCELLED' ? Styles.losing : {};
        const winningStyle = winner ? Styles.winning : {};
        const effectNameStyle = Object.assign({}, Styles.effectName, { paddingLeft: depth * INDENT_SPACE }, losingStyle, winningStyle);
        const effectDurationStyle = Object.assign({}, Styles.effectDuration, losingStyle);
        const { session, command } = this.props;
        const { ui } = session;
        const { messageId } = command;
        const showInOut = ui.getCommandProperty(messageId, 'details');
        return (react_1.default.createElement("div", { key: key, style: Styles.effect },
            react_1.default.createElement("div", { style: Styles.effectNameContainer },
                react_1.default.createElement("span", { style: effectNameStyle },
                    react_1.default.createElement("span", { style: Styles.effectStatus }, STATUS_MAP[status]),
                    name)),
            react_1.default.createElement("div", { style: Styles.effectExtra }, extra &&
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { style: Styles.effectDescription }, description),
                    showInOut && react_1.default.createElement(Content_1.default, { value: { in: extra, out: result }, treeLevel: 0 }))),
            react_1.default.createElement("div", { style: effectDurationStyle },
                duration,
                react_1.default.createElement("span", { style: Styles.ms }, "ms"))));
    }
    render() {
        const { command } = this.props;
        const { payload } = command;
        const { description, triggerType, duration, children } = payload;
        const preview = `${triggerType} in ${duration}ms`;
        const effectTitle = `${children.length} Effect${children.length === 1 ? '' : 's'}`;
        return (react_1.default.createElement(Command_1.default, { command: command, title: COMMAND_TITLE, preview: preview },
            react_1.default.createElement("div", { style: Styles.effects },
                react_1.default.createElement("div", { style: Styles.effectTitle },
                    react_1.default.createElement("div", { style: Styles.triggerType }, description || triggerType),
                    react_1.default.createElement("div", { style: Styles.count }, effectTitle),
                    react_1.default.createElement("div", { style: Styles.duration },
                        duration,
                        react_1.default.createElement("span", { style: Styles.ms }, "ms"))),
                ramda_1.map(this.renderEffect, children))));
    }
};
SagaTaskCompleteCommand.propTypes = {
    command: react_1.PropTypes.object.isRequired
};
SagaTaskCompleteCommand = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], SagaTaskCompleteCommand);
exports.default = SagaTaskCompleteCommand;
//# sourceMappingURL=SagaTaskCompleteCommand.js.map
});
___scope___.file("renderer/Commands/AsyncStorageValuesCommand.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Command_1 = require("../Shared/Command");
const ObjectTree_1 = require("../Shared/ObjectTree");
const Colors_1 = require("../Theme/Colors");
const AppStyles_1 = require("../Theme/AppStyles");
const ramda_1 = require("ramda");
const MakeTable_1 = require("../Shared/MakeTable");
const mapIndexed = ramda_1.addIndex(ramda_1.map);
const COMMAND_TITLE = 'ASYNC STORAGE';
class AsyncStorageValuesCommand extends react_1.Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }
    shouldComponentUpdate(nextProps) {
        return this.props.command.id !== nextProps.command.id;
    }
    renderItem(item, idx) {
        const [asyncStorageKey, asyncStorageValue] = item;
        const key = `item-${idx}`;
        const value = ramda_1.is(Object, asyncStorageValue) ? react_1.default.createElement(ObjectTree_1.default, { object: { value: asyncStorageValue } }) : MakeTable_1.textForValue(asyncStorageValue);
        return (react_1.default.createElement("div", { style: Styles.item, key: key },
            react_1.default.createElement("div", { style: Styles.itemLeft },
                react_1.default.createElement("div", { style: Styles.key }, asyncStorageKey)),
            react_1.default.createElement("div", { style: Styles.value }, value)));
    }
    render() {
        const { command } = this.props;
        const { preview, value = [] } = command.payload;
        const rows = mapIndexed(this.renderItem, value);
        return (react_1.default.createElement(Command_1.default, { command: command, title: COMMAND_TITLE, preview: preview },
            react_1.default.createElement("div", { style: Styles.watches }, rows.length > 0 ? rows : 'Empty storage.')));
    }
}
AsyncStorageValuesCommand.propTypes = {
    command: react_1.PropTypes.object.isRequired
};
const Styles = {
    container: Object.assign({}, AppStyles_1.default.Layout.vbox, { margin: 0, flex: 1 }),
    items: {
        margin: 0,
        padding: 0,
        overflowY: 'auto',
        overflowX: 'hidden'
    },
    item: Object.assign({}, AppStyles_1.default.Layout.hbox, { padding: '5px', justifyContent: 'space-between' }),
    itemLeft: {
        minWidth: 215,
        maxWidth: 215,
        wordBreak: 'break-all'
    },
    key: {
        color: Colors_1.default.constant,
        WebkitUserSelect: 'text',
        cursor: 'text'
    },
    value: {
        flex: 1,
        wordBreak: 'break-all',
        WebkitUserSelect: 'text',
        cursor: 'text'
    },
    title: {
        color: Colors_1.default.tag
    }
};
exports.default = AsyncStorageValuesCommand;
//# sourceMappingURL=AsyncStorageValuesCommand.js.map
});
___scope___.file("renderer/Foundation/TimelineHeader.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const AppStyles_1 = require("../Theme/AppStyles");
const mobx_react_1 = require("mobx-react");
const filter_list_1 = require("react-icons/lib/md/filter-list");
const delete_sweep_1 = require("react-icons/lib/md/delete-sweep");
const TITLE = 'Timeline';
const toolbarButton = {
    cursor: 'pointer'
};
const Styles = {
    container: {
        WebkitAppRegion: 'drag',
        backgroundColor: Colors_1.default.backgroundSubtleLight,
        borderBottom: `1px solid ${Colors_1.default.chromeLine}`,
        color: Colors_1.default.foregroundDark,
        boxShadow: `0px 0px 30px ${Colors_1.default.glow}`
    },
    content: Object.assign({ height: 60, paddingLeft: 10, paddingRight: 10 }, AppStyles_1.default.Layout.hbox, { justifyContent: 'space-between' }),
    left: Object.assign({}, AppStyles_1.default.Layout.hbox, { width: 100 }),
    right: Object.assign({}, AppStyles_1.default.Layout.hbox, { justifyContent: 'flex-end', alignItems: 'center' }),
    center: Object.assign({}, AppStyles_1.default.Layout.vbox, { flex: 1, alignItems: 'center', justifyContent: 'center' }),
    title: {
        color: Colors_1.default.foregroundLight,
        textAlign: 'center'
    },
    iconSize: 32,
    toolbarClear: Object.assign({}, toolbarButton),
    toolbarFilter: Object.assign({}, toolbarButton, { paddingRight: 8 })
};
let TimelineHeader = class TimelineHeader extends react_1.Component {
    render() {
        const { ui } = this.props.session;
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement("div", { style: Styles.content },
                react_1.default.createElement("div", { style: Styles.left }),
                react_1.default.createElement("div", { style: Styles.center },
                    react_1.default.createElement("div", { style: Styles.title }, TITLE)),
                react_1.default.createElement("div", { style: Styles.right },
                    react_1.default.createElement(filter_list_1.default, { size: Styles.iconSize, style: Styles.toolbarFilter, onClick: ui.openFilterTimelineDialog }),
                    react_1.default.createElement(delete_sweep_1.default, { size: Styles.iconSize, style: Styles.toolbarClear, onClick: ui.reset })))));
    }
};
TimelineHeader = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], TimelineHeader);
exports.default = TimelineHeader;
//# sourceMappingURL=TimelineHeader.js.map
});
___scope___.file("renderer/Foundation/EmptyState.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const Styles = {
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40
    },
    well: {
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    icon: {
        fontSize: 50,
        margin: 0,
        padding: 0
    },
    title: {
        textAlign: 'center',
        fontSize: '2rem',
        color: Colors_1.default.foregroundLight,
        margin: 0,
        paddingBottom: 50,
        paddingTop: 10
    },
    message: {
        textAlign: 'center',
        maxWidth: 400,
        lineHeight: 1.4
    }
};
class EmptyState extends react_1.Component {
    render() {
        const { icon, title } = this.props;
        const Icon = require(`react-icons/lib/md/${icon}`);
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement("div", { style: Styles.well },
                react_1.default.createElement(Icon, { size: 100 }),
                react_1.default.createElement("div", { style: Styles.title }, title),
                react_1.default.createElement("div", { style: Styles.message }, this.props.children))));
    }
}
EmptyState.propTypes = {
    icon: react_1.PropTypes.node.isRequired,
    title: react_1.PropTypes.string.isRequired,
    children: react_1.PropTypes.node
};
exports.default = EmptyState;
//# sourceMappingURL=EmptyState.js.map
});
___scope___.file("renderer/Dialogs/StateKeysAndValuesDialog.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const react_modal_dialog_1 = require("react-modal-dialog");
const mobx_react_1 = require("mobx-react");
const AppStyles_1 = require("../Theme/AppStyles");
const Colors_1 = require("../Theme/Colors");
const INPUT_PLACEHOLDER = 'smurfs.7.name';
const ESCAPE_KEYSTROKE = 'Esc';
const ESCAPE_HINT = 'OMG Cancel';
const ENTER_KEYSTROKE = 'Enter';
const ENTER_HINT = 'Search';
const TAB_KEYSTROKE = 'Tab';
const TAB_HINT = 'Keys/Values';
const DIALOG_TITLE_KEYS = 'State Keys';
const DIALOG_TITLE_VALUES = 'State Values';
const STATE_VALUES_INSTRUCTIONS = (react_1.default.createElement("span", null,
    "Retrieves a value from the state tree at the given path ",
    react_1.default.createElement("span", { style: { color: Colors_1.default.bold } }, "and all values below it"),
    "."));
const STATE_KEYS_INSTRUCTIONS = (react_1.default.createElement("span", null, "Retrieves a list of keys located at the given path in the state tree."));
const FIELD_LABEL = 'Path';
const Styles = {
    dialog: {
        borderRadius: 4,
        padding: 4,
        width: 450,
        backgroundColor: Colors_1.default.background,
        color: Colors_1.default.foreground
    },
    container: Object.assign({}, AppStyles_1.default.Layout.vbox),
    keystrokes: Object.assign({}, AppStyles_1.default.Layout.hbox, { alignSelf: 'center', paddingTop: 10, paddingBottom: 20, fontSize: 13 }),
    hotkey: {
        padding: '0 10px'
    },
    keystroke: {
        backgroundColor: Colors_1.default.backgroundHighlight,
        color: Colors_1.default.foreground,
        padding: '4px 8px',
        borderRadius: 4
    },
    header: Object.assign({}, AppStyles_1.default.Layout.vbox, { padding: '2em 2em 1em' }),
    body: Object.assign({}, AppStyles_1.default.Layout.vbox, { padding: '2em 2em 4em' }),
    title: {
        margin: 0,
        padding: 0,
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: 24,
        color: Colors_1.default.heading
    },
    subtitle: {
        color: Colors_1.default.foreground,
        textAlign: 'left',
        padding: 0,
        margin: 0
    },
    fieldLabel: {
        color: Colors_1.default.heading,
        fontSize: 13,
        textTransform: 'uppercase'
    },
    textField: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderBottom: `1px solid ${Colors_1.default.line}`,
        fontSize: 23,
        color: Colors_1.default.foregroundLight,
        lineHeight: '40px',
        backgroundColor: 'inherit'
    }
};
let StateKeysAndValuesDialog = class StateKeysAndValuesDialog extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleChange = (e) => {
            this.setState({ path: e.target.value });
        };
        this.handleKeyPress = (e) => {
            const { ui } = this.props.session;
            const { path } = this.state;
            if (e.key === 'Enter') {
                this.setState({ path: null });
                ui.getStateKeysOrValues(path);
                ui.closeStateFindDialog();
            }
        };
        this.state = {
            path: null
        };
    }
    render() {
        const { ui } = this.props.session;
        const open = ui.showStateFindDialog;
        const isKeys = ui.keysOrValues === 'keys';
        if (!open)
            return null;
        // need to find a less hacky way of doing this
        setTimeout(() => react_dom_1.default.findDOMNode(this.refs.textField).focus(), 1);
        return (react_1.default.createElement(react_modal_dialog_1.ModalPortal, null,
            react_1.default.createElement(react_modal_dialog_1.ModalBackground, { onClose: ui.closeStateFindDialog },
                react_1.default.createElement(react_modal_dialog_1.ModalDialog, { style: Styles.dialog },
                    react_1.default.createElement("div", { style: Styles.container },
                        react_1.default.createElement("div", { style: Styles.header },
                            react_1.default.createElement("h1", { style: Styles.title }, isKeys ? DIALOG_TITLE_KEYS : DIALOG_TITLE_VALUES),
                            react_1.default.createElement("p", { style: Styles.subtitle }, isKeys ? STATE_KEYS_INSTRUCTIONS : STATE_VALUES_INSTRUCTIONS)),
                        react_1.default.createElement("div", { style: Styles.body },
                            react_1.default.createElement("label", { style: Styles.fieldLabel }, FIELD_LABEL),
                            react_1.default.createElement("input", { placeholder: INPUT_PLACEHOLDER, style: Styles.textField, type: 'text', ref: 'textField', onKeyPress: this.handleKeyPress, onChange: this.handleChange })),
                        react_1.default.createElement("div", { style: Styles.keystrokes },
                            react_1.default.createElement("div", { style: Styles.hotkey },
                                react_1.default.createElement("span", { style: Styles.keystroke }, ESCAPE_KEYSTROKE),
                                " ",
                                ESCAPE_HINT),
                            react_1.default.createElement("div", { style: Styles.hotkey },
                                react_1.default.createElement("span", { style: Styles.keystroke }, TAB_KEYSTROKE),
                                " ",
                                TAB_HINT),
                            react_1.default.createElement("div", { style: Styles.hotkey },
                                react_1.default.createElement("span", { style: Styles.keystroke }, ENTER_KEYSTROKE),
                                " ",
                                ENTER_HINT)))))));
    }
};
StateKeysAndValuesDialog = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], StateKeysAndValuesDialog);
exports.default = StateKeysAndValuesDialog;
//# sourceMappingURL=StateKeysAndValuesDialog.js.map
});
___scope___.file("renderer/Dialogs/StateDispatchDialog.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const react_modal_dialog_1 = require("react-modal-dialog");
const mobx_react_1 = require("mobx-react");
const AppStyles_1 = require("../Theme/AppStyles");
const Colors_1 = require("../Theme/Colors");
const Keystroke_1 = require("../Lib/Keystroke");
const ESCAPE_KEYSTROKE = 'Esc';
const ESCAPE_HINT = 'Cancel';
const ENTER_KEYSTROKE = `${Keystroke_1.default.modifierName} + Enter`;
const ENTER_HINT = 'Dispatch';
const DIALOG_TITLE = 'Dispatch Action';
const INSTRUCTIONS = (react_1.default.createElement("span", null, " Create an action that will be dispatched to the client to run."));
const INPUT_PLACEHOLDER = '{ type: \'RepoMessage.Request\' }';
const FIELD_LABEL = 'Action';
const Styles = {
    dialog: {
        borderRadius: 4,
        padding: 4,
        width: 450,
        backgroundColor: Colors_1.default.background,
        color: Colors_1.default.foreground
    },
    container: Object.assign({}, AppStyles_1.default.Layout.vbox),
    keystrokes: Object.assign({}, AppStyles_1.default.Layout.hbox, { alignSelf: 'center', paddingTop: 10, paddingBottom: 20, fontSize: 13 }),
    hotkey: {
        padding: '0 10px'
    },
    keystroke: {
        backgroundColor: Colors_1.default.backgroundHighlight,
        color: Colors_1.default.foreground,
        padding: '4px 8px',
        borderRadius: 4
    },
    header: Object.assign({}, AppStyles_1.default.Layout.vbox, { padding: '2em 2em 1em' }),
    body: Object.assign({}, AppStyles_1.default.Layout.vbox, { padding: '2em 2em 4em' }),
    title: {
        margin: 0,
        padding: 0,
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: 24,
        color: Colors_1.default.heading
    },
    subtitle: {
        color: Colors_1.default.foreground,
        textAlign: 'left',
        padding: 0,
        margin: 0
    },
    fieldLabel: {
        color: Colors_1.default.heading,
        fontSize: 13,
        textTransform: 'uppercase'
    },
    dispatchField: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderBottom: `1px solid ${Colors_1.default.line}`,
        fontSize: 23,
        color: Colors_1.default.foregroundLight,
        backgroundColor: 'inherit',
        height: 200
    }
};
let StateDispatchDialog = class StateDispatchDialog extends react_1.Component {
    constructor() {
        super(...arguments);
        this.handleChange = (e) => {
            const { session } = this.props;
            session.ui.actionToDispatch = e.target.value;
        };
    }
    render() {
        const { ui } = this.props.session;
        const open = ui.showStateDispatchDialog;
        if (!open)
            return null;
        // need to find a less hacky way of doing this
        setTimeout(() => react_dom_1.default.findDOMNode(this.refs.dispatchField).focus(), 1);
        return (react_1.default.createElement(react_modal_dialog_1.ModalPortal, null,
            react_1.default.createElement(react_modal_dialog_1.ModalBackground, { onClose: ui.closeStateDispatchDialog },
                react_1.default.createElement(react_modal_dialog_1.ModalDialog, { style: Styles.dialog },
                    react_1.default.createElement("div", { style: Styles.container },
                        react_1.default.createElement("div", { style: Styles.header },
                            react_1.default.createElement("h1", { style: Styles.title }, DIALOG_TITLE),
                            react_1.default.createElement("p", { style: Styles.subtitle }, INSTRUCTIONS)),
                        react_1.default.createElement("div", { style: Styles.body },
                            react_1.default.createElement("label", { style: Styles.fieldLabel }, FIELD_LABEL),
                            react_1.default.createElement("textarea", { placeholder: INPUT_PLACEHOLDER, style: Styles.dispatchField, type: 'text', ref: 'dispatchField', value: ui.actionToDispatch, onKeyPress: this.handleKeyPress, onChange: this.handleChange })),
                        react_1.default.createElement("div", { style: Styles.keystrokes },
                            react_1.default.createElement("div", { style: Styles.hotkey },
                                react_1.default.createElement("span", { style: Styles.keystroke }, ESCAPE_KEYSTROKE),
                                " ",
                                ESCAPE_HINT),
                            react_1.default.createElement("div", { style: Styles.hotkey },
                                react_1.default.createElement("span", { style: Styles.keystroke }, ENTER_KEYSTROKE),
                                " ",
                                ENTER_HINT)))))));
    }
};
StateDispatchDialog = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], StateDispatchDialog);
exports.default = StateDispatchDialog;
//# sourceMappingURL=StateDispatchDialog.js.map
});
___scope___.file("renderer/Lib/Keystroke.js", function(exports, require, module, __filename, __dirname){

// figure out the platform
const platform = window.process.platform

const isMac = platform === 'darwin'
// const isWindows = platform === 'win32'
// const isLinux = platform === 'linux'

export default {
  mousetrap: isMac ? 'command' : 'ctrl',
  modifierName: isMac ? '⌘' : 'CTRL'
}

});
___scope___.file("renderer/Dialogs/HelpDialog.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_modal_dialog_1 = require("react-modal-dialog");
const mobx_react_1 = require("mobx-react");
const AppStyles_1 = require("../Theme/AppStyles");
const Colors_1 = require("../Theme/Colors");
const Keystroke_1 = require("../Lib/Keystroke");
const ESCAPE_KEYSTROKE = 'Esc';
const ESCAPE_HINT = 'Close';
const DIALOG_TITLE = 'Reactotron Quick-Help';
const INSTRUCTIONS = (react_1.default.createElement("span", null, " Shortcut list"));
const Styles = {
    dialog: {
        borderRadius: 4,
        padding: 4,
        width: 450,
        backgroundColor: Colors_1.default.background,
        color: Colors_1.default.foreground
    },
    container: Object.assign({}, AppStyles_1.default.Layout.vbox),
    keystrokes: Object.assign({}, AppStyles_1.default.Layout.hbox, { alignSelf: 'center', paddingTop: 10, paddingBottom: 20 }),
    hotkey: {
        padding: '0 10px'
    },
    keystroke: {
        backgroundColor: Colors_1.default.backgroundHighlight,
        color: Colors_1.default.foreground,
        padding: '4px 8px',
        borderRadius: 4
    },
    header: Object.assign({}, AppStyles_1.default.Layout.vbox, { padding: '2em 2em 1em' }),
    body: Object.assign({}, AppStyles_1.default.Layout.vbox, { padding: '0.5em 2em 3em' }),
    helpShortcut: Object.assign({}, AppStyles_1.default.Layout.hbox, { margin: '2px 0' }),
    title: {
        margin: 0,
        padding: 0,
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: 24,
        color: Colors_1.default.heading
    },
    subtitle: {
        color: Colors_1.default.foreground,
        textAlign: 'left',
        padding: 0,
        margin: 0
    },
    helpLabel: {
        // borderBottom: `1px solid ${Colors.line}`,
        color: Colors_1.default.bold,
        textTransform: 'uppercase',
        width: 100
    },
    helpDetail: {
        flex: 1
    },
    group: {
        marginTop: 10,
        marginBottom: 2,
        paddingBottom: 2,
        color: Colors_1.default.highlight,
        borderBottom: `1px solid ${Colors_1.default.line}`
    }
};
let StateDispatchDialog = class StateDispatchDialog extends react_1.Component {
    constructor() {
        super(...arguments);
        this.handleChange = (e) => {
            const { session } = this.props;
            session.ui.actionToDispatch = e.target.value;
        };
    }
    render() {
        const { ui } = this.props.session;
        const open = ui.showHelpDialog;
        if (!open)
            return null;
        return (react_1.default.createElement(react_modal_dialog_1.ModalPortal, null,
            react_1.default.createElement(react_modal_dialog_1.ModalBackground, { onClose: ui.closeHelpDialog },
                react_1.default.createElement(react_modal_dialog_1.ModalDialog, { style: Styles.dialog },
                    react_1.default.createElement("div", { style: Styles.container },
                        react_1.default.createElement("div", { style: Styles.header },
                            react_1.default.createElement("h1", { style: Styles.title }, DIALOG_TITLE),
                            react_1.default.createElement("p", { style: Styles.subtitle }, INSTRUCTIONS)),
                        react_1.default.createElement("div", { style: Styles.body },
                            react_1.default.createElement("div", { style: Styles.group }, "Working With State"),
                            react_1.default.createElement("div", { style: Styles.helpShortcut },
                                react_1.default.createElement("div", { style: Styles.helpLabel },
                                    Keystroke_1.default.modifierName,
                                    " + F"),
                                react_1.default.createElement("div", { style: Styles.helpDetail }, "find keys or values")),
                            react_1.default.createElement("div", { style: Styles.helpShortcut },
                                react_1.default.createElement("div", { style: Styles.helpLabel },
                                    Keystroke_1.default.modifierName,
                                    " + N"),
                                react_1.default.createElement("div", { style: Styles.helpDetail }, "new subscription")),
                            react_1.default.createElement("div", { style: Styles.helpShortcut },
                                react_1.default.createElement("div", { style: Styles.helpLabel },
                                    Keystroke_1.default.modifierName,
                                    " + D"),
                                react_1.default.createElement("div", { style: Styles.helpDetail }, "dispatch an action")),
                            react_1.default.createElement("div", { style: Styles.group }, "Miscellaneous"),
                            react_1.default.createElement("div", { style: Styles.helpShortcut },
                                react_1.default.createElement("div", { style: Styles.helpLabel },
                                    Keystroke_1.default.modifierName,
                                    " + K"),
                                react_1.default.createElement("div", { style: Styles.helpDetail }, "klear!")),
                            react_1.default.createElement("div", { style: Styles.helpShortcut },
                                react_1.default.createElement("div", { style: Styles.helpLabel },
                                    Keystroke_1.default.modifierName,
                                    " + /"),
                                react_1.default.createElement("div", { style: Styles.helpDetail }, "toggle help"))),
                        react_1.default.createElement("div", { style: Styles.keystrokes },
                            react_1.default.createElement("div", { style: Styles.hotkey },
                                react_1.default.createElement("span", { style: Styles.keystroke }, ESCAPE_KEYSTROKE),
                                " ",
                                ESCAPE_HINT)))))));
    }
};
StateDispatchDialog = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], StateDispatchDialog);
exports.default = StateDispatchDialog;
//# sourceMappingURL=HelpDialog.js.map
});
___scope___.file("renderer/Dialogs/StateWatchDialog.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const react_modal_dialog_1 = require("react-modal-dialog");
const mobx_react_1 = require("mobx-react");
const AppStyles_1 = require("../Theme/AppStyles");
const Colors_1 = require("../Theme/Colors");
const ESCAPE_KEYSTROKE = 'Esc';
const ESCAPE_HINT = 'Cancel';
const ENTER_KEYSTROKE = 'Enter';
const ENTER_HINT = 'Subscribe';
const DIALOG_TITLE = 'Add Subscription';
const INPUT_PLACEHOLDER = '';
const FIELD_LABEL = 'path';
const Styles = {
    dialog: {
        borderRadius: 4,
        padding: 4,
        width: 450,
        backgroundColor: Colors_1.default.background,
        color: Colors_1.default.foreground
    },
    examples: {},
    example: {
        padding: 0,
        margin: '0 0 0 40px',
        color: Colors_1.default.bold
    },
    container: Object.assign({}, AppStyles_1.default.Layout.vbox),
    keystrokes: Object.assign({}, AppStyles_1.default.Layout.hbox, { alignSelf: 'center', paddingTop: 10, paddingBottom: 20, fontSize: 13 }),
    hotkey: {
        padding: '0 10px'
    },
    keystroke: {
        backgroundColor: Colors_1.default.backgroundHighlight,
        color: Colors_1.default.foreground,
        padding: '4px 8px',
        borderRadius: 4
    },
    header: Object.assign({}, AppStyles_1.default.Layout.vbox, { padding: '1em 2em 0em' }),
    body: Object.assign({}, AppStyles_1.default.Layout.vbox, { padding: '1em 2em 4em' }),
    title: {
        margin: 0,
        padding: 0,
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: 24,
        color: Colors_1.default.heading
    },
    subtitle: {
        color: Colors_1.default.foreground,
        textAlign: 'left',
        padding: 0,
        margin: 0
    },
    fieldLabel: {
        color: Colors_1.default.heading,
        fontSize: 13,
        textTransform: 'uppercase'
    },
    textField: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderBottom: `1px solid ${Colors_1.default.line}`,
        fontSize: 23,
        color: Colors_1.default.foregroundLight,
        lineHeight: '40px',
        backgroundColor: 'inherit'
    }
};
const INSTRUCTIONS = react_1.default.createElement("div", null,
    react_1.default.createElement("p", null, "Enter a path you would like to subscribe.  Here are some examples to get you started:"),
    react_1.default.createElement("p", { style: Styles.example }, "user.firstName"),
    react_1.default.createElement("p", { style: Styles.example }, "repo"),
    react_1.default.createElement("p", { style: Styles.example }, "repo.*"));
let StateWatchDialog = class StateWatchDialog extends react_1.Component {
    constructor() {
        super(...arguments);
        this.handleChange = (e) => {
            const { session } = this.props;
            session.ui.watchToAdd = e.target.value;
        };
    }
    render() {
        const { ui } = this.props.session;
        const open = ui.showStateWatchDialog;
        if (!open)
            return null;
        // need to find a less hacky way of doing this
        setTimeout(() => react_dom_1.default.findDOMNode(this.refs.textField).focus(), 1);
        return (react_1.default.createElement(react_modal_dialog_1.ModalPortal, null,
            react_1.default.createElement(react_modal_dialog_1.ModalBackground, { onClose: ui.closeStateWatchDialog },
                react_1.default.createElement(react_modal_dialog_1.ModalDialog, { style: Styles.dialog },
                    react_1.default.createElement("div", { style: Styles.container },
                        react_1.default.createElement("div", { style: Styles.header },
                            react_1.default.createElement("h1", { style: Styles.title }, DIALOG_TITLE),
                            react_1.default.createElement("p", { style: Styles.subtitle }, INSTRUCTIONS)),
                        react_1.default.createElement("div", { style: Styles.body },
                            react_1.default.createElement("label", { style: Styles.fieldLabel }, FIELD_LABEL),
                            react_1.default.createElement("input", { placeholder: INPUT_PLACEHOLDER, style: Styles.textField, type: 'text', ref: 'textField', onKeyPress: this.handleKeyPress, onChange: this.handleChange })),
                        react_1.default.createElement("div", { style: Styles.keystrokes },
                            react_1.default.createElement("div", { style: Styles.hotkey },
                                react_1.default.createElement("span", { style: Styles.keystroke }, ESCAPE_KEYSTROKE),
                                " ",
                                ESCAPE_HINT),
                            react_1.default.createElement("div", { style: Styles.hotkey },
                                react_1.default.createElement("span", { style: Styles.keystroke }, ENTER_KEYSTROKE),
                                " ",
                                ENTER_HINT)))))));
    }
};
StateWatchDialog = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], StateWatchDialog);
exports.default = StateWatchDialog;
//# sourceMappingURL=StateWatchDialog.js.map
});
___scope___.file("renderer/Dialogs/RenameStateDialog.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_modal_dialog_1 = require("react-modal-dialog");
const mobx_react_1 = require("mobx-react");
const AppStyles_1 = require("../Theme/AppStyles");
const Colors_1 = require("../Theme/Colors");
const ESCAPE_KEYSTROKE = 'Esc';
const ESCAPE_HINT = 'Cancel';
const ENTER_KEYSTROKE = `Enter`;
const ENTER_HINT = 'Rename';
const DIALOG_TITLE = 'Rename Redux Snapshot';
const INPUT_PLACEHOLDER = '';
const FIELD_LABEL = 'New Name';
const Styles = {
    dialog: {
        borderRadius: 4,
        padding: 4,
        width: 450,
        backgroundColor: Colors_1.default.background,
        color: Colors_1.default.foreground
    },
    container: Object.assign({}, AppStyles_1.default.Layout.vbox),
    keystrokes: Object.assign({}, AppStyles_1.default.Layout.hbox, { alignSelf: 'center', paddingTop: 10, paddingBottom: 20, fontSize: 13 }),
    hotkey: {
        padding: '0 10px'
    },
    keystroke: {
        backgroundColor: Colors_1.default.backgroundHighlight,
        color: Colors_1.default.foreground,
        padding: '4px 8px',
        borderRadius: 4
    },
    header: Object.assign({}, AppStyles_1.default.Layout.vbox, { padding: '2em 2em 1em' }),
    body: Object.assign({}, AppStyles_1.default.Layout.vbox, { padding: '2em 2em 4em' }),
    title: {
        margin: 0,
        padding: 0,
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: 24,
        color: Colors_1.default.heading
    },
    subtitle: {
        color: Colors_1.default.foreground,
        textAlign: 'left',
        padding: 0,
        margin: 0
    },
    fieldLabel: {
        color: Colors_1.default.heading,
        fontSize: 13,
        textTransform: 'uppercase'
    },
    textField: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderBottom: `1px solid ${Colors_1.default.line}`,
        fontSize: 23,
        color: Colors_1.default.foregroundLight,
        lineHeight: '40px',
        backgroundColor: 'inherit'
    }
};
let RenameStateDialog = class RenameStateDialog extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const { session } = this.props;
        session.ui.backupStateName = e.target.value;
    }
    render() {
        const { ui } = this.props.session;
        const open = ui.showRenameStateDialog;
        if (!open)
            return null;
        return (react_1.default.createElement(react_modal_dialog_1.ModalPortal, null,
            react_1.default.createElement(react_modal_dialog_1.ModalBackground, { onClose: ui.closeRenameStateDialog },
                react_1.default.createElement(react_modal_dialog_1.ModalDialog, { style: Styles.dialog },
                    react_1.default.createElement("div", { style: Styles.container },
                        react_1.default.createElement("div", { style: Styles.header },
                            react_1.default.createElement("h1", { style: Styles.title }, DIALOG_TITLE)),
                        react_1.default.createElement("div", { style: Styles.body },
                            react_1.default.createElement("label", { style: Styles.fieldLabel }, FIELD_LABEL),
                            react_1.default.createElement("input", { autoFocus: true, placeholder: INPUT_PLACEHOLDER, style: Styles.textField, type: 'text', ref: 'textField', defaultValue: ui.backupStateName, onChange: this.handleChange })),
                        react_1.default.createElement("div", { style: Styles.keystrokes },
                            react_1.default.createElement("div", { style: Styles.hotkey },
                                react_1.default.createElement("span", { style: Styles.keystroke }, ESCAPE_KEYSTROKE),
                                ' ',
                                ESCAPE_HINT),
                            react_1.default.createElement("div", { style: Styles.hotkey },
                                react_1.default.createElement("span", { style: Styles.keystroke }, ENTER_KEYSTROKE),
                                ' ',
                                ENTER_HINT)))))));
    }
};
RenameStateDialog = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], RenameStateDialog);
exports.default = RenameStateDialog;
//# sourceMappingURL=RenameStateDialog.js.map
});
___scope___.file("renderer/Dialogs/FilterTimelineDialog.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_modal_dialog_1 = require("react-modal-dialog");
const mobx_react_1 = require("mobx-react");
const AppStyles_1 = require("../Theme/AppStyles");
const Colors_1 = require("../Theme/Colors");
const Checkbox_1 = require("../Shared/Checkbox");
const ESCAPE_HINT = 'Close';
const ESCAPE_KEYSTROKE = 'ESC';
const DIALOG_TITLE = 'Timeline Filter';
// all possible commands grouped by functionality
const GROUPS = [
    {
        name: 'Informational',
        items: [
            { value: 'log', text: 'Log' },
            { value: 'image', text: 'Image' },
            { value: 'display', text: 'Custom Display' }
        ]
    },
    {
        name: 'General',
        items: [
            { value: 'client.intro', text: 'Connection' },
            { value: 'benchmark.report', text: 'Benchmark' },
            { value: 'api.response', text: 'API' }
        ]
    },
    {
        name: 'Async Storage',
        items: [
            { value: 'asyncStorage.values.change', text: 'Changes' }
        ]
    },
    {
        name: 'Redux & Sagas',
        items: [
            { value: 'state.action.complete', text: 'Action' },
            { value: 'saga.task.complete', text: 'Saga' },
            { value: 'state.values.change', text: 'Subscription Changed' }
        ]
    }
];
const Styles = {
    dialog: {
        borderRadius: 4,
        padding: 4,
        width: 450,
        backgroundColor: Colors_1.default.background,
        color: Colors_1.default.foreground
    },
    examples: {},
    example: {
        padding: 0,
        margin: '0 0 0 40px',
        color: Colors_1.default.bold
    },
    container: Object.assign({}, AppStyles_1.default.Layout.vbox),
    keystrokes: Object.assign({}, AppStyles_1.default.Layout.hbox, { alignSelf: 'center', paddingTop: 10, paddingBottom: 20, fontSize: 13 }),
    hotkey: {
        padding: '0 10px'
    },
    keystroke: {
        backgroundColor: Colors_1.default.backgroundHighlight,
        color: Colors_1.default.foreground,
        padding: '4px 8px',
        borderRadius: 4
    },
    header: Object.assign({}, AppStyles_1.default.Layout.vbox, { padding: '1em 2em 0em' }),
    body: Object.assign({}, AppStyles_1.default.Layout.vbox, { padding: '1em 2em 4em' }),
    title: {
        margin: 0,
        padding: 0,
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: 24,
        color: Colors_1.default.heading
    },
    subtitle: {
        color: Colors_1.default.foreground,
        textAlign: 'left',
        padding: 0,
        margin: 0
    },
    fieldLabel: {
        color: Colors_1.default.heading,
        fontSize: 13,
        textTransform: 'uppercase'
    },
    textField: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderBottom: `1px solid ${Colors_1.default.line}`,
        fontSize: 23,
        color: Colors_1.default.foregroundLight,
        lineHeight: '40px',
        backgroundColor: 'inherit'
    },
    group: {},
    groupName: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
        color: Colors_1.default.foregroundLight,
        paddingBottom: 2,
        borderBottom: `1px solid ${Colors_1.default.highlight}`
    },
    option: {}
};
let FilterTimelineDialog = class FilterTimelineDialog extends react_1.Component {
    render() {
        const { session } = this.props;
        const { ui } = session;
        if (!ui.showFilterTimelineDialog)
            return null;
        const groups = GROUPS.map((opt, optIdx) => {
            const options = opt.items.map((itm, itmIdx) => {
                const isChecked = session.isCommandHidden(itm.value);
                const onToggle = () => session.toggleCommandVisibility(itm.value);
                return react_1.default.createElement(Checkbox_1.default, { key: itmIdx, checked: isChecked, label: itm.text, onToggle: onToggle });
            });
            return (react_1.default.createElement("div", { style: Styles.group, key: optIdx },
                react_1.default.createElement("div", { style: Styles.groupName }, opt.name),
                react_1.default.createElement("div", { style: Styles.option }, options)));
        });
        return (react_1.default.createElement(react_modal_dialog_1.ModalPortal, null,
            react_1.default.createElement(react_modal_dialog_1.ModalBackground, { onClose: ui.closeFilterTimelineDialog },
                react_1.default.createElement(react_modal_dialog_1.ModalDialog, { style: Styles.dialog },
                    react_1.default.createElement("div", { style: Styles.container },
                        react_1.default.createElement("div", { style: Styles.header },
                            react_1.default.createElement("h1", { style: Styles.title }, DIALOG_TITLE)),
                        react_1.default.createElement("div", { style: Styles.body }, groups),
                        react_1.default.createElement("div", { style: Styles.keystrokes },
                            react_1.default.createElement("div", { style: Styles.hotkey },
                                react_1.default.createElement("span", { style: Styles.keystroke }, ESCAPE_KEYSTROKE),
                                " ",
                                ESCAPE_HINT)))))));
    }
};
FilterTimelineDialog = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], FilterTimelineDialog);
exports.default = FilterTimelineDialog;
//# sourceMappingURL=FilterTimelineDialog.js.map
});
___scope___.file("renderer/Shared/Checkbox.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const check_box_outline_blank_1 = require("react-icons/lib/md/check-box-outline-blank");
const check_box_1 = require("react-icons/lib/md/check-box");
const Colors_1 = require("../Theme/Colors");
const Styles = {
    container: {
        cursor: 'pointer'
    },
    icon: {
        fontSize: 22,
        paddingRight: 4
    },
    label: {
        color: Colors_1.default.tag
    }
};
class Checkbox extends react_1.Component {
    render() {
        const { label, checked } = this.props;
        const CheckComponent = checked
            ? check_box_outline_blank_1.default
            : check_box_1.default;
        const onClick = e => {
            e.stopPropagation();
            this.props.onToggle();
        };
        return (react_1.default.createElement("div", { style: Styles.container, onClick: onClick },
            react_1.default.createElement(CheckComponent, { style: Styles.icon }),
            react_1.default.createElement("span", { style: Styles.label }, label)));
    }
}
Checkbox.propTypes = {
    label: react_1.PropTypes.string,
    checked: react_1.PropTypes.bool.isRequired,
    onToggle: react_1.PropTypes.func.isRequired
};
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map
});
___scope___.file("renderer/Foundation/Subscriptions.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const AppStyles_1 = require("../Theme/AppStyles");
const mobx_react_1 = require("mobx-react");
const ramda_1 = require("ramda");
const ObjectTree_1 = require("../Shared/ObjectTree");
const MakeTable_1 = require("../Shared/MakeTable");
const SubscriptionsHeader_1 = require("./SubscriptionsHeader");
const EmptyState_1 = require("../Foundation/EmptyState");
const Key_1 = require("../Shared/Key");
const Keystroke_1 = require("../Lib/Keystroke");
const Styles = {
    container: Object.assign({}, AppStyles_1.default.Layout.vbox, { margin: 0, flex: 1 }),
    watches: {
        margin: 0,
        padding: 0,
        overflowY: 'auto',
        overflowX: 'hidden'
    },
    watch: Object.assign({}, AppStyles_1.default.Layout.hbox, { padding: '15px 20px', justifyContent: 'space-between', borderBottom: `1px solid ${Colors_1.default.line}` }),
    watchLeft: {
        flex: 0.3,
        wordBreak: 'break-all'
    },
    watchPath: {
        cursor: 'pointer',
        color: Colors_1.default.tag
    },
    watchValue: {
        flex: 0.7,
        wordBreak: 'break-all'
    },
    message: {
        lineHeight: 1.8
    }
};
let WatchPanel = class WatchPanel extends react_1.Component {
    constructor(props) {
        super(props);
        this.renderWatch = this.renderWatch.bind(this);
    }
    renderWatch(watch, indent = 0) {
        const unsubscribe = (path) => {
            this.props.session.ui.removeStateWatch(path);
        };
        const key = `watch-${watch.path}`;
        const value = ramda_1.is(Object, watch.value) ? react_1.default.createElement(ObjectTree_1.default, { object: { value: watch.value } }) : MakeTable_1.textForValue(watch.value);
        const watchValueStyles = ramda_1.merge(Styles.watchValue, { color: MakeTable_1.colorForValue(watch.value) });
        return (react_1.default.createElement("div", { style: Styles.watch, key: key },
            react_1.default.createElement("div", { style: Styles.watchLeft },
                react_1.default.createElement("div", { style: Styles.watchPath, onClick: unsubscribe.bind(this, watch.path) }, watch.path)),
            react_1.default.createElement("div", { style: watchValueStyles }, value)));
    }
    renderEmpty() {
        return (react_1.default.createElement(EmptyState_1.default, { icon: 'notifications-none', title: 'No Subscriptions' },
            react_1.default.createElement("p", { style: Styles.message },
                "You can subscribe to state changes in your redux store by pressing ",
                react_1.default.createElement(Key_1.default, { text: Keystroke_1.default.modifierName }),
                " + ",
                react_1.default.createElement(Key_1.default, { text: 'N' }),
                ".")));
    }
    render() {
        const { watches } = this.props.session;
        const isEmpty = watches.length === 0;
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement(SubscriptionsHeader_1.default, null),
            isEmpty && this.renderEmpty(),
            !isEmpty &&
                react_1.default.createElement("div", { style: Styles.watches }, ramda_1.map(this.renderWatch, watches))));
    }
};
WatchPanel = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], WatchPanel);
exports.default = WatchPanel;
//# sourceMappingURL=Subscriptions.js.map
});
___scope___.file("renderer/Foundation/SubscriptionsHeader.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const AppStyles_1 = require("../Theme/AppStyles");
const mobx_react_1 = require("mobx-react");
const add_1 = require("react-icons/lib/md/add");
const delete_forever_1 = require("react-icons/lib/md/delete-forever");
const TITLE = 'Redux Subscriptions';
const toolbarButton = {
    cursor: 'pointer'
};
const Styles = {
    container: {
        WebkitAppRegion: 'drag',
        backgroundColor: Colors_1.default.backgroundSubtleLight,
        borderBottom: `1px solid ${Colors_1.default.chromeLine}`,
        color: Colors_1.default.foregroundDark,
        boxShadow: `0px 0px 30px ${Colors_1.default.glow}`
    },
    content: Object.assign({ height: 60, paddingLeft: 10, paddingRight: 10 }, AppStyles_1.default.Layout.hbox, { justifyContent: 'space-between' }),
    left: Object.assign({}, AppStyles_1.default.Layout.hbox, { width: 100 }),
    right: Object.assign({ width: 100 }, AppStyles_1.default.Layout.hbox, { justifyContent: 'flex-end', alignItems: 'center' }),
    center: Object.assign({}, AppStyles_1.default.Layout.vbox, { flex: 1, alignItems: 'center', justifyContent: 'center' }),
    title: {
        color: Colors_1.default.foregroundLight,
        textAlign: 'center'
    },
    iconSize: 32,
    toolbarAdd: Object.assign({}, toolbarButton),
    toolbarClear: Object.assign({}, toolbarButton)
};
let SubscriptionsHeader = class SubscriptionsHeader extends react_1.Component {
    render() {
        const { ui } = this.props.session;
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement("div", { style: Styles.content },
                react_1.default.createElement("div", { style: Styles.left }),
                react_1.default.createElement("div", { style: Styles.center },
                    react_1.default.createElement("div", { style: Styles.title }, TITLE)),
                react_1.default.createElement("div", { style: Styles.right },
                    react_1.default.createElement(add_1.default, { size: Styles.iconSize, style: Styles.toolbarAdd, onClick: ui.openStateWatchDialog }),
                    react_1.default.createElement(delete_forever_1.default, { size: Styles.iconSize, style: Styles.toolbarClear, onClick: ui.clearStateWatches })))));
    }
};
SubscriptionsHeader = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], SubscriptionsHeader);
exports.default = SubscriptionsHeader;
//# sourceMappingURL=SubscriptionsHeader.js.map
});
___scope___.file("renderer/Shared/Key.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const Styles = {
    container: {
        color: Colors_1.default.background,
        textTransform: 'uppercase',
        borderRadius: 4,
        backgroundColor: Colors_1.default.foreground,
        padding: '4px 12px',
        fontWeight: 'bold',
        borderBottom: `2px solid ${Colors_1.default.highlight}`,
        marginLeft: 2,
        marginRight: 2
    }
};
class Key extends react_1.Component {
    render() {
        const { text } = this.props;
        return (react_1.default.createElement("span", { style: Styles.container }, text));
    }
}
Key.propTypes = {
    text: react_1.PropTypes.string.isRequired
};
exports.default = Key;
//# sourceMappingURL=Key.js.map
});
___scope___.file("renderer/Foundation/Backups.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const AppStyles_1 = require("../Theme/AppStyles");
const mobx_react_1 = require("mobx-react");
const BackupsHeader_1 = require("./BackupsHeader");
const moment_1 = require("moment");
const delete_1 = require("react-icons/lib/md/delete");
const create_1 = require("react-icons/lib/md/create");
const EmptyState_1 = require("../Foundation/EmptyState");
const Styles = {
    container: Object.assign({}, AppStyles_1.default.Layout.vbox, { margin: 0, flex: 1 }),
    backups: {
        margin: 0,
        padding: 0,
        overflowY: 'auto',
        overflowX: 'hidden'
    },
    row: Object.assign({}, AppStyles_1.default.Layout.hbox, { padding: '15px 20px', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${Colors_1.default.line}`, cursor: 'pointer' }),
    name: {
        color: Colors_1.default.tag,
        textAlign: 'left',
        flex: 1
    },
    iconSize: 24,
    upload: {
        paddingRight: 10,
        cursor: 'pointer'
    },
    button: {
        cursor: 'pointer',
        paddingLeft: 10
    }
};
let Backups = class Backups extends react_1.Component {
    constructor(props) {
        super(props);
        this.renderBackup = this.renderBackup.bind(this);
    }
    renderEmpty() {
        return (react_1.default.createElement(EmptyState_1.default, { icon: 'import-export', title: 'No Snapshots' },
            react_1.default.createElement("p", null, "To take a snapshot of your current Redux store, press the Download button in the top right corner of this window.")));
    }
    renderBackup(backup, indent = 0) {
        const { ui } = this.props.session;
        const { restoreState } = ui;
        const { state } = backup.payload;
        const restore = restoreState.bind(this, state);
        const { messageId, date } = backup;
        const key = `backup-${messageId}`;
        const name = backup.payload.name || moment_1.default(date).format('dddd @ h:mm:ss a');
        const deleteState = event => {
            ui.deleteState(backup);
            event.stopPropagation();
        };
        const renameState = event => {
            ui.openRenameStateDialog(backup);
            event.stopPropagation();
        };
        return (react_1.default.createElement("div", { style: Styles.row, key: key, onClick: restore },
            react_1.default.createElement("div", { style: Styles.name }, name),
            react_1.default.createElement(create_1.default, { size: Styles.iconSize, style: Styles.button, onClick: renameState }),
            react_1.default.createElement(delete_1.default, { size: Styles.iconSize, style: Styles.button, onClick: deleteState })));
    }
    render() {
        const backups = this.props.session.backups.slice();
        const isEmpty = backups.length === 0;
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement(BackupsHeader_1.default, null),
            isEmpty
                ? this.renderEmpty()
                : react_1.default.createElement("div", { style: Styles.backups }, backups.map(this.renderBackup))));
    }
};
Backups = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], Backups);
exports.default = Backups;
//# sourceMappingURL=Backups.js.map
});
___scope___.file("renderer/Foundation/BackupsHeader.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const AppStyles_1 = require("../Theme/AppStyles");
const mobx_react_1 = require("mobx-react");
const file_download_1 = require("react-icons/lib/md/file-download");
const TITLE = 'Redux Snapshots';
const toolbarButton = {
    cursor: 'pointer'
};
const Styles = {
    container: {
        WebkitAppRegion: 'drag',
        backgroundColor: Colors_1.default.backgroundSubtleLight,
        borderBottom: `1px solid ${Colors_1.default.chromeLine}`,
        color: Colors_1.default.foregroundDark,
        boxShadow: `0px 0px 30px ${Colors_1.default.glow}`
    },
    content: Object.assign({ height: 60, paddingLeft: 10, paddingRight: 10 }, AppStyles_1.default.Layout.hbox, { justifyContent: 'space-between' }),
    left: Object.assign({}, AppStyles_1.default.Layout.hbox, { width: 100 }),
    right: Object.assign({ width: 100 }, AppStyles_1.default.Layout.hbox, { justifyContent: 'flex-end', alignItems: 'center' }),
    center: Object.assign({}, AppStyles_1.default.Layout.vbox, { flex: 1, alignItems: 'center', justifyContent: 'center' }),
    title: {
        color: Colors_1.default.foregroundLight,
        textAlign: 'center'
    },
    iconSize: 32,
    toolbarAdd: Object.assign({}, toolbarButton)
};
let BackupsHeader = class BackupsHeader extends react_1.Component {
    render() {
        const { ui } = this.props.session;
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement("div", { style: Styles.content },
                react_1.default.createElement("div", { style: Styles.left }),
                react_1.default.createElement("div", { style: Styles.center },
                    react_1.default.createElement("div", { style: Styles.title }, TITLE)),
                react_1.default.createElement("div", { style: Styles.right },
                    react_1.default.createElement(file_download_1.default, { size: Styles.iconSize, style: Styles.toolbarAdd, onClick: ui.backupState })))));
    }
};
BackupsHeader = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], BackupsHeader);
exports.default = BackupsHeader;
//# sourceMappingURL=BackupsHeader.js.map
});
___scope___.file("renderer/Foundation/Native.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const AppStyles_1 = require("../Theme/AppStyles");
const mobx_react_1 = require("mobx-react");
const NativeHeader_1 = require("./NativeHeader");
const fs_1 = require("fs");
const electron_1 = require("electron");
const ramda_1 = require("ramda");
const NativeOverlayLayoutType_1 = require("./NativeOverlayLayoutType");
const NativeOverlayAlignment_1 = require("./NativeOverlayAlignment");
const NativeOverlayScale_1 = require("./NativeOverlayScale");
const NativeOverlayResizeMode_1 = require("./NativeOverlayResizeMode");
const NativeOverlayOpacity_1 = require("./NativeOverlayOpacity");
const NativeOverlayMargins_1 = require("./NativeOverlayMargins");
const Styles = {
    container: Object.assign({}, AppStyles_1.default.Layout.vbox, { margin: 0, flex: 1 }),
    content: {
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        overflowY: 'scroll',
        overflowX: 'hidden'
    },
    sectionTitle: {
        color: Colors_1.default.tag,
        marginBottom: 10,
        marginTop: 20
    },
    row: Object.assign({}, AppStyles_1.default.Layout.hbox, { padding: '15px 20px', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${Colors_1.default.line}`, cursor: 'pointer' }),
    name: {
        color: Colors_1.default.tag,
        textAlign: 'left',
        flex: 1
    },
    iconSize: 24,
    upload: {
        paddingRight: 10,
        cursor: 'pointer'
    },
    delete: {
        cursor: 'pointer'
    },
    dropZone: Object.assign({}, AppStyles_1.default.Layout.vbox, { height: 200, width: 200, backgroundColor: Colors_1.default.subtleLine, borderRadius: 2, border: `1px solid ${Colors_1.default.backgroundSubtleDark}`, justifyContent: 'center', alignItems: 'center' }),
    overlayPreview: {
        maxWidth: '100%',
        maxHeight: '100%'
    }
};
let Native = class Native extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0.5,
            scale: 1,
            width: null,
            height: null,
            justifyContent: 'center',
            alignItems: 'center',
            growToWindow: false,
            resizeMode: null,
            layoutType: 'image',
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0
        };
        this.handleDrop = this.handleDrop.bind(this);
        this.import = this.import.bind(this);
        this.handleLayoutTypeChange = this.handleLayoutTypeChange.bind(this);
        this.handleAlignmentChange = this.handleAlignmentChange.bind(this);
        this.handleScaleChange = this.handleScaleChange.bind(this);
        this.handleResizeModeChange = this.handleResizeModeChange.bind(this);
        this.handleOpacityChange = this.handleOpacityChange.bind(this);
        this.handleMarginsChange = this.handleMarginsChange.bind(this);
        this.removeImage = this.removeImage.bind(this);
    }
    /**
     * Fires when the user drops a filesystem object on the drop zone.
     *
     * @param {any} event The event.
     *
     * @memberOf Native
     */
    handleDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.dataTransfer.files.length !== 1)
            return false;
        const file = event.dataTransfer.files[0];
        this.import(file.path);
        return false;
    }
    /**
     * Import an image from the file path.
     *
     * @param {any} file
     *
     * @memberOf Native
     */
    import(path) {
        const { ui } = this.props.session;
        const { opacity, scale, justifyContent, alignItems, resizeMode, growToWindow } = this.state;
        // need to load from a buffer because electron has a problem reading
        // from '@2x.png' named files.  :|
        fs_1.default.readFile(path, (err, data) => {
            if (!err) {
                const image = electron_1.nativeImage.createFromBuffer(data);
                const uri = image.toDataURL();
                const { width, height } = image.getSize();
                this.setState({ uri, width, height });
                ui.setOverlay({
                    uri,
                    width: width * scale,
                    height: height * scale,
                    justifyContent,
                    alignItems,
                    opacity,
                    growToWindow,
                    resizeMode
                });
            }
        });
    }
    handleAlignmentChange(justifyContent, alignItems) {
        const { ui } = this.props.session;
        this.setState({ justifyContent, alignItems });
        ui.setOverlay({ justifyContent, alignItems });
    }
    handleLayoutTypeChange(layoutType) {
        const { ui } = this.props.session;
        const { resizeMode, width, height, scale } = this.state;
        const growToWindow = layoutType === 'screen';
        const newResizeMode = growToWindow ? 'stretch' : resizeMode;
        this.setState({ layoutType, growToWindow, resizeMode: newResizeMode });
        ui.setOverlay({
            growToWindow,
            resizeMode: newResizeMode,
            width: growToWindow ? width : width * scale,
            height: growToWindow ? height : height * scale
        });
    }
    handleScaleChange(scale) {
        const { ui } = this.props.session;
        const { width, height } = this.state;
        this.setState({ scale });
        if (width && height) {
            ui.setOverlay({ width: width * scale, height: height * scale });
        }
    }
    handleOpacityChange(opacity) {
        const { ui } = this.props.session;
        if (this.state.opacity === opacity) {
            opacity = 0;
        }
        this.setState({ opacity });
        if (this.state.uri) {
            ui.setOverlay({ opacity });
        }
    }
    /**
     * Fires when the the user changes any of the margins
     *
     * @param {any} newMargins An object with one of the 4 margins & its value.
     *
     * @memberOf Native
     */
    handleMarginsChange(newMargins) {
        const { ui } = this.props.session;
        const oldMargins = ramda_1.pick(['marginTop', 'marginRight', 'marginBottom', 'marginLeft'], this.state);
        const margins = Object.assign({}, oldMargins, newMargins);
        this.setState(margins);
        ui.setOverlay(margins);
    }
    /**
     * Fires when the user changes the resize mode.
     *
     * @param {string} resizeMode The new resize mode.
     *
     * @memberOf Native
     */
    handleResizeModeChange(resizeMode) {
        const { ui } = this.props.session;
        const { width, height } = this.state;
        const growToWindow = resizeMode !== 'scale';
        this.setState({ resizeMode, growToWindow });
        if (width && height) {
            ui.setOverlay({ resizeMode, growToWindow, width, height });
        }
    }
    removeImage(event) {
        event.stopPropagation();
        event.preventDefault();
        const { ui } = this.props.session;
        this.setState({ uri: null, width: null, height: null, scale: 1, alignItems: 'center', justifyContent: 'center' });
        ui.setOverlay({ uri: null });
    }
    renderImagePreview() {
        const { uri } = this.state;
        if (uri) {
            return (react_1.default.createElement("img", { src: uri, style: Styles.overlayPreview, onClick: this.removeImage }));
        }
        else {
            return react_1.default.createElement("p", null, "Drop Image Here");
        }
    }
    renderLayoutType() {
        const { uri } = this.state;
        if (!uri)
            return react_1.default.createElement("div", null);
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("div", { style: Styles.sectionTitle }, "Layout"),
            react_1.default.createElement(NativeOverlayLayoutType_1.default, { layoutType: this.state.layoutType, onChange: this.handleLayoutTypeChange })));
    }
    renderAlignment() {
        const { uri, layoutType } = this.state;
        if (!uri || layoutType !== 'image')
            return react_1.default.createElement("div", null);
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("div", { style: Styles.sectionTitle }, "Alignment"),
            react_1.default.createElement(NativeOverlayAlignment_1.default, { alignItems: this.state.alignItems, justifyContent: this.state.justifyContent, onChange: this.handleAlignmentChange })));
    }
    renderScale() {
        const { uri, layoutType } = this.state;
        if (!uri || layoutType !== 'image')
            return react_1.default.createElement("div", null);
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("div", { style: Styles.sectionTitle }, "Scale"),
            react_1.default.createElement(NativeOverlayScale_1.default, { scale: this.state.scale, onChange: this.handleScaleChange })));
    }
    renderResizeMode() {
        const { uri, layoutType } = this.state;
        if (!uri || layoutType !== 'screen')
            return react_1.default.createElement("div", null);
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("div", { style: Styles.sectionTitle }, "Resize"),
            react_1.default.createElement(NativeOverlayResizeMode_1.default, { resizeMode: this.state.resizeMode, onChange: this.handleResizeModeChange })));
    }
    renderOpacity() {
        if (!this.state.uri)
            return react_1.default.createElement("div", null);
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("div", { style: Styles.sectionTitle }, "Opacity"),
            react_1.default.createElement(NativeOverlayOpacity_1.default, { opacity: this.state.opacity, onChange: this.handleOpacityChange })));
    }
    renderMargins() {
        if (!this.state.uri)
            return react_1.default.createElement("div", null);
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("div", { style: Styles.sectionTitle }, "Margins"),
            react_1.default.createElement(NativeOverlayMargins_1.default, { marginTop: this.state.marginTop, marginRight: this.state.marginRight, marginBottom: this.state.marginBottom, marginLeft: this.state.marginLeft, onChange: this.handleMarginsChange })));
    }
    render() {
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement(NativeHeader_1.default, null),
            react_1.default.createElement("div", { style: Styles.content },
                react_1.default.createElement("div", { style: Styles.sectionTitle }, "Overlay Image"),
                react_1.default.createElement("div", { style: Styles.backups },
                    react_1.default.createElement("div", { style: Styles.dropZone, onDrop: this.handleDrop, onDragOver: ramda_1.F, onDragLeave: ramda_1.F, onDragEnd: ramda_1.F }, this.renderImagePreview())),
                this.renderLayoutType(),
                this.renderScale(),
                this.renderResizeMode(),
                this.renderAlignment(),
                this.renderOpacity(),
                this.renderMargins())));
    }
};
Native = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], Native);
exports.default = Native;
//# sourceMappingURL=Native.js.map
});
___scope___.file("renderer/Foundation/NativeHeader.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const AppStyles_1 = require("../Theme/AppStyles");
const mobx_react_1 = require("mobx-react");
const TITLE = 'React Native';
const toolbarButton = {
    cursor: 'pointer'
};
const Styles = {
    container: {
        WebkitAppRegion: 'drag',
        backgroundColor: Colors_1.default.backgroundSubtleLight,
        borderBottom: `1px solid ${Colors_1.default.chromeLine}`,
        color: Colors_1.default.foregroundDark,
        boxShadow: `0px 0px 30px ${Colors_1.default.glow}`
    },
    content: Object.assign({ height: 60, paddingLeft: 10, paddingRight: 10 }, AppStyles_1.default.Layout.hbox, { justifyContent: 'space-between' }),
    left: Object.assign({}, AppStyles_1.default.Layout.hbox, { width: 100 }),
    right: Object.assign({ width: 100 }, AppStyles_1.default.Layout.hbox, { justifyContent: 'flex-end', alignItems: 'center' }),
    center: Object.assign({}, AppStyles_1.default.Layout.vbox, { flex: 1, alignItems: 'center', justifyContent: 'center' }),
    title: {
        color: Colors_1.default.foregroundLight,
        textAlign: 'center'
    },
    iconSize: 32,
    toolbarAdd: Object.assign({}, toolbarButton)
};
let NativeHeader = class NativeHeader extends react_1.Component {
    render() {
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement("div", { style: Styles.content },
                react_1.default.createElement("div", { style: Styles.left }),
                react_1.default.createElement("div", { style: Styles.center },
                    react_1.default.createElement("div", { style: Styles.title }, TITLE)),
                react_1.default.createElement("div", { style: Styles.right }))));
    }
};
NativeHeader = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], NativeHeader);
exports.default = NativeHeader;
//# sourceMappingURL=NativeHeader.js.map
});
___scope___.file("renderer/Foundation/NativeOverlayLayoutType.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const Styles = {
    container: {},
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        height: 30,
        width: 75,
        fontSize: 13,
        marginRight: 4,
        backgroundColor: Colors_1.default.subtleLine,
        borderRadius: 2,
        border: `1px solid ${Colors_1.default.backgroundSubtleDark}`,
        cursor: 'pointer',
        color: Colors_1.default.foregroundDark
    },
    buttonActive: {
        color: Colors_1.default.bold
    }
};
class NativeOverlayLayoutType extends react_1.Component {
    render() {
        const { onChange, layoutType } = this.props;
        const makeHandler = newlayoutType => event => {
            event.stopPropagation();
            event.preventDefault();
            onChange(newlayoutType);
            return false;
        };
        const makeButtonStyle = value => layoutType === value ? Object.assign({}, Styles.button, Styles.buttonActive) : Styles.button;
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement("div", { style: Styles.row },
                react_1.default.createElement("button", { style: makeButtonStyle('image'), onClick: makeHandler('image') }, "Image"),
                react_1.default.createElement("button", { style: makeButtonStyle('screen'), onClick: makeHandler('screen') }, "Screen"))));
    }
}
NativeOverlayLayoutType.propTypes = {
    layoutType: react_1.PropTypes.string.isRequired,
    onChange: react_1.PropTypes.func.isRequired
};
exports.default = NativeOverlayLayoutType;
//# sourceMappingURL=NativeOverlayLayoutType.js.map
});
___scope___.file("renderer/Foundation/NativeOverlayAlignment.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const NativeOverlayAlignmentButton_1 = require("./NativeOverlayAlignmentButton");
const Styles = {
    container: {},
    row: {
        display: 'flex',
        flexDirection: 'row'
    }
};
class NativeOverlayAlignment extends react_1.Component {
    render() {
        const { onChange, justifyContent, alignItems } = this.props;
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement("div", { style: Styles.row },
                react_1.default.createElement(NativeOverlayAlignmentButton_1.default, { justifyContent: 'flex-start', alignItems: 'flex-start', selectedJustifyContent: justifyContent, selectedAlignItems: alignItems, onClick: onChange }),
                react_1.default.createElement(NativeOverlayAlignmentButton_1.default, { justifyContent: 'flex-start', alignItems: 'center', selectedJustifyContent: justifyContent, selectedAlignItems: alignItems, onClick: onChange }),
                react_1.default.createElement(NativeOverlayAlignmentButton_1.default, { justifyContent: 'flex-start', alignItems: 'flex-end', selectedJustifyContent: justifyContent, selectedAlignItems: alignItems, onClick: onChange })),
            react_1.default.createElement("div", { style: Styles.row },
                react_1.default.createElement(NativeOverlayAlignmentButton_1.default, { justifyContent: 'center', alignItems: 'flex-start', selectedJustifyContent: justifyContent, selectedAlignItems: alignItems, onClick: onChange }),
                react_1.default.createElement(NativeOverlayAlignmentButton_1.default, { justifyContent: 'center', alignItems: 'center', selectedJustifyContent: justifyContent, selectedAlignItems: alignItems, onClick: onChange }),
                react_1.default.createElement(NativeOverlayAlignmentButton_1.default, { justifyContent: 'center', alignItems: 'flex-end', selectedJustifyContent: justifyContent, selectedAlignItems: alignItems, onClick: onChange })),
            react_1.default.createElement("div", { style: Styles.row },
                react_1.default.createElement(NativeOverlayAlignmentButton_1.default, { justifyContent: 'flex-end', alignItems: 'flex-start', selectedJustifyContent: justifyContent, selectedAlignItems: alignItems, onClick: onChange }),
                react_1.default.createElement(NativeOverlayAlignmentButton_1.default, { justifyContent: 'flex-end', alignItems: 'center', selectedJustifyContent: justifyContent, selectedAlignItems: alignItems, onClick: onChange }),
                react_1.default.createElement(NativeOverlayAlignmentButton_1.default, { justifyContent: 'flex-end', alignItems: 'flex-end', selectedJustifyContent: justifyContent, selectedAlignItems: alignItems, onClick: onChange }))));
    }
}
NativeOverlayAlignment.propTypes = {
    justifyContent: react_1.PropTypes.string.isRequired,
    alignItems: react_1.PropTypes.string.isRequired,
    onChange: react_1.PropTypes.func.isRequired
};
exports.default = NativeOverlayAlignment;
//# sourceMappingURL=NativeOverlayAlignment.js.map
});
___scope___.file("renderer/Foundation/NativeOverlayAlignmentButton.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const ramda_1 = require("ramda");
const Icon = require(`react-icons/lib/md/stop`);
const Styles = {
    container: {
        color: Colors_1.default.subtleLine,
        cursor: 'pointer'
    },
    containerActive: {
        color: Colors_1.default.bold
    },
    iconSize: 32
};
class NativeOverlayAlignmentButton extends react_1.Component {
    render() {
        const { selectedJustifyContent, selectedAlignItems, onClick, justifyContent, alignItems } = this.props;
        const isActive = selectedJustifyContent === justifyContent && selectedAlignItems === alignItems;
        const containerStyles = ramda_1.merge(Styles.container, isActive ? Styles.containerActive : {});
        const handleClick = event => {
            event.stopPropagation();
            event.preventDefault();
            onClick(justifyContent, alignItems);
        };
        return (react_1.default.createElement("div", { style: containerStyles, onClick: handleClick },
            react_1.default.createElement(Icon, { size: Styles.iconSize })));
    }
}
NativeOverlayAlignmentButton.propTypes = {
    onClick: react_1.PropTypes.func.isRequired,
    justifyContent: react_1.PropTypes.string.isRequired,
    alignItems: react_1.PropTypes.string.isRequired
};
exports.default = NativeOverlayAlignmentButton;
//# sourceMappingURL=NativeOverlayAlignmentButton.js.map
});
___scope___.file("renderer/Foundation/NativeOverlayScale.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const Styles = {
    container: {},
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        height: 30,
        padding: '0 15px',
        fontSize: 13,
        marginRight: 4,
        backgroundColor: Colors_1.default.subtleLine,
        borderRadius: 2,
        border: `1px solid ${Colors_1.default.backgroundSubtleDark}`,
        cursor: 'pointer',
        color: Colors_1.default.foregroundDark
    },
    buttonActive: {
        color: Colors_1.default.bold
    }
};
class NativeOverlayScale extends react_1.Component {
    render() {
        const { onChange, scale } = this.props;
        const makeHandler = newScale => event => {
            event.stopPropagation();
            event.preventDefault();
            onChange(newScale);
            return false;
        };
        const makeButtonStyle = value => scale === value ? Object.assign({}, Styles.button, Styles.buttonActive) : Styles.button;
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement("div", { style: Styles.row },
                react_1.default.createElement("button", { style: makeButtonStyle(0.33), onClick: makeHandler(0.33) }, "1/3"),
                react_1.default.createElement("button", { style: makeButtonStyle(0.5), onClick: makeHandler(0.5) }, "1/2"),
                react_1.default.createElement("button", { style: makeButtonStyle(1), onClick: makeHandler(1) }, "1"),
                react_1.default.createElement("button", { style: makeButtonStyle(2), onClick: makeHandler(2) }, "2"),
                react_1.default.createElement("button", { style: makeButtonStyle(3), onClick: makeHandler(3) }, "3"))));
    }
}
NativeOverlayScale.propTypes = {
    scale: react_1.PropTypes.number.isRequired,
    onChange: react_1.PropTypes.func.isRequired
};
exports.default = NativeOverlayScale;
//# sourceMappingURL=NativeOverlayScale.js.map
});
___scope___.file("renderer/Foundation/NativeOverlayResizeMode.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const Styles = {
    container: {},
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        height: 30,
        width: 75,
        fontSize: 13,
        marginRight: 4,
        backgroundColor: Colors_1.default.subtleLine,
        borderRadius: 2,
        border: `1px solid ${Colors_1.default.backgroundSubtleDark}`,
        cursor: 'pointer',
        color: Colors_1.default.foregroundDark
    },
    buttonActive: {
        color: Colors_1.default.bold
    }
};
class NativeOverlayResize extends react_1.Component {
    render() {
        const { onChange, resizeMode } = this.props;
        const makeHandler = newResizeMode => event => {
            event.stopPropagation();
            event.preventDefault();
            onChange(newResizeMode);
            return false;
        };
        const makeButtonStyle = value => resizeMode === value ? Object.assign({}, Styles.button, Styles.buttonActive) : Styles.button;
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement("div", { style: Styles.row },
                react_1.default.createElement("button", { style: makeButtonStyle('stretch'), onClick: makeHandler('stretch') }, "Stretch"),
                react_1.default.createElement("button", { style: makeButtonStyle('cover'), onClick: makeHandler('cover') }, "Cover"),
                react_1.default.createElement("button", { style: makeButtonStyle('contain'), onClick: makeHandler('contain') }, "Contain"))));
    }
}
NativeOverlayResize.propTypes = {
    resizeMode: react_1.PropTypes.string.isRequired,
    onChange: react_1.PropTypes.func.isRequired
};
exports.default = NativeOverlayResize;
//# sourceMappingURL=NativeOverlayResizeMode.js.map
});
___scope___.file("renderer/Foundation/NativeOverlayOpacity.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const Styles = {
    container: {},
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        height: 30,
        padding: '0 15px',
        fontSize: 13,
        marginRight: 4,
        backgroundColor: Colors_1.default.subtleLine,
        borderRadius: 2,
        border: `1px solid ${Colors_1.default.backgroundSubtleDark}`,
        cursor: 'pointer',
        color: Colors_1.default.foregroundDark
    },
    buttonActive: {
        color: Colors_1.default.bold
    }
};
class NativeOverlayOpacity extends react_1.Component {
    render() {
        const { onChange, opacity } = this.props;
        const makeHandler = newOpacity => event => {
            event.stopPropagation();
            event.preventDefault();
            onChange(newOpacity);
            return false;
        };
        const makeButtonStyle = value => opacity === value ? Object.assign({}, Styles.button, Styles.buttonActive) : Styles.button;
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement("div", { style: Styles.row },
                react_1.default.createElement("button", { style: makeButtonStyle(0), onClick: makeHandler(0) }, "0"),
                react_1.default.createElement("button", { style: makeButtonStyle(0.1), onClick: makeHandler(0.1) }, "0.1"),
                react_1.default.createElement("button", { style: makeButtonStyle(0.25), onClick: makeHandler(0.25) }, "0.25"),
                react_1.default.createElement("button", { style: makeButtonStyle(0.5), onClick: makeHandler(0.5) }, "0.5"),
                react_1.default.createElement("button", { style: makeButtonStyle(0.75), onClick: makeHandler(0.75) }, "0.75"),
                react_1.default.createElement("button", { style: makeButtonStyle(0.9), onClick: makeHandler(0.9) }, "0.9"),
                react_1.default.createElement("button", { style: makeButtonStyle(1), onClick: makeHandler(1) }, "1"))));
    }
}
NativeOverlayOpacity.propTypes = {
    opacity: react_1.PropTypes.number.isRequired,
    onChange: react_1.PropTypes.func.isRequired
};
exports.default = NativeOverlayOpacity;
//# sourceMappingURL=NativeOverlayOpacity.js.map
});
___scope___.file("renderer/Foundation/NativeOverlayMargins.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const Styles = {
    container: {},
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        marginRight: 4
    },
    field: {
        marginRight: 4,
        width: 45,
        border: 0,
        padding: '8px 5px',
        fontSize: '1.1rem',
        backgroundColor: Colors_1.default.backgroundLight,
        color: Colors_1.default.backgroundColor
    }
};
class NativeOverlayMargins extends react_1.default.PureComponent {
    render() {
        const { onChange, marginTop, marginRight, marginBottom, marginLeft } = this.props;
        const makeHandler = whichMargin => event => {
            event.stopPropagation();
            event.preventDefault();
            const newValue = Number(event.target.value || 0);
            const value = isNaN(newValue) ? 0 : newValue;
            onChange({ [whichMargin]: value });
            return false;
        };
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement("div", { style: Styles.row },
                react_1.default.createElement("div", { style: Styles.label }, "Top"),
                react_1.default.createElement("input", { style: Styles.field, onChange: makeHandler('marginTop'), value: marginTop, tabIndex: 10 }),
                react_1.default.createElement("div", { style: Styles.label }, "Right"),
                react_1.default.createElement("input", { style: Styles.field, onChange: makeHandler('marginRight'), value: marginRight, tabIndex: 11 }),
                react_1.default.createElement("div", { style: Styles.label }, "Bottom"),
                react_1.default.createElement("input", { style: Styles.field, onChange: makeHandler('marginBottom'), value: marginBottom, tabIndex: 12 }),
                react_1.default.createElement("div", { style: Styles.label }, "Left"),
                react_1.default.createElement("input", { style: Styles.field, onChange: makeHandler('marginLeft'), value: marginLeft, tabIndex: 13 }))));
    }
}
NativeOverlayMargins.propTypes = {
    marginLeft: react_1.PropTypes.number,
    marginRight: react_1.PropTypes.number,
    marginTop: react_1.PropTypes.number,
    marginBottom: react_1.PropTypes.number,
    onChange: react_1.PropTypes.func.isRequired
};
exports.default = NativeOverlayMargins;
//# sourceMappingURL=NativeOverlayMargins.js.map
});
___scope___.file("renderer/Foundation/Sidebar.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const AppStyles_1 = require("../Theme/AppStyles");
const Colors_1 = require("../Theme/Colors");
const SidebarButton_1 = require("./SidebarButton");
const mobx_react_1 = require("mobx-react");
const Styles = {
    container: {
        zIndex: 5,
        maxWidth: 115,
        backgroundColor: Colors_1.default.backgroundSubtleDark,
        boxShadow: `0px 0px 30px ${Colors_1.default.glow}`,
        borderRight: `1px solid ${Colors_1.default.chromeLine}`,
        WebkitAppRegion: 'drag'
    },
    content: Object.assign({}, AppStyles_1.default.Layout.vbox, { height: '100vh', alignItems: 'center' }),
    tabs: {
        paddingTop: 20
    },
    spacer: {
        flex: 1
    }
};
let Sidebar = class Sidebar extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleClickTimeline = () => { this.props.session.ui.switchTab('timeline'); };
        this.handleClickSubscriptions = () => { this.props.session.ui.switchTab('subscriptions'); };
        this.handleClickHelp = () => { this.props.session.ui.switchTab('help'); };
        this.handleClickSettings = () => { this.props.session.ui.switchTab('settings'); };
        this.handleClickBackups = () => { this.props.session.ui.switchTab('backups'); };
        this.handleClickNative = () => { this.props.session.ui.switchTab('native'); };
    }
    render() {
        const { session } = this.props;
        const { ui } = session;
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement("div", { style: Styles.content },
                react_1.default.createElement("div", { style: Styles.tabs },
                    react_1.default.createElement(SidebarButton_1.default, { text: 'Timeline', icon: 'reorder', hideTopBorder: true, isActive: ui.tab === 'timeline', onClick: this.handleClickTimeline }),
                    react_1.default.createElement(SidebarButton_1.default, { text: 'Redux Subscriptions', icon: 'notifications-none', isActive: ui.tab === 'subscriptions', onClick: this.handleClickSubscriptions }),
                    react_1.default.createElement(SidebarButton_1.default, { text: 'Redux Snapshots', icon: 'import-export', isActive: ui.tab === 'backups', onClick: this.handleClickBackups }),
                    react_1.default.createElement(SidebarButton_1.default, { text: 'React Native', icon: 'phone-iphone', isActive: ui.tab === 'native', onClick: this.handleClickNative })),
                react_1.default.createElement("div", { style: Styles.spacer }),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(SidebarButton_1.default, { text: 'Help', icon: 'live-help', hideTopBorder: true, isActive: ui.tab === 'help', onClick: this.handleClickHelp })))));
    }
};
Sidebar = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], Sidebar);
exports.default = Sidebar;
//# sourceMappingURL=Sidebar.js.map
});
___scope___.file("renderer/Foundation/SidebarButton.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const AppStyles_1 = require("../Theme/AppStyles");
const Colors_1 = require("../Theme/Colors");
const ramda_1 = require("ramda");
const Styles = {
    container: Object.assign({}, AppStyles_1.default.Layout.vbox, { alignItems: 'center', paddingTop: 15, marginBottom: 15, color: Colors_1.default.highlight, cursor: 'pointer', borderTop: `1px solid ${Colors_1.default.line}`, marginLeft: 10, marginRight: 10 }),
    containerTop: {
        borderTop: 0
    },
    containerActive: {
        color: Colors_1.default.foregroundLight
    },
    iconSize: 32,
    text: {
        paddingTop: 2,
        textAlign: 'center',
        fontSize: 12
    }
};
class SidebarButton extends react_1.Component {
    render() {
        const { icon, isActive, onClick, hideTopBorder } = this.props;
        const Icon = require(`react-icons/lib/md/${icon}`);
        const containerStyles = ramda_1.mergeAll([
            Styles.container,
            isActive ? Styles.containerActive : {},
            hideTopBorder ? Styles.containerTop : {}
        ]);
        return (react_1.default.createElement("div", { style: containerStyles, onClick: onClick },
            react_1.default.createElement(Icon, { size: Styles.iconSize }),
            react_1.default.createElement("div", { style: Styles.text }, this.props.text)));
    }
}
SidebarButton.propTypes = {
    icon: react_1.PropTypes.string.isRequired,
    text: react_1.PropTypes.string,
    isActive: react_1.PropTypes.bool.isRequired,
    onClick: react_1.PropTypes.func.isRequired,
    hideTopBorder: react_1.PropTypes.bool
};
exports.default = SidebarButton;
//# sourceMappingURL=SidebarButton.js.map
});
___scope___.file("renderer/Foundation/Help.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const AppStyles_1 = require("../Theme/AppStyles");
const HelpHeader_1 = require("./HelpHeader");
const HelpKeystrokes_1 = require("./HelpKeystrokes");
const HelpFeedback_1 = require("./HelpFeedback");
const FEEDBACK = 'Let\'s Connect!';
const KEYSTROKES = 'Keystrokes';
const logoUrl = require('../Theme/Reactotron-128.png');
const Styles = {
    container: Object.assign({}, AppStyles_1.default.Layout.vbox, { margin: 0, flex: 1 }),
    content: Object.assign({ padding: 20, overflowY: 'scroll', overflowX: 'hidden' }, AppStyles_1.default.Layout.vbox),
    logoPanel: {
        alignSelf: 'center'
    },
    logo: {
        alignSelf: 'center',
        height: 128,
        marginTop: 20,
        marginBottom: 20
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
        color: Colors_1.default.foregroundLight,
        paddingBottom: 2,
        borderBottom: `1px solid ${Colors_1.default.highlight}`
    }
};
class Help extends react_1.Component {
    render() {
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement(HelpHeader_1.default, null),
            react_1.default.createElement("div", { style: Styles.content },
                react_1.default.createElement("div", { style: Styles.logoPanel },
                    react_1.default.createElement("img", { src: logoUrl, style: Styles.logo })),
                react_1.default.createElement("div", { style: Styles.title }, FEEDBACK),
                react_1.default.createElement(HelpFeedback_1.default, null),
                react_1.default.createElement("div", { style: Styles.title }, KEYSTROKES),
                react_1.default.createElement(HelpKeystrokes_1.default, null))));
    }
}
exports.default = Help;
//# sourceMappingURL=Help.js.map
});
___scope___.file("renderer/Foundation/HelpHeader.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const AppStyles_1 = require("../Theme/AppStyles");
const mobx_react_1 = require("mobx-react");
const TITLE = 'Using Reactotron';
const Styles = {
    container: {
        WebkitAppRegion: 'drag',
        backgroundColor: Colors_1.default.backgroundSubtleLight,
        borderBottom: `1px solid ${Colors_1.default.chromeLine}`,
        color: Colors_1.default.foregroundDark,
        boxShadow: `0px 0px 30px ${Colors_1.default.glow}`
    },
    content: Object.assign({ height: 60 }, AppStyles_1.default.Layout.hbox, { alignItems: 'center', justifyContent: 'center' }),
    title: {
        color: Colors_1.default.foregroundLight,
        textAlign: 'center'
    }
};
let TimelineHeader = class TimelineHeader extends react_1.Component {
    render() {
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement("div", { style: Styles.content },
                react_1.default.createElement("div", { style: Styles.title }, TITLE))));
    }
};
TimelineHeader = __decorate([
    mobx_react_1.inject('session'),
    mobx_react_1.observer
], TimelineHeader);
exports.default = TimelineHeader;
//# sourceMappingURL=HelpHeader.js.map
});
___scope___.file("renderer/Foundation/HelpKeystrokes.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const AppStyles_1 = require("../Theme/AppStyles");
const Key_1 = require("../Shared/Key");
const Keystroke_1 = require("../Lib/Keystroke");
const Styles = {
    container: {
        color: Colors_1.default.foreground
    },
    helpLabel: {
        width: 160
    },
    key: {
        color: Colors_1.default.foregroundLight,
        textTransform: 'uppercase',
        borderRadius: 4,
        backgroundColor: Colors_1.default.foreground,
        padding: '4px 8px',
        fontWeight: 'bold',
        borderBottom: `2px solid ${Colors_1.default.highlight}`
    },
    helpDetail: {
        color: Colors_1.default.foreground
    },
    group: Object.assign({}, AppStyles_1.default.Layout.vbox, { marginTop: 0, marginBottom: 30, color: Colors_1.default.highlight }),
    category: {
        color: Colors_1.default.highlight
    },
    helpShortcut: Object.assign({}, AppStyles_1.default.Layout.hbox, { padding: '10px 0px' }),
    both: {}
};
class HelpKeystrokes extends react_1.Component {
    render() {
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement("div", { style: Styles.both },
                react_1.default.createElement("div", { style: Styles.group },
                    react_1.default.createElement("div", { style: Styles.category }, "Navigation"),
                    react_1.default.createElement("div", { style: Styles.helpShortcut },
                        react_1.default.createElement("div", { style: Styles.helpLabel },
                            react_1.default.createElement(Key_1.default, { text: Keystroke_1.default.modifierName }),
                            "+",
                            react_1.default.createElement(Key_1.default, { text: '1' })),
                        react_1.default.createElement("div", { style: Styles.helpDetail }, "view timeline")),
                    react_1.default.createElement("div", { style: Styles.helpShortcut },
                        react_1.default.createElement("div", { style: Styles.helpLabel },
                            react_1.default.createElement(Key_1.default, { text: Keystroke_1.default.modifierName }),
                            "+",
                            react_1.default.createElement(Key_1.default, { text: '2' })),
                        react_1.default.createElement("div", { style: Styles.helpDetail }, "view redux subscriptions")),
                    react_1.default.createElement("div", { style: Styles.helpShortcut },
                        react_1.default.createElement("div", { style: Styles.helpLabel },
                            react_1.default.createElement(Key_1.default, { text: Keystroke_1.default.modifierName }),
                            "+",
                            react_1.default.createElement(Key_1.default, { text: '3' })),
                        react_1.default.createElement("div", { style: Styles.helpDetail }, "view redux snapshots")),
                    react_1.default.createElement("div", { style: Styles.helpShortcut },
                        react_1.default.createElement("div", { style: Styles.helpLabel },
                            react_1.default.createElement(Key_1.default, { text: Keystroke_1.default.modifierName }),
                            "+",
                            react_1.default.createElement(Key_1.default, { text: '4' })),
                        react_1.default.createElement("div", { style: Styles.helpDetail }, "view React Native tools")),
                    react_1.default.createElement("div", { style: Styles.helpShortcut },
                        react_1.default.createElement("div", { style: Styles.helpLabel },
                            react_1.default.createElement(Key_1.default, { text: Keystroke_1.default.modifierName }),
                            "+",
                            react_1.default.createElement(Key_1.default, { text: '/' })),
                        react_1.default.createElement("div", { style: Styles.helpDetail }, "view help"))),
                react_1.default.createElement("div", { style: Styles.group },
                    react_1.default.createElement("div", { style: Styles.category }, "State Goodies"),
                    react_1.default.createElement("div", { style: Styles.helpShortcut },
                        react_1.default.createElement("div", { style: Styles.helpLabel },
                            react_1.default.createElement(Key_1.default, { text: Keystroke_1.default.modifierName }),
                            "+",
                            react_1.default.createElement(Key_1.default, { text: 'F' })),
                        react_1.default.createElement("div", { style: Styles.helpDetail }, "find keys or values")),
                    react_1.default.createElement("div", { style: Styles.helpShortcut },
                        react_1.default.createElement("div", { style: Styles.helpLabel },
                            react_1.default.createElement(Key_1.default, { text: Keystroke_1.default.modifierName }),
                            "+",
                            react_1.default.createElement(Key_1.default, { text: '⬆' }),
                            "+",
                            react_1.default.createElement(Key_1.default, { text: 'F' })),
                        react_1.default.createElement("div", { style: Styles.helpDetail }, "filter timeline")),
                    react_1.default.createElement("div", { style: Styles.helpShortcut },
                        react_1.default.createElement("div", { style: Styles.helpLabel },
                            react_1.default.createElement(Key_1.default, { text: Keystroke_1.default.modifierName }),
                            "+",
                            react_1.default.createElement(Key_1.default, { text: 'N' })),
                        react_1.default.createElement("div", { style: Styles.helpDetail }, "new subscription")),
                    react_1.default.createElement("div", { style: Styles.helpShortcut },
                        react_1.default.createElement("div", { style: Styles.helpLabel },
                            react_1.default.createElement(Key_1.default, { text: Keystroke_1.default.modifierName }),
                            "+",
                            react_1.default.createElement(Key_1.default, { text: 'D' })),
                        react_1.default.createElement("div", { style: Styles.helpDetail }, "dispatch an action")),
                    react_1.default.createElement("div", { style: Styles.helpShortcut },
                        react_1.default.createElement("div", { style: Styles.helpLabel },
                            react_1.default.createElement(Key_1.default, { text: Keystroke_1.default.modifierName }),
                            "+",
                            react_1.default.createElement(Key_1.default, { text: 'S' })),
                        react_1.default.createElement("div", { style: Styles.helpDetail }, "take a snapshot of current state"))),
                react_1.default.createElement("div", { style: Styles.group },
                    react_1.default.createElement("div", { style: Styles.category }, "Miscellaneous"),
                    react_1.default.createElement("div", { style: Styles.helpShortcut },
                        react_1.default.createElement("div", { style: Styles.helpLabel },
                            react_1.default.createElement(Key_1.default, { text: Keystroke_1.default.modifierName }),
                            "+",
                            react_1.default.createElement(Key_1.default, { text: 'K' })),
                        react_1.default.createElement("div", { style: Styles.helpDetail }, "klear!"))))));
    }
}
exports.default = HelpKeystrokes;
//# sourceMappingURL=HelpKeystrokes.js.map
});
___scope___.file("renderer/Foundation/HelpFeedback.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Colors_1 = require("../Theme/Colors");
const AppStyles_1 = require("../Theme/AppStyles");
const electron_1 = require("electron");
const Styles = {
    container: {
        color: Colors_1.default.foreground,
        marginBottom: 50
    },
    content: Object.assign({}, AppStyles_1.default.Layout.hbox, { alignItems: 'flex-start' }),
    iconSize: 40,
    link: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 10,
        cursor: 'pointer',
        backgroundColor: Colors_1.default.chrome,
        margin: 5,
        borderRadius: 8,
        width: 100,
        border: `1px solid ${Colors_1.default.chromeLine}`
    },
    icon: {
        marginBottom: 8,
        color: Colors_1.default.foregroundLight
    },
    text: {},
    spacer: {
        flex: 1
    }
};
const RepoIcon = require('react-icons/lib/go/mark-github');
const FeedbackIcon = require('react-icons/lib/go/comment');
const ReleaseIcon = require('react-icons/lib/go/squirrel');
const TwitterIcon = require('react-icons/lib/fa/twitter');
class HelpFeedback extends react_1.Component {
    constructor(props) {
        super(props);
        this.openRepo = () => electron_1.shell.openExternal('https://github.com/infinitered/reactotron');
        this.feedback = () => electron_1.shell.openExternal('https://github.com/infinitered/reactotron/issues/new');
        this.checkUpdates = () => electron_1.shell.openExternal('https://github.com/infinitered/reactotron/releases');
        this.twitter = () => electron_1.shell.openExternal('https://twitter.com/reactotron');
    }
    render() {
        return (react_1.default.createElement("div", { style: Styles.container },
            react_1.default.createElement("div", { style: Styles.content },
                react_1.default.createElement("div", { style: Styles.link, onClick: this.openRepo },
                    react_1.default.createElement(RepoIcon, { size: Styles.iconSize, style: Styles.icon }),
                    react_1.default.createElement("div", { style: Styles.text }, "Repo")),
                react_1.default.createElement("div", { style: Styles.link, onClick: this.feedback },
                    react_1.default.createElement(FeedbackIcon, { size: Styles.iconSize, style: Styles.icon }),
                    react_1.default.createElement("div", { style: Styles.text }, "Feedback")),
                react_1.default.createElement("div", { style: Styles.link, onClick: this.checkUpdates },
                    react_1.default.createElement(ReleaseIcon, { size: Styles.iconSize, style: Styles.icon }),
                    react_1.default.createElement("div", { style: Styles.text }, "Updates")),
                react_1.default.createElement("div", { style: Styles.link, onClick: this.twitter },
                    react_1.default.createElement(TwitterIcon, { size: Styles.iconSize, style: Styles.icon }),
                    react_1.default.createElement("div", { style: Styles.text }, "@reactotron")),
                react_1.default.createElement("div", { style: Styles.spacer }))));
    }
}
exports.default = HelpFeedback;
//# sourceMappingURL=HelpFeedback.js.map
});
___scope___.file("renderer/Theme/Reactotron-128.png", function(exports, require, module, __filename, __dirname){

module.exports = "assets/b1cdcb81-Reactotron-128.png";
});
___scope___.file("renderer/Stores/SessionStore.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const UiStore_1 = require("./UiStore");
const reactotron_core_server_1 = require("reactotron-core-server");
const mobx_1 = require("mobx");
const ramda_1 = require("ramda");
const ramdasauce_1 = require("ramdasauce");
const ShallowDiff_1 = require("../Lib/ShallowDiff");
const isSubscription = ramda_1.propEq('type', 'state.values.change');
const isSubscriptionCommandWithEmptyChanges = command => isSubscription(command) && ramdasauce_1.dotPath('payload.changes.length', command) === 0;
class Session {
    constructor(port = 9090) {
        // commands to exlude in the timeline
        this.commandsHiddenInTimeline = [];
        // holds the last known state of the subscription values
        this.subscriptions = {};
        this.server = reactotron_core_server_1.createServer({ port });
        this.server.start();
        this.isSubscriptionValuesSameAsLastTime = this.isSubscriptionValuesSameAsLastTime.bind(this);
        // create the ui store
        this.ui = new UiStore_1.default(this.server);
        // hide or show the watch panel depending if we have watches
        mobx_1.reaction(() => this.watches.length > 0, show => { this.ui.showWatchPanel = show; });
        // when a new backup arrives, open the editor to rename it
        mobx_1.observe(this.backups, change => {
            if (change.type === 'splice' && change.added.length === 1) {
                this.ui.openRenameStateDialog(change.added[0]);
            }
        });
    }
    // checks if it was the exact same as last time
    isSubscriptionValuesSameAsLastTime(command) {
        if (!isSubscription(command))
            return false;
        const rawChanges = command.payload ? command.payload.changes : [];
        const newSubscriptions = ramda_1.fromPairs(ramda_1.map(change => ([change.path, change.value]), rawChanges));
        const isNew = !ramda_1.equals(this.subscriptions, newSubscriptions);
        // 🚨🚨🚨 side effect alert 🚨🚨🚨
        if (isNew) {
            const diff = ShallowDiff_1.default(this.subscriptions, newSubscriptions);
            command.payload.changed = ramda_1.map(v => v.rightValue, diff.difference || []);
            command.payload.added = diff.onlyOnRight || [];
            command.payload.removed = diff.onlyOnLeft || [];
            this.subscriptions = newSubscriptions;
        }
        // 🚨🚨🚨 side effect alert 🚨🚨🚨
        return !isNew;
    }
    get commands() {
        return ramda_1.pipe(ramdasauce_1.dotPath('server.commands.all'), ramda_1.reject(isSubscriptionCommandWithEmptyChanges), ramda_1.reject(this.isSubscriptionValuesSameAsLastTime), ramda_1.reject(command => ramda_1.contains(command.type, this.commandsHiddenInTimeline)), ramda_1.reverse)(this);
    }
    get watches() {
        const changeCommands = this.server.commands['state.values.change'];
        if (ramda_1.isNil(changeCommands))
            return [];
        if (changeCommands.length === 0)
            return [];
        const recentCommand = ramda_1.last(changeCommands);
        return ramdasauce_1.dotPath('payload.changes', recentCommand) || [];
    }
    get backups() {
        return this.server.commands['state.backup.response'];
    }
    // are commands of this type hidden?
    isCommandHidden(commandType) {
        return ramda_1.contains(commandType, this.commandsHiddenInTimeline);
    }
    // toggles whether a command type is to be ignored or not
    toggleCommandVisibility(commandType) {
        const hidden = this.isCommandHidden(commandType);
        if (hidden) {
            this.commandsHiddenInTimeline.remove(commandType);
        }
        else {
            this.commandsHiddenInTimeline.push(commandType);
        }
        return !hidden;
    }
}
__decorate([
    mobx_1.observable
], Session.prototype, "commandsHiddenInTimeline", void 0);
__decorate([
    mobx_1.computed
], Session.prototype, "commands", null);
__decorate([
    mobx_1.computed
], Session.prototype, "watches", null);
__decorate([
    mobx_1.computed
], Session.prototype, "backups", null);
__decorate([
    mobx_1.action
], Session.prototype, "toggleCommandVisibility", null);
exports.default = Session;
//# sourceMappingURL=SessionStore.js.map
});
___scope___.file("renderer/Stores/UiStore.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const Mousetrap_min_js_1 = require("../Lib/Mousetrap.min.js");
const ramdasauce_1 = require("ramdasauce");
const Keystroke_1 = require("../Lib/Keystroke");
/**
 * Handles UI state.
 */
class UI {
    constructor(server) {
        /**
         * Which tab are we on?
         */
        this.tab = 'timeline';
        /**
         * Targets state keys or values from the UI & commands.
         */
        this.keysOrValues = 'keys';
        // whether or not to show the state find dialog
        this.showStateFindDialog = false;
        // whether or not to show the state dispatch dialog
        this.showStateDispatchDialog = false;
        // whether or not to show the help dialog
        this.showHelpDialog = false;
        // the watch dialog
        this.showStateWatchDialog = false;
        // the rename dialog
        this.showRenameStateDialog = false;
        // wheter or not to show the timeline filter dialog
        this.showFilterTimelineDialog = false;
        // show the watch panel?
        this.showWatchPanel = false;
        // additional properties that some commands may want... a way to communicate
        // from the command toolbar to the command
        this.commandProperties = {};
        this.switchTab = (newTab) => {
            this.tab = newTab;
        };
        this.popState = () => {
            if (this.showStateFindDialog) {
                this.closeStateFindDialog();
            }
            if (this.showHelpDialog) {
                this.closeHelpDialog();
            }
        };
        this.submitCurrentForm = () => {
            if (this.showStateWatchDialog) {
                this.submitStateWatch();
            }
            else if (this.showRenameStateDialog) {
                this.submitRenameState();
            }
        };
        this.submitCurrentFormDelicately = () => {
            if (this.showStateDispatchDialog) {
                this.submitStateDispatch();
            }
        };
        this.submitStateWatch = () => {
            this.server.stateValuesSubscribe(this.watchToAdd);
            this.showStateWatchDialog = false;
            this.watchToAdd = null;
        };
        this.submitRenameState = () => {
            this.currentBackupState.payload.name = this.backupStateName;
            this.showRenameStateDialog = false;
            this.backupStateName = null;
        };
        this.removeStateWatch = (path) => {
            this.server.stateValuesUnsubscribe(path);
        };
        this.clearStateWatches = () => {
            this.server.stateValuesClearSubscriptions();
        };
        this.submitStateDispatch = () => {
            // try not to blow up the frame
            let action = null;
            try {
                // brackets are need on chromium side, huh.
                action = eval('(' + this.actionToDispatch + ')'); // eslint-disable-line
            }
            catch (e) {
            }
            // jet if not valid
            if (ramdasauce_1.isNilOrEmpty(action))
                return;
            // let's attempt to dispatch
            this.dispatchAction(action);
            // close the form
            this.showStateDispatchDialog = false;
        };
        this.openStateFindDialog = () => {
            this.showStateFindDialog = true;
        };
        this.closeStateFindDialog = () => {
            this.showStateFindDialog = false;
        };
        this.openStateWatchDialog = () => {
            this.showStateWatchDialog = true;
        };
        this.closeStateWatchDialog = () => {
            this.showStateWatchDialog = false;
        };
        this.openRenameStateDialog = backup => {
            this.showRenameStateDialog = true;
            this.backupStateName = backup.payload.name;
            this.currentBackupState = backup;
        };
        this.closeRenameStateDialog = () => {
            this.showRenameStateDialog = false;
        };
        this.openStateDispatchDialog = () => {
            this.showStateDispatchDialog = true;
        };
        this.toggleHelpDialog = () => {
            this.showHelpDialog = !this.showHelpDialog;
        };
        this.openHelpDialog = () => {
            this.showHelpDialog = true;
        };
        this.closeStateDispatchDialog = () => {
            this.showStateDispatchDialog = false;
        };
        this.closeHelpDialog = () => {
            this.showHelpDialog = false;
        };
        this.openFilterTimelineDialog = () => {
            this.showFilterTimelineDialog = true;
        };
        this.closeFilterTimelineDialog = () => {
            this.showFilterTimelineDialog = false;
        };
        this.reset = () => {
            this.server.commands.all.clear();
        };
        this.getStateKeysOrValues = (path) => {
            if (this.keysOrValues === 'keys') {
                this.getStateKeys(path);
            }
            else {
                this.getStateValues(path);
            }
        };
        this.getStateValues = (path) => {
            this.server.stateValuesRequest(path);
        };
        this.getStateKeys = (path) => {
            this.server.stateKeysRequest(path);
        };
        this.dispatchAction = action => {
            this.server.stateActionDispatch(action);
        };
        this.toggleKeysValues = () => {
            if (this.keysOrValues === 'keys') {
                this.keysOrValues = 'values';
            }
            else {
                this.keysOrValues = 'keys';
            }
        };
        this.toggleWatchPanel = () => {
            this.showWatchPanel = !this.showWatchPanel;
        };
        // grab a copy of the state for backup purposes
        this.backupState = () => this.server.stateBackupRequest();
        // change the state on the app to this
        this.restoreState = state => this.server.stateRestoreRequest(state);
        // removes an existing state object
        this.deleteState = state => {
            this.server.commands['state.backup.response'].remove(state);
        };
        this.getCommandProperty = (messageId, key) => {
            const props = this.commandProperties[messageId];
            if (props) {
                return props.get(key);
            }
            else {
                this.commandProperties[messageId] = mobx_1.observable(mobx_1.asMap({}));
                return this.commandProperties[messageId].get(key, null);
            }
        };
        this.setCommandProperty = (messageId, key, value) => {
            // console.log('setting', messageId, key, value, this.commandProperties)
            if (!this.commandProperties[messageId]) {
                this.commandProperties[messageId] = mobx_1.observable(mobx_1.asMap({}));
            }
            this.commandProperties[messageId].set(key, value);
        };
        /**
         * Asks the client to the file in the editor
         */
        this.openInEditor = (file, lineNumber) => this.server.openInEditor({ file, lineNumber });
        /**
         * Sets the properties of the overlay shown on the React Native app.
         */
        this.setOverlay = props => this.server.send('overlay', props);
        this.server = server;
        Mousetrap_min_js_1.default.prototype.stopCallback = () => false;
        Mousetrap_min_js_1.default.bind(`${Keystroke_1.default.mousetrap}+k`, this.reset);
        Mousetrap_min_js_1.default.bind(`${Keystroke_1.default.mousetrap}+f`, this.openStateFindDialog);
        Mousetrap_min_js_1.default.bind(`${Keystroke_1.default.mousetrap}+shift+f`, this.openFilterTimelineDialog);
        Mousetrap_min_js_1.default.bind(`${Keystroke_1.default.mousetrap}+d`, this.openStateDispatchDialog);
        Mousetrap_min_js_1.default.bind(`${Keystroke_1.default.mousetrap}+s`, this.backupState);
        Mousetrap_min_js_1.default.bind(`tab`, this.toggleKeysValues);
        Mousetrap_min_js_1.default.bind(`escape`, this.popState);
        Mousetrap_min_js_1.default.bind(`enter`, this.submitCurrentForm);
        Mousetrap_min_js_1.default.bind(`${Keystroke_1.default.mousetrap}+enter`, this.submitCurrentFormDelicately);
        Mousetrap_min_js_1.default.bind(`${Keystroke_1.default.mousetrap}+n`, this.openStateWatchDialog);
        Mousetrap_min_js_1.default.bind(`${Keystroke_1.default.mousetrap}+1`, this.switchTab.bind(this, 'timeline'));
        Mousetrap_min_js_1.default.bind(`${Keystroke_1.default.mousetrap}+2`, this.switchTab.bind(this, 'subscriptions'));
        Mousetrap_min_js_1.default.bind(`${Keystroke_1.default.mousetrap}+3`, this.switchTab.bind(this, 'backups'));
        Mousetrap_min_js_1.default.bind(`${Keystroke_1.default.mousetrap}+4`, this.switchTab.bind(this, 'native'));
        Mousetrap_min_js_1.default.bind(`${Keystroke_1.default.mousetrap}+/`, this.switchTab.bind(this, 'help'));
        Mousetrap_min_js_1.default.bind(`${Keystroke_1.default.mousetrap}+?`, this.switchTab.bind(this, 'help'));
    }
    setActionToDispatch(action) {
        this.actionToDispatch = action;
        this.showStateDispatchDialog = true;
    }
}
__decorate([
    mobx_1.observable
], UI.prototype, "tab", void 0);
__decorate([
    mobx_1.observable
], UI.prototype, "keysOrValues", void 0);
__decorate([
    mobx_1.observable
], UI.prototype, "showStateFindDialog", void 0);
__decorate([
    mobx_1.observable
], UI.prototype, "showStateDispatchDialog", void 0);
__decorate([
    mobx_1.observable
], UI.prototype, "showHelpDialog", void 0);
__decorate([
    mobx_1.observable
], UI.prototype, "showStateWatchDialog", void 0);
__decorate([
    mobx_1.observable
], UI.prototype, "showRenameStateDialog", void 0);
__decorate([
    mobx_1.observable
], UI.prototype, "showFilterTimelineDialog", void 0);
__decorate([
    mobx_1.observable
], UI.prototype, "watchToAdd", void 0);
__decorate([
    mobx_1.observable
], UI.prototype, "backupStateName", void 0);
__decorate([
    mobx_1.observable
], UI.prototype, "actionToDispatch", void 0);
__decorate([
    mobx_1.observable
], UI.prototype, "showWatchPanel", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "switchTab", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "popState", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "submitCurrentForm", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "submitCurrentFormDelicately", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "submitStateWatch", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "submitRenameState", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "removeStateWatch", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "clearStateWatches", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "setActionToDispatch", null);
__decorate([
    mobx_1.action
], UI.prototype, "submitStateDispatch", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "openStateFindDialog", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "closeStateFindDialog", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "openStateWatchDialog", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "closeStateWatchDialog", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "openRenameStateDialog", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "closeRenameStateDialog", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "openStateDispatchDialog", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "toggleHelpDialog", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "openHelpDialog", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "closeStateDispatchDialog", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "closeHelpDialog", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "openFilterTimelineDialog", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "closeFilterTimelineDialog", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "reset", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "getStateKeysOrValues", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "getStateValues", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "getStateKeys", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "dispatchAction", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "toggleKeysValues", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "toggleWatchPanel", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "backupState", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "restoreState", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "deleteState", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "setCommandProperty", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "openInEditor", void 0);
__decorate([
    mobx_1.action
], UI.prototype, "setOverlay", void 0);
exports.default = UI;
//# sourceMappingURL=UiStore.js.map
});
___scope___.file("renderer/Lib/Mousetrap.min.js", function(exports, require, module, __filename, __dirname){

/* mousetrap v1.6.0 craig.is/killing/mice */
(function(r,t,g){function u(a,b,h){a.addEventListener?a.addEventListener(b,h,!1):a.attachEvent("on"+b,h)}function y(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return k[a.which]?k[a.which]:p[a.which]?p[a.which]:String.fromCharCode(a.which).toLowerCase()}function D(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function v(a){return"shift"==a||"ctrl"==a||"alt"==a||
"meta"==a}function z(a,b){var h,c,e,g=[];h=a;"+"===h?h=["+"]:(h=h.replace(/\+{2}/g,"+plus"),h=h.split("+"));for(e=0;e<h.length;++e)c=h[e],A[c]&&(c=A[c]),b&&"keypress"!=b&&B[c]&&(c=B[c],g.push("shift")),v(c)&&g.push(c);h=c;e=b;if(!e){if(!n){n={};for(var l in k)95<l&&112>l||k.hasOwnProperty(l)&&(n[k[l]]=l)}e=n[h]?"keydown":"keypress"}"keypress"==e&&g.length&&(e="keydown");return{key:c,modifiers:g,action:e}}function C(a,b){return null===a||a===t?!1:a===b?!0:C(a.parentNode,b)}function c(a){function b(a){a=
a||{};var b=!1,m;for(m in n)a[m]?b=!0:n[m]=0;b||(w=!1)}function h(a,b,m,f,c,h){var g,e,k=[],l=m.type;if(!d._callbacks[a])return[];"keyup"==l&&v(a)&&(b=[a]);for(g=0;g<d._callbacks[a].length;++g)if(e=d._callbacks[a][g],(f||!e.seq||n[e.seq]==e.level)&&l==e.action){var q;(q="keypress"==l&&!m.metaKey&&!m.ctrlKey)||(q=e.modifiers,q=b.sort().join(",")===q.sort().join(","));q&&(q=f&&e.seq==f&&e.level==h,(!f&&e.combo==c||q)&&d._callbacks[a].splice(g,1),k.push(e))}return k}function g(a,b,m,f){d.stopCallback(b,
b.target||b.srcElement,m,f)||!1!==a(b,m)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?b.stopPropagation():b.cancelBubble=!0)}function e(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=y(a);b&&("keyup"==a.type&&x===b?x=!1:d.handleKey(b,D(a),a))}function k(a,c,m,f){function e(c){return function(){w=c;++n[a];clearTimeout(r);r=setTimeout(b,1E3)}}function h(c){g(m,c,a);"keyup"!==f&&(x=y(c));setTimeout(b,10)}for(var d=n[a]=0;d<c.length;++d){var p=d+1===c.length?h:e(f||
z(c[d+1]).action);l(c[d],p,f,a,d)}}function l(a,b,c,f,e){d._directMap[a+":"+c]=b;a=a.replace(/\s+/g," ");var g=a.split(" ");1<g.length?k(a,g,b,c):(c=z(a,c),d._callbacks[c.key]=d._callbacks[c.key]||[],h(c.key,c.modifiers,{type:c.action},f,a,e),d._callbacks[c.key][f?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:f,level:e,combo:a}))}var d=this;a=a||t;if(!(d instanceof c))return new c(a);d.target=a;d._callbacks={};d._directMap={};var n={},r,x=!1,p=!1,w=!1;d._handleKey=function(a,
c,e){var f=h(a,c,e),d;c={};var k=0,l=!1;for(d=0;d<f.length;++d)f[d].seq&&(k=Math.max(k,f[d].level));for(d=0;d<f.length;++d)f[d].seq?f[d].level==k&&(l=!0,c[f[d].seq]=1,g(f[d].callback,e,f[d].combo,f[d].seq)):l||g(f[d].callback,e,f[d].combo);f="keypress"==e.type&&p;e.type!=w||v(a)||f||b(c);p=l&&"keydown"==e.type};d._bindMultiple=function(a,b,c){for(var d=0;d<a.length;++d)l(a[d],b,c)};u(a,"keypress",e);u(a,"keydown",e);u(a,"keyup",e)}if(r){var k={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",
18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},p={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},B={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},A={option:"alt",command:"meta","return":"enter",
escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},n;for(g=1;20>g;++g)k[111+g]="f"+g;for(g=0;9>=g;++g)k[g+96]=g;c.prototype.bind=function(a,b,c){a=a instanceof Array?a:[a];this._bindMultiple.call(this,a,b,c);return this};c.prototype.unbind=function(a,b){return this.bind.call(this,a,function(){},b)};c.prototype.trigger=function(a,b){if(this._directMap[a+":"+b])this._directMap[a+":"+b]({},a);return this};c.prototype.reset=function(){this._callbacks={};this._directMap=
{};return this};c.prototype.stopCallback=function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")||C(b,this.target)?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable};c.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)};c.addKeycodes=function(a){for(var b in a)a.hasOwnProperty(b)&&(k[b]=a[b]);n=null};c.init=function(){var a=c(t),b;for(b in a)"_"!==b.charAt(0)&&(c[b]=function(b){return function(){return a[b].apply(a,arguments)}}(b))};
c.init();r.Mousetrap=c;"undefined"!==typeof module&&module.exports&&(module.exports=c);"function"===typeof define&&define.amd&&define(function(){return c})}})("undefined"!==typeof window?window:null,"undefined"!==typeof window?document:null);

});
___scope___.file("renderer/Lib/ShallowDiff.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://github.com/ramda/ramda/wiki/Cookbook#diffobjs---diffing-objects-similar-to-guavas-mapsdifference
const ramda_1 = require("ramda"); // boom
const groupObjBy = ramda_1.curry(ramda_1.pipe(
// Call groupBy with the object as pairs, passing only the value to the key function
ramda_1.useWith(ramda_1.groupBy, [ramda_1.useWith(ramda_1.__, [ramda_1.last]), ramda_1.toPairs]), ramda_1.map(ramda_1.fromPairs)));
const LEFT_VALUE = 'leftValue';
const RIGHT_VALUE = 'rightValue';
const COMMON = 'common';
const DIFFERENCE = 'difference';
const ONLY_ON_LEFT = 'onlyOnLeft';
const ONLY_ON_RIGHT = 'onlyOnRight';
const diffObjs = ramda_1.pipe(ramda_1.useWith(ramda_1.mergeWith(ramda_1.merge), [ramda_1.map(ramda_1.objOf(LEFT_VALUE)), ramda_1.map(ramda_1.objOf(RIGHT_VALUE))]), groupObjBy(ramda_1.cond([
    [
        ramda_1.both(ramda_1.has(LEFT_VALUE), ramda_1.has(RIGHT_VALUE)),
        ramda_1.pipe(ramda_1.values, ramda_1.ifElse(ramda_1.apply(ramda_1.equals), ramda_1.always(COMMON), ramda_1.always(DIFFERENCE))),
    ],
    [ramda_1.has(LEFT_VALUE), ramda_1.always(ONLY_ON_LEFT)],
    [ramda_1.has(RIGHT_VALUE), ramda_1.always(ONLY_ON_RIGHT)],
])), ramda_1.evolve({
    [COMMON]: ramda_1.map(ramda_1.prop(LEFT_VALUE)),
    [ONLY_ON_LEFT]: ramda_1.map(ramda_1.prop(LEFT_VALUE)),
    [ONLY_ON_RIGHT]: ramda_1.map(ramda_1.prop(RIGHT_VALUE)),
}));
exports.default = diffObjs;
//# sourceMappingURL=ShallowDiff.js.map
});
___scope___.file("renderer/app.global.css", function(exports, require, module, __filename, __dirname){


require("fuse-box-css")("renderer/app.global.css", "html, body {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  cursor: default;\n  font-family: 'Fira Code', 'SF Mono', 'Consolas', 'Segoe UI', 'Roboto', '-apple-system', 'Helvetica Neue', sans-serif;\n  font-size: 0.94em;\n  -webkit-user-select: none;\n}\nth {\n  font-weight: normal;\n}\n\n::-webkit-scrollbar {\n  background-color: transparent;\n  width: 8px;\n  height: 8px;\n}\n::-webkit-scrollbar-track {\n  background-color: transparent;\n  border: 0px;\n  border-radius: 0px;\n}\n::-webkit-scrollbar-thumb {\n  background-color: rgba(128, 128, 128, 0.25) !important;\n  border-radius: 4px;\n}\n\n/* leet hacks */\na.closeButton--jss-0-1 { display: none; }\n\n*:focus {\n    outline: none;\n}\n\n@-webkit-keyframes fade-up {\n  0%   { -webkit-transform: translateY(5%); opacity: 0; }\n  100% { -webkit-transform: translateY(0%); opacity: 1; }\n}\n\n@-webkit-keyframes slide-up {\n  0%   { -webkit-transform: translateY(100%); }\n  100%   { -webkit-transform: translateY(0px); }\n}\n\n@-webkit-keyframes slide-down {\n  0%   { -webkit-transform: translateY(0px); }\n  100% { -webkit-transform: translateY(100%); }\n}\n\n.tooltipTheme {\n  background-color: 'white',\n}\n.tooltipThemeReducedWidth {\n  word-break: normal;\n  background-color: 'white';\n  width: 300px;\n}\n")
});
});
FuseBox.pkg("fusebox-hot-reload", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
/**
 * @module listens to `source-changed` socket events and actions hot reload
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Client = require('fusebox-websocket').SocketClient;
exports.connect = function (port, uri) {
    if (FuseBox.isServer) {
        return;
    }
    port = port || window.location.port;
    var client = new Client({
        port: port,
        uri: uri,
    });
    client.connect();
    client.on('source-changed', function (data) {
        console.info("%cupdate \"" + data.path + "\"", 'color: #237abe');
        if (data.type === "hosted-css") {
            var fileId = data.path.replace(/[\.\/]+/g, '-');
            var existing = document.getElementById(fileId);
            if (existing) {
                existing.setAttribute("href", data.path + "?" + new Date().getTime());
            }
            else {
                var node = document.createElement('link');
                node.id = fileId;
                node.type = 'text/css';
                node.rel = 'stylesheet';
                node.href = data.path;
                document.getElementsByTagName('head')[0].appendChild(node);
            }
        }
        /**
         * If a plugin handles this request then we don't have to do anything
         **/
        for (var index = 0; index < FuseBox.plugins.length; index++) {
            var plugin = FuseBox.plugins[index];
            if (plugin.hmrUpdate && plugin.hmrUpdate(data)) {
                return;
            }
        }
        if (data.type === 'js' || data.type === "css") {
            FuseBox.flush();
            FuseBox.dynamic(data.path, data.content);
            if (FuseBox.mainFile) {
                try {
                    FuseBox.import(FuseBox.mainFile);
                }
                catch (e) {
                    if (typeof e === 'string') {
                        if (/not found/.test(e)) {
                            return window.location.reload();
                        }
                    }
                    console.error(e);
                }
            }
        }
    });
    client.on('error', function (error) {
        console.log(error);
    });
};

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("fusebox-websocket", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events = require('events');
var SocketClient = (function () {
    function SocketClient(opts) {
        opts = opts || {};
        var port = opts.port || window.location.port;
        var protocol = location.protocol === 'https:' ? 'wss://' : 'ws://';
        var domain = location.hostname || 'localhost';
        this.url = opts.host || "" + protocol + domain + ":" + port;
        if (opts.uri) {
            this.url = opts.uri;
        }
        this.authSent = false;
        this.emitter = new events.EventEmitter();
    }
    SocketClient.prototype.reconnect = function (fn) {
        var _this = this;
        setTimeout(function () {
            _this.emitter.emit('reconnect', { message: 'Trying to reconnect' });
            _this.connect(fn);
        }, 5000);
    };
    SocketClient.prototype.on = function (event, fn) {
        this.emitter.on(event, fn);
    };
    SocketClient.prototype.connect = function (fn) {
        var _this = this;
        console.log('%cConnecting to fusebox HMR at ' + this.url, 'color: #237abe');
        setTimeout(function () {
            _this.client = new WebSocket(_this.url);
            _this.bindEvents(fn);
        }, 0);
    };
    SocketClient.prototype.close = function () {
        this.client.close();
    };
    SocketClient.prototype.send = function (eventName, data) {
        if (this.client.readyState === 1) {
            this.client.send(JSON.stringify({ event: eventName, data: data || {} }));
        }
    };
    SocketClient.prototype.error = function (data) {
        this.emitter.emit('error', data);
    };
    /** Wires up the socket client messages to be emitted on our event emitter */
    SocketClient.prototype.bindEvents = function (fn) {
        var _this = this;
        this.client.onopen = function (event) {
            console.log('%cConnected', 'color: #237abe');
            if (fn) {
                fn(_this);
            }
        };
        this.client.onerror = function (event) {
            _this.error({ reason: event.reason, message: 'Socket error' });
        };
        this.client.onclose = function (event) {
            _this.emitter.emit('close', { message: 'Socket closed' });
            if (event.code !== 1011) {
                _this.reconnect(fn);
            }
        };
        this.client.onmessage = function (event) {
            var data = event.data;
            if (data) {
                var item = JSON.parse(data);
                _this.emitter.emit(item.type, item.data);
                _this.emitter.emit('*', item);
            }
        };
    };
    return SocketClient;
}());
exports.SocketClient = SocketClient;

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("events", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
if (FuseBox.isServer) {
    module.exports = global.require("events");
} else {
    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
    }
    module.exports = EventEmitter;

    // Backwards-compat with node 0.10.x
    EventEmitter.EventEmitter = EventEmitter;

    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;

    // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10;

    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError("n must be a positive number");
        this._maxListeners = n;
        return this;
    };

    EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;

        if (!this._events)
            this._events = {};

        // If there is no 'error' event listener then throw.
        if (type === "error") {
            if (!this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er; // Unhandled 'error' event
                }
                throw TypeError("Uncaught, unspecified \"error\" event.");
            }
        }

        handler = this._events[type];

        if (isUndefined(handler))
            return false;

        if (isFunction(handler)) {
            switch (arguments.length) {
                // fast cases
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                    // slower
                default:
                    args = Array.prototype.slice.call(arguments, 1);
                    handler.apply(this, args);
            }
        } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1);
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
                listeners[i].apply(this, args);
        }

        return true;
    };

    EventEmitter.prototype.addListener = function(type, listener) {
        var m;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events)
            this._events = {};

        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (this._events.newListener)
            this.emit("newListener", type,
                isFunction(listener.listener) ?
                listener.listener : listener);

        if (!this._events[type])
        // Optimize the case of one listener. Don't need the extra array object.
            this._events[type] = listener;
        else if (isObject(this._events[type]))
        // If we've already got an array, just append.
            this._events[type].push(listener);
        else
        // Adding the second element, need to change to array.
            this._events[type] = [this._events[type], listener];

        // Check for listener leak
        if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners;
            } else {
                m = EventEmitter.defaultMaxListeners;
            }

            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " +
                    "leak detected. %d listeners added. " +
                    "Use emitter.setMaxListeners() to increase limit.",
                    this._events[type].length);
                if (typeof console.trace === "function") {
                    // not supported in IE 10
                    console.trace();
                }
            }
        }

        return this;
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        var fired = false;

        function g() {
            this.removeListener(type, g);

            if (!fired) {
                fired = true;
                listener.apply(this, arguments);
            }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
    };

    // emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events || !this._events[type])
            return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener ||
            (isFunction(list.listener) && list.listener === listener)) {
            delete this._events[type];
            if (this._events.removeListener)
                this.emit("removeListener", type, listener);

        } else if (isObject(list)) {
            for (i = length; i-- > 0;) {
                if (list[i] === listener ||
                    (list[i].listener && list[i].listener === listener)) {
                    position = i;
                    break;
                }
            }

            if (position < 0)
                return this;

            if (list.length === 1) {
                list.length = 0;
                delete this._events[type];
            } else {
                list.splice(position, 1);
            }

            if (this._events.removeListener)
                this.emit("removeListener", type, listener);
        }

        return this;
    };

    EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;

        if (!this._events)
            return this;

        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) {
            if (arguments.length === 0)
                this._events = {};
            else if (this._events[type])
                delete this._events[type];
            return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === "removeListener") continue;
                this.removeAllListeners(key);
            }
            this.removeAllListeners("removeListener");
            this._events = {};
            return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
            this.removeListener(type, listeners);
        } else if (listeners) {
            // LIFO order
            while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];

        return this;
    };

    EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type])
            ret = [];
        else if (isFunction(this._events[type]))
            ret = [this._events[type]];
        else
            ret = this._events[type].slice();
        return ret;
    };

    EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];

            if (isFunction(evlistener))
                return 1;
            else if (evlistener)
                return evlistener.length;
        }
        return 0;
    };

    EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type);
    };

    function isFunction(arg) {
        return typeof arg === "function";
    }

    function isNumber(arg) {
        return typeof arg === "number";
    }

    function isObject(arg) {
        return typeof arg === "object" && arg !== null;
    }

    function isUndefined(arg) {
        return arg === void 0;
    }
}

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("fuse-box-css", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

/**
 * Listens to 'async' requets and if the name is a css file
 * wires it to `__fsbx_css`
 */

var runningInBrowser = FuseBox.isBrowser || FuseBox.target === "electron";

var cssHandler = function(__filename, contents) {
    if (runningInBrowser) {
        var styleId = __filename.replace(/[\.\/]+/g, '-');
        if (styleId.charAt(0) === '-') styleId = styleId.substring(1);
        var exists = document.getElementById(styleId);
        if (!exists) {
            //<link href="//fonts.googleapis.com/css?family=Covered+By+Your+Grace" rel="stylesheet" type="text/css">
            var s = document.createElement(contents ? 'style' : 'link');
            s.id = styleId;
            s.type = 'text/css';
            if (contents) {
                s.innerHTML = contents;
            } else {
                s.rel = 'stylesheet';
                s.href = __filename;
            }
            document.getElementsByTagName('head')[0].appendChild(s);
        } else {
            if (contents) {
                exists.innerHTML = contents;
            }
        }
    }
}
if (typeof FuseBox !== "undefined" && runningInBrowser) {
    FuseBox.on('async', function(name) {
        if (/\.css$/.test(name)) {
            cssHandler(name);
            return false;
        }
    });
}

module.exports = cssHandler;
});
return ___scope___.entry = "index.js";
});
FuseBox.import("fusebox-hot-reload").connect(4445, "")
FuseBox.target = "electron"

FuseBox.import("default/renderer/index.jsx");
FuseBox.main("default/renderer/index.jsx");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((d||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(d){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!d&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=m[a];if(!s){if(d&&"electron"!==h.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),v=i(c),p=s.f[v];return!p&&v.indexOf("*")>-1&&(l=v),p||l||(v=t(c,"/","index.js"),p=s.f[v],p||(v=c+".js",p=s.f[v]),p||(p=s.f[c+".jsx"]),p||(v=c+"/index.jsx",p=s.f[v])),{file:p,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:v}}function s(e,r,n){if(void 0===n&&(n={}),!d)return r(/\.(js|json)$/.test(e)?v.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);h.dynamic(a,o),r(h.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=g[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=m[t.pkgName];if(u){var p={};for(var g in u.f)a.test(g)&&(p[g]=c(t.pkgName+"/"+g));return p}}if(!i){var h="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return h?r(e):null},r)}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var w=i.locals={},y=n(t.validPath);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return c(e,{pkg:_,path:y,v:t.versions})},d||!v.require.main?w.require.main={filename:"./",paths:[]}:w.require.main=v.require.main;var j=[w.module.exports,w.require,w.module,t.validPath,y,_];return l("before-import",j),i.fn.apply(0,j),l("after-import",j),w.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof window&&window.navigator,v=d?window:global;d&&(v.global=window),e=d&&"undefined"==typeof __fbx__dnm__?e:module.exports;var p=d?window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};d||(v.require=require);var m=p.p=p.p||{},g=p.e=p.e||{},h=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){g[e]=g[e]||[],g[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=m[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=m.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(m[e])return n(m[e].s);var t=m[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r.packages=m,r.isBrowser=d,r.isServer=!d,r.plugins=[],r}();return d||(v.FuseBox=h),e.FuseBox=h}(this))
//# sourceMappingURL=renderer.js.map