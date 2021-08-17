"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const books_1 = __importDefault(require("./controllers/books"));
const writers_1 = __importDefault(require("./controllers/writers"));
mongoose_1.default.connect('mongodb://localhost:27017/Information_about_writers', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose_1.default.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connect'));
app.use(express_1.default.json());
app.use('/writers', writers_1.default);
app.use('/books', books_1.default);
let port = process.env.PORT || '3000';
app.listen(port);
//# sourceMappingURL=app.js.map