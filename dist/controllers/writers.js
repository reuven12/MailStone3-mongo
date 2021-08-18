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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const writers_1 = require("../models/writers");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/First_Name/:First_Name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const populatedWriter = yield writers_1.WriterModel.findOne({ First_Name: req.params.First_Name }).populate('List_books');
        res.send(populatedWriter.List_books);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const write = new writers_1.WriterModel({
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        Year_of_Birth: req.body.Year_of_Birth,
        List_books: req.body.List_books
    });
    try {
        const newWrite = yield write.save();
        res.status(201).json(newWrite);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
router.get('/match', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const writesFind = yield writers_1.WriterModel.aggregate([
            {
                '$match': {
                    'First_Name': {
                        '$regex': new RegExp('^p.*$'),
                        '$options': 'i'
                    }
                }
            }, {
                '$lookup': {
                    'from': 'books',
                    'localField': 'List_books',
                    'foreignField': '_id',
                    'as': 'books'
                }
            }, {
                '$unwind': {
                    'path': '$books'
                }
            }, {
                '$match': {
                    'books.Number_of_pages': {
                        '$gte': 40
                    },
                    'books.Date_of_publication_of_the_book': {
                        '$gte': 1960,
                        '$lt': 2020
                    }
                }
            }, {
                '$project': {
                    'nameOfBook': '$books.Title',
                    'writerName': '$First_Name'
                }
            }
        ]);
        res.send(writesFind);
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}));
exports.default = router;
//# sourceMappingURL=writers.js.map