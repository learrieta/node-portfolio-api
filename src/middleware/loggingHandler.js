"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggingHandler = void 0;
function loggingHandler(req, res, next) {
    logging.log("Incomming - METHOD: [".concat(req.method, "] - URL: [").concat(req.url, "] - IP: [").concat(req.socket.remoteAddress, "]"));
    res.on('finish', function () {
        logging.log("Result - METHOD: [".concat(req.method, "] - URL: [").concat(req.url, "] - IP: [").concat(req.socket.remoteAddress, "] - STATUS: [").concat(res.statusCode, "]"));
    });
    next();
}
exports.loggingHandler = loggingHandler;
