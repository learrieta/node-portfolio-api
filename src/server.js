"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shutdown = exports.Main = exports.httpServer = exports.application = void 0;
var http_1 = require("http");
var express_1 = require("express");
require("./config/logging");
var corsHandler_1 = require("./middleware/corsHandler");
var loggingHandler_1 = require("./middleware/loggingHandler");
var routeNotFound_1 = require("./middleware/routeNotFound");
var config_1 = require("./config/config");
var db_1 = require("./config/db");
var info_1 = require("./routes/info");
/*SERVER HANDLING*/
exports.application = (0, express_1.default)();
/*CONNECTING TO POSTGRESS*/
function connect() {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.sequelize.authenticate()];
                case 1:
                    _a.sent();
                    console.log('Connected to PostgreSQL');
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error('Error connecting to PostgreSQL:', err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
connect();
var Main = function () {
    logging.log('----------------------------------------');
    logging.log('Initializing API');
    logging.log('----------------------------------------');
    exports.application.use(express_1.default.urlencoded({ extended: true }));
    exports.application.use(express_1.default.json());
    logging.log('----------------------------------------');
    logging.log('Logging & Configuration');
    logging.log('----------------------------------------');
    exports.application.use(loggingHandler_1.loggingHandler);
    exports.application.use(corsHandler_1.corsHandler);
    logging.log('----------------------------------------');
    logging.log('Define Controller Routing');
    logging.log('----------------------------------------');
    exports.application.get('/main/healthcheck', function (req, res, next) {
        return res.status(200).json({ hello: 'world!' });
    });
    exports.application.use('/', info_1.default);
    exports.application.use('/awesome', info_1.default);
    logging.log('----------------------------------------');
    logging.log('Define Routing Error');
    logging.log('----------------------------------------');
    exports.application.use(routeNotFound_1.routeNotFound);
    logging.info('----------------------------------------');
    logging.info('Starting Server');
    logging.info('----------------------------------------');
    exports.httpServer = http_1.default.createServer(exports.application);
    exports.httpServer.listen(config_1.server.SERVER_PORT, function () {
        logging.info('----------------------------------------');
        logging.info("Server started on ".concat(config_1.server.SERVER_HOSTNAME, ":").concat(config_1.server.SERVER_PORT));
        logging.info('----------------------------------------');
    });
};
exports.Main = Main;
var Shutdown = function (callback) { return exports.httpServer && exports.httpServer.close(callback); };
exports.Shutdown = Shutdown;
(0, exports.Main)();
