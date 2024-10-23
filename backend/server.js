import express from 'express';
import dotenv, { config } from "dotenv";

import { connectDB } from './config/db.js';

import productRoutes from "./routes/product.route.js"

dotenv.config();



const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());// this allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

//postman


app.listen(PORT,()=>{
    connectDB();
    console.log("server started at http://localhost:" + PORT);
});



