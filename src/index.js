import dotenv from "dotenv";
import connectDB from "./db";

dotenv.config({
  path: "./env",
});
connectDB();

/*

import { DB_NAME } from './constants';
import mongoose from 'mongoose';
import express from 'express';
const app=express();
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERRR: ",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App listening on Port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("ERROR",error)
        throw error
    }
    
})();


*/
