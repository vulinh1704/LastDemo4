import {Request, Response} from "express";
import {Category} from "../model/Category";

class CategoryController {
    findAll = async (req: Request, res: Response) => {
        let categories = await Category.find();
        return res.status(200).json(categories);
    }
    save = async (req: Request, res: Response) => {
        let category = req.body;
        category = await Category.create(category);
        return res.status(201).json(category);
    }
}
export default new CategoryController();