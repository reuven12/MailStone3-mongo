"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriterModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const WriterSchema = new mongoose_1.default.Schema({
    First_Name: {
        type: String,
    },
    Last_Name: {
        type: String,
    },
    Year_of_Birth: {
        type: Number,
    },
    List_books: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Book'
        }]
}, { versionKey: false });
exports.WriterModel = mongoose_1.default.model('Writer', WriterSchema);
//# sourceMappingURL=writers.js.map