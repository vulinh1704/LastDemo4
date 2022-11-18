import {Request, Response} from "express";
import bcrypt from 'bcrypt';
import {User} from "../model/user";
import jwt from "jsonwebtoken";
import {SECRET} from "../middleware/auth";

class UserController {
    register = async (req: Request, res: Response) => {
        let user = req.body;
        user.password = await bcrypt.hash(user.password, 10);
        user = await User.create(user);
        return res.status(201).json(user);
    }
    login = async (req: Request, res: Response) => {
        let user = req.body;
        let userFind = await User.findOne({
            username: user.username
        });
        if (!userFind) {
            return res.status(200).json({
                message: "User is not exist"
            })
        } else {
            let comparePassword = await bcrypt.compare(user.password, userFind.password);
            if (!comparePassword) {
                return res.status(200).json({
                    message: "Password is wrong"
                });
            } else {
                let payload = {
                    idUser: userFind._id,
                    username: userFind.username
                }
                let token = await jwt.sign(payload, SECRET, {
                    expiresIn: 36000
                });
                return res.status(200).json({
                    token: token
                })
            }
        }
    }
}

export default new UserController();