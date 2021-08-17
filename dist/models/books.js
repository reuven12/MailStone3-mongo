"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
var BookSchema = new mongoose_1.default.Schema({
    Title: {
        String,
    },
    Book_description: {
        String,
    },
    Date_of_publication_of_the_book: {
        String,
    },
    the_author: {
        String,
    },
    Number_of_pages: {
        Number,
    }
});
exports.BookModel = mongoose_1.default.model('Book', BookSchema);
//# sourceMappingURL=books.js.map