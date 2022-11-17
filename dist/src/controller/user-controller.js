"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../model/user");
class UserController {
    constructor() {
        this.register = async (req, res) => {
            let user = req.body;
            user.password = bcrypt_1.default.hash(user.password, 10);
            user = await user_1.User.create(user);
            return res.status(201).json(user);
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map