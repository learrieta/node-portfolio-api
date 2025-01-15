"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.DB_NAME = exports.DB_PASS = exports.DB_USER = exports.DB_PORT = exports.DB_HOST = void 0;
var sequelize_1 = require("sequelize");
exports.DB_HOST = process.env.DB_HOST;
exports.DB_PORT = process.env.DB_PORT;
exports.DB_USER = process.env.DB_USER;
exports.DB_PASS = process.env.DB_PASS;
exports.DB_NAME = process.env.DB_NAME;
exports.sequelize = new sequelize_1.Sequelize(exports.DB_NAME, exports.DB_USER, exports.DB_PASS, {
    host: exports.DB_HOST,
    dialect: 'postgres'
});
