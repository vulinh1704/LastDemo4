import express from 'express';
import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/lastDemoModule4').then(() => {
    console.log('Connection Success');
}).catch((err) => {
    console.log(err.message);
})
const app = express();
app.listen(3000, () => {
    console.log('Server is running!')
})