import {Request, Response} from "express";
import bcrypt from 'bcrypt';
import {User} from "../model/user";

class UserController {
    register = async (req: Request, res: Response) => {
        let user = req.body;
        user.password = bcrypt.hash(user.password, 10);
        user = await User.create(user);
        return res.status(201).json(user);
    }
}
export default new UserController();