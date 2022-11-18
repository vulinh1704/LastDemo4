import {Router} from "express";
import productController from "../controller/product-controller";
import {auth} from "../middleware/auth";

export const productRouter = Router();
productRouter.use(auth);
productRouter.get('/', productController.findAll);
productRouter.post('/', productController.save);