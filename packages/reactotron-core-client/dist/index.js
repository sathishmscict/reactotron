'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var R = require('ramda');
var R__default = _interopDefault(R);
var RS = require('ramdasauce');
var RS__default = _interopDefault(RS);

var isCreateSocketValid = function (createSocket) { return !R__default.isNil(createSocket); };
var isHostValid = R__default.allPass([R__default.complement(RS__default.isNilOrEmpty), R__default.is(String)]);
var isPortValid = R__default.allPass([R__default.complement(R__default.isNil), R__default.is(Number), RS__default.isWithin(1, 65535)]);
var onCommandValid = function (fn) { return typeof fn === 'function'; };
/**
 * Ensures the options are sane to run this baby.  Throw if not.  These
 * are basically sanity checks.
 */
var validate = function (options) {
    var createSocket = options.createSocket, host = options.host, port = options.port, onCommand = options.onCommand;
    if (!isCreateSocketValid(createSocket))
        throw new Error('invalid createSocket function');
    if (!isHostValid(host))
        throw new Error('invalid host');
    if (!isPortValid(port))
        throw new Error('invalid port');
    if (!onCommandValid(onCommand))
        throw new Error('invalid onCommand handler');
};

/**
 * Provides 4 features for logging.  log & debug are the same.
 */
var logger = function () { return function (reactotron) {
    return {
        features: {
            log: function (message, important) {
                if (important === void 0) { important = false; }
                return reactotron.send('log', { level: 'debug', message: message }, !!important);
            },
            debug: function (message, important) {
                if (important === void 0) { important = false; }
                return reactotron.send('log', { level: 'debug', message: message }, !!important);
            },
            warn: function (message) { return reactotron.send('log', { level: 'warn', message: message }, true); },
            error: function (message, stack) {
                return reactotron.send('log', { level: 'error', message: message, stack: stack }, true);
            }
        }
    };
}; };

/**
 * Provides an image.
 */
var image = function () { return function (reactotron) {
    return {
        features: {
            // expanded just to show the specs
            image: function (_a) {
                var uri = _a.uri, preview = _a.preview, filename = _a.filename, width = _a.width, height = _a.height, caption = _a.caption;
                return reactotron.send('image', { uri: uri, preview: preview, filename: filename, width: width, height: height, caption: caption });
            }
        }
    };
}; };

/**
 * Runs small high-unscientific benchmarks for you.
 */
var benchmark = function () { return function (reactotron) {
    var startTimer = reactotron.startTimer;
    var benchmark = function (title) {
        var steps = [];
        var elapsed = startTimer();
        var step = function (stepTitle) {
            var previousTime = R.length(steps) === 0 ? 0 : R.last(steps).time;
            var nextTime = elapsed();
            steps.push({ title: stepTitle, time: nextTime, delta: nextTime - previousTime });
        };
        steps.push({ title: title, time: 0, delta: 0 });
        var stop = function (stopTitle) {
            step(stopTitle);
            reactotron.send('benchmark.report', { title: title, steps: steps });
        };
        return { step: step, stop: stop, last: stop };
    };
    return {
        features: { benchmark: benchmark }
    };
}; };

/**
 * Provides helper functions for send state responses.
 */
var stateResponses = function () { return function (reactotron) {
    return {
        features: {
            stateActionComplete: function (name, action, important) {
                if (important === void 0) { important = false; }
                return reactotron.send('state.action.complete', { name: name, action: action }, !!important);
            },
            stateValuesResponse: function (path, value, valid) {
                if (valid === void 0) { valid = true; }
                return reactotron.send('state.values.response', { path: path, value: value, valid: valid });
            },
            stateKeysResponse: function (path, keys, valid) {
                if (valid === void 0) { valid = true; }
                return reactotron.send('state.keys.response', { path: path, keys: keys, valid: valid });
            },
            stateValuesChange: function (changes) {
                return reactotron.send('state.values.change', { changes: changes });
            },
            // sends the state backup over to the server
            stateBackupResponse: function (state) {
                return reactotron.send('state.backup.response', { state: state });
            }
        }
    };
}; };

/**
 * Sends API request/response information.
 */
var apiResponse = function () { return function (reactotron) {
    return {
        features: {
            apiResponse: function (request, response, duration) {
                var ok = response && response.status && RS.isWithin(200, 299, response.status);
                var important = !ok;
                reactotron.send('api.response', { request: request, response: response, duration: duration }, important);
            }
        }
    };
}; };

/**
 * Clears the reactotron server.
 */
var clear = function () { return function (reactotron) {
    return {
        features: {
            clear: function () { return reactotron.send('clear'); }
        }
    };
}; };

// JSON.stringify() doesn't support circular dependencies or keeping
// falsy values.  This does.
//
// Mostly adapted from https://github.com/isaacs/json-stringify-safe
// replacement tokens
var UNDEFINED = '~~~ undefined ~~~';
var NULL = "~~~ null ~~~";
var FALSE = "~~~ false ~~~";
var ZERO = "~~~ zero ~~~";
var EMPTY_STRING = "~~~ empty string ~~~";
var CIRCULAR = '~~~ Circular Reference ~~~';
var ANONYMOUS = '~~~ anonymous function ~~~';
var INFINITY = '~~~ Infinity ~~~';
var NEGATIVE_INFINITY = '~~~ -Infinity ~~~';
// const NAN = '~~~ NaN ~~~'
/**
 * Attempts to give a name to a function.
 *
 * @param {Function} fn - The function to name.
 */
function getFunctionName(fn) {
    var n = fn.name;
    if (n === null || n === undefined || n === '') {
        return ANONYMOUS;
    }
    else {
        return "~~~ " + n + "() ~~~";
    }
}
/**
 * Serializes an object to JSON.
 *
 *  @param {any} source - The victim.
 */
function serialize(source) {
    var stack = [];
    var keys = [];
    /**
     * Replace this object node with something potentially custom.
     *
     * @param {*} key - The key currently visited.
     * @param {*} value - The value to replace.
     */
    function serializer(replacer) {
        return function (key, value) {
            // slam dunks
            if (value === true)
                return true;
            // weird stuff
            // if (Object.is(value, NaN)) return NAN // OK, apparently this is hard... leaving out for now
            if (value === Infinity)
                return INFINITY;
            if (value === -Infinity)
                return NEGATIVE_INFINITY;
            if (value === 0)
                return ZERO;
            // classic javascript
            if (value === undefined)
                return UNDEFINED;
            if (value === null)
                return NULL;
            if (value === false)
                return FALSE;
            // head shakers
            if (value === -0)
                return ZERO; // eslint-disable-line
            if (value === '')
                return EMPTY_STRING;
            // known types that have easy resolving
            switch (typeof value) {
                case 'string': return value;
                case 'number': return value;
                case 'function': return getFunctionName(value);
            }
            if (stack.length > 0) {
                // check for prior existance
                var thisPos = stack.indexOf(this);
                ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
                ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
                if (~stack.indexOf(value))
                    value = CIRCULAR;
            }
            else {
                stack.push(value);
            }
            return replacer == null ? value : replacer.call(this, key, value);
        };
    }
    return JSON.stringify(source, serializer(null));
}

/// <reference types="node" />
var hasHirezNodeTimer = false && typeof process === 'object' && process && process.hrtime && typeof process.hrtime === 'function';
// the default timer
var defaultPerformanceNow = function (started) { return Date.now(); };
// try to find the browser-based performance timer
var nativePerformance = typeof window !== 'undefined' && window && (window.performance || window.msPerformance || window.webkitPerformance);
// if we do find it, let's setup to call it
var nativePerformanceNow = function () { return nativePerformance.now(); };
// the function we're trying to assign
var performanceNow = defaultPerformanceNow;
// accepts an already started time and returns the number of milliseconds
var delta = function (started) { return performanceNow() - started; };
// node will use a high rez timer
if (hasHirezNodeTimer) {
    performanceNow = process.hrtime;
    delta = function (started) { return performanceNow(started)[1] / 1000000; };
}
else if (nativePerformance) {
    performanceNow = nativePerformanceNow;
}
// this is the interface the callers will use
// export const performanceNow = nativePerformance ? nativePerformanceNow : defaultPerformanceNow
/**
 * Starts a lame, low-res timer.  Returns a function which when invoked,
 * gives you the number of milliseconds since passing.  ish.
 */
var start = function () {
    //  record the start time
    var started = performanceNow();
    return function () { return delta(started); };
};

/// <reference path="../types/reactotron.d.ts" />
var CorePlugins = [
    image(),
    logger(),
    benchmark(),
    stateResponses(),
    apiResponse(),
    clear()
];
var DEFAULTS = {
    createSocket: null,
    host: 'localhost',
    port: 9090,
    name: 'reactotron-core-client',
    secure: false,
    plugins: CorePlugins,
    safeRecursion: true,
    onCommand: function (cmd) { return null; },
    onConnect: function () { return null; },
    onDisconnect: function () { return null; } // fires when we disconnect
};
// these are not for you.
// TODO: Better Type?
var isReservedFeature = R__default.contains(R__default.__, [
    'options', 'connected', 'socket', 'plugins',
    'configure', 'connect', 'send', 'use',
    'startTimer'
]);
var Client = (function () {
    function Client() {
        // the configuration options
        this.options = R__default.merge({}, DEFAULTS);
        this.connected = false;
        this.socket = null;
        this.plugins = []; // TODO: Better Type?
        this.sendQueue = []; // TODO: Better Type?
        this.isReady = false;
        this.startTimer = function () { return start(); };
        // we will be invoking send from callbacks other than inside this file
        this.send = this.send.bind(this);
    }
    /**
     * Set the configuration options.
     */
    Client.prototype.configure = function (options) {
        if (options === void 0) { options = {}; }
        // options get merged & validated before getting set
        var newOptions = R__default.merge(this.options, options);
        validate(newOptions);
        this.options = newOptions;
        // if we have plugins, let's add them here
        if (R__default.has('length', this.options.plugins)) {
            R__default.forEach(this.use.bind(this), this.options.plugins);
        }
        return this;
    };
    /**
     * Connect to the Reactotron server.
     */
    Client.prototype.connect = function () {
        var _this = this;
        this.connected = true;
        var _a = this.options, createSocket = _a.createSocket, secure = _a.secure, host = _a.host, port = _a.port, name = _a.name, userAgent = _a.userAgent, environment = _a.environment, reactotronVersion = _a.reactotronVersion;
        var _b = this.options, onCommand = _b.onCommand, onConnect = _b.onConnect, onDisconnect = _b.onDisconnect;
        // establish a connection to the server
        var protocol = secure ? 'wss' : 'ws';
        var socket = createSocket(protocol + "://" + host + ":" + port);
        // fires when we talk to the server
        var onOpen = function () {
            // fire our optional onConnect handler
            onConnect && onConnect();
            // trigger our plugins onConnect
            R__default.forEach(function (plugin) { return plugin.onConnect && plugin.onConnect(); }, _this.plugins);
            _this.isReady = true;
            // introduce ourselves
            _this.send('client.intro', { host: host, port: port, name: name, userAgent: userAgent, reactotronVersion: reactotronVersion, environment: environment });
            // flush the send queue
            while (!R__default.isEmpty(_this.sendQueue)) {
                var h = R__default.head(_this.sendQueue);
                _this.sendQueue = R__default.tail(_this.sendQueue);
                _this.socket.send(h);
            }
        };
        // fires when we disconnect
        var onClose = function () {
            _this.isReady = false;
            // trigger our disconnect handler
            onDisconnect && onDisconnect();
            // as well as the plugin's onDisconnect
            R__default.forEach(function (plugin) { return plugin.onDisconnect && plugin.onDisconnect(); }, _this.plugins);
        };
        // fires when we receive a command, just forward it off
        var onMessage = function (data) {
            var command = JSON.parse(data);
            // trigger our own command handler
            onCommand && onCommand(command);
            // trigger our plugins onCommand
            R__default.forEach(function (plugin) { return plugin.onCommand && plugin.onCommand(command); }, _this.plugins);
        };
        // this is ws style from require('ws') on node js
        if (socket.on) {
            socket.on('open', onOpen);
            socket.on('close', onClose);
            socket.on('message', onMessage);
        }
        else {
            // this is a browser
            socket.onopen = onOpen;
            socket.onclose = onClose;
            socket.onmessage = function (evt) { return onMessage(evt.data); };
        }
        // assign the socket to the instance
        this.socket = socket;
        return this;
    };
    /**
     * Sends a command to the server
     */
    Client.prototype.send = function (type, payload, important) {
        if (payload === void 0) { payload = {}; }
        if (important === void 0) { important = false; }
        // jet if we don't have a socket
        if (!this.socket)
            return;
        var fullMessage = {
            type: type,
            payload: payload,
            important: !!important
        };
        var serializedMessage = serialize(fullMessage);
        if (this.isReady) {
            // send this command
            this.socket.send(serializedMessage);
        }
        else {
            // queue it up until we can connect
            this.sendQueue.push(serializedMessage);
        }
    };
    /**
     * Sends a custom command to the server to displays nicely.
     */
    Client.prototype.display = function (config) {
        if (config === void 0) { config = {}; }
        var name = config.name, value = config.value, preview = config.preview, image$$1 = config.image, _a = config.important, important = _a === void 0 ? false : _a;
        var payload = {
            name: name,
            value: value || null,
            preview: preview || null,
            image: image$$1 || null
        };
        this.send('display', payload, important);
    };
    /**
     * Client libraries can hijack this to report errors.
     */
    Client.prototype.reportError = function (error) {
        this.error(error);
    };
    /**
     * Adds a plugin to the system
     */
    Client.prototype.use = function (pluginCreator) {
        var _this = this;
        // we're supposed to be given a function
        if (typeof pluginCreator !== 'function')
            throw new Error('plugins must be a function');
        // execute it immediately passing the send function
        var plugin = pluginCreator.bind(this)(this);
        // ensure we get an Object-like creature back
        if (!R__default.is(Object, plugin))
            throw new Error('plugins must return an object');
        // do we have features to mixin?
        if (plugin.features) {
            // validate
            if (!R__default.is(Object, plugin.features))
                throw new Error('features must be an object');
            // here's how we're going to inject these in
            var inject = function (key) {
                // grab the function
                var featureFunction = plugin.features[key];
                // only functions may pass
                if (typeof featureFunction !== 'function')
                    throw new Error("feature " + key + " is not a function");
                // ditch reserved names
                if (isReservedFeature(key))
                    throw new Error("feature " + key + " is a reserved name");
                // ok, let's glue it up... and lose all respect from elite JS champions.
                _this[key] = featureFunction;
            };
            // let's inject
            R__default.forEach(inject, R__default.keys(plugin.features));
        }
        // add it to the list
        this.plugins.push(plugin);
        // call the plugins onPlugin
        plugin.onPlugin && typeof plugin.onPlugin === 'function' && plugin.onPlugin.bind(this)(this);
        // chain-friendly
        return this;
    };
    return Client;
}());
// convenience factory function
var createClient = function (options) {
    var client = new Client();
    client.configure(options);
    return client;
};

exports.CorePlugins = CorePlugins;
exports.Client = Client;
exports.createClient = createClient;
