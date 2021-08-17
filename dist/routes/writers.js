"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const { getAllWrites } = require('../controllers/writers');
router.get('/', getAllWrites);
exports.default = router;
//# sourceMappingURL=writers.js.map