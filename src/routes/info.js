"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var info_1 = require("../controllers/info");
var router = express_1.default.Router();
router.get('/', info_1.getInfo);
router.get('/applicant', info_1.getFunInfo);
exports.default = router;
