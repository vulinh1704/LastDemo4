"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../model/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class UserController {
    constructor() {
        this.register = async (req, res) => {
            let user = req.body;
            user.password = await bcrypt_1.default.hash(user.password, 10);
            user = await user_1.User.create(user);
            return res.status(201).json(user);
        };
        this.login = async (req, res) => {
            let user = req.body;
            let userFind = await user_1.User.findOne({
                username: user.username
            });
            if (!userFind) {
                return res.status(200).json({
                    message: "User is not exist"
                });
            }
            else {
                let comparePassword = await bcrypt_1.default.compare(user.password, userFind.password);
                if (!comparePassword) {
                    return res.status(200).json({
                        message: "Password is wrong"
                    });
                }
                else {
                    let payload = {
                        idUser: userFind._id,
                        username: userFind.username
                    };
                    let token = await jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                        expiresIn: 36000
                    });
                    return res.status(200).json({
                        token: token
                    });
                }
            }
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map