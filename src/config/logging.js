"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.warn = exports.info = exports.log = exports.getCallingFunction = void 0;
var config_1 = require("./config");
var colours = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
    reverse: '\x1b[7m',
    hidden: '\x1b[8m',
    fg: {
        black: '\x1b[30m',
        red: '\x1b[31m',
        green: '\x1b[32m',
        yellow: '\x1b[33m',
        blue: '\x1b[34m',
        magenta: '\x1b[35m',
        cyan: '\x1b[36m',
        white: '\x1b[37m',
        crimson: '\x1b[38m'
    },
    bg: {
        black: '\x1b[40m',
        red: '\x1b[41m',
        green: '\x1b[42m',
        yellow: '\x1b[43m',
        blue: '\x1b[44m',
        magenta: '\x1b[45m',
        cyan: '\x1b[46m',
        white: '\x1b[47m',
        crimson: '\x1b[48m'
    }
};
function getCallingFunction(error) {
    try {
        var stack = error.stack;
        if (stack === undefined)
            return '--';
        var line = stack.split('\n')[2];
        var regex = /^.*at\s([a-zA-Z]+).*$/;
        var groups = line.match(regex);
        if (groups === null)
            return '--';
        if (groups.length < 2)
            return '--';
        return groups[1];
    }
    catch (_a) {
        return '--';
    }
}
exports.getCallingFunction = getCallingFunction;
function log(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    if (!config_1.TEST)
        console.log.apply(console, __spreadArray(["[".concat(new Date().toLocaleString(), "]"), colours.fg.magenta, '[SERVER-LOG] ', colours.reset, message], optionalParams, false));
}
exports.log = log;
function info(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    if (!config_1.TEST)
        console.info.apply(console, __spreadArray(["[".concat(new Date().toLocaleString(), "]"), colours.fg.cyan,
            '[INFO]',
            colours.reset,
            colours.bg.green, "[".concat(getCallingFunction(new Error()), "]"), colours.reset,
            message], optionalParams, false));
}
exports.info = info;
function warn(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    if (!config_1.TEST)
        console.warn.apply(console, __spreadArray(["[".concat(new Date().toLocaleString(), "]"), colours.fg.yellow,
            '[WARN]',
            colours.reset,
            colours.bg.green, "[".concat(getCallingFunction(new Error()), "]"), colours.reset,
            message], optionalParams, false));
}
exports.warn = warn;
function error(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    if (!config_1.TEST)
        console.error.apply(console, __spreadArray(["[".concat(new Date().toLocaleString(), "]"), colours.fg.red,
            '[ERROR]',
            colours.reset,
            colours.bg.green, "[".concat(getCallingFunction(new Error()), "]"), colours.reset,
            message], optionalParams, false));
}
exports.error = error;
var logging = {
    log: log,
    info: info,
    warn: warn,
    error: error,
    warning: warn,
    getCallingFunction: getCallingFunction
};
/** Link the local and global variable */
globalThis.logging = logging;
exports.default = logging;
