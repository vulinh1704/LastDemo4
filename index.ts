import express from 'express';
import mongoose from "mongoose";
import {router} from "./src/router/router";
import cors from 'cors';
mongoose.connect('mongodb://127.0.0.1:27017/lastDemoModule4').then(() => {
    console.log('Connection Success');
}).catch((err) => {
    console.log(err.message);
})
const app = express();
app.use(cors());
app.use(express.json());
app.use('', router);
app.listen(3000, () => {
    console.log('Server is running!')
})