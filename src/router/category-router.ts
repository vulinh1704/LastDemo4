import {Router} from "express";
import CategoryController from "../controller/category-controller";
import {auth} from "../middleware/auth";

export const categoryRouter = Router();
categoryRouter.use(auth);
categoryRouter.get('/', CategoryController.findAll);
categoryRouter.post('/', CategoryController.save);