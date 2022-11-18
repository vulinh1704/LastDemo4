"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = require("../model/Category");
class CategoryController {
    constructor() {
        this.findAll = async (req, res) => {
            let categories = await Category_1.Category.find();
            return res.status(200).json(categories);
        };
        this.save = async (req, res) => {
            let category = req.body;
            category = await Category_1.Category.create(category);
            return res.status(201).json(category);
        };
    }
}
exports.default = new CategoryController();
//# sourceMappingURL=category-controller.js.map