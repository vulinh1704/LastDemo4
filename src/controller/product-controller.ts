import {Request, Response} from "express";
import {Product} from "../model/product";

class ProductController {
    findAll = async (req: Request, res: Response) => {
        let products = await Product.find().populate('category', 'name');
        return res.status(200).json(products);
    }
    save = async (req: Request, res: Response) => {
        let product = req.body;
        product = await Product.create(product);
        return res.status(201).json(product);
    }
}
export default new ProductController();