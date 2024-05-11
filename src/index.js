import { app } from "./app.js";
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`app is listening on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log(`Error`, error);
  });

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
