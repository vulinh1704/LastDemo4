"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://127.0.0.1:27017/lastDemoModule4').then(() => {
    console.log('Connection Success');
}).catch((err) => {
    console.log(err.message);
});
const app = (0, express_1.default)();
app.listen(3000, () => {
    console.log('Server is running!');
});
//# sourceMappingURL=index.js.map