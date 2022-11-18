import {Schema, model} from 'mongoose'
import {ICategory} from "./category";
interface IProduct {
    name ?: string;
    price ?: number;
    category ?: ICategory;
}

const productSchema = new Schema<IProduct>({
    name : String,
    price : Number,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

const Product = model<IProduct>('Product', productSchema);
export {Product};