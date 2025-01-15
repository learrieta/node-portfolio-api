"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.SERVER_PORT = exports.SERVER_HOSTNAME = exports.TEST = exports.DEVELOPMENT = void 0;
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
exports.DEVELOPMENT = process.env.NODE_ENV === 'development';
exports.TEST = process.env.NODE_ENV === 'test';
exports.SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
exports.SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 12345;
exports.server = {
    SERVER_HOSTNAME: exports.SERVER_HOSTNAME,
    SERVER_PORT: exports.SERVER_PORT
};
