import mongoose from "mongoose";
import {ENV} from "./env.js";

export const connectDB = async ()=>{
  try {
   const conn =  await mongoose.connect(ENV.MONGO_URL);
   console.log("Mongo DB connected successfully",conn.connection.host);
  }
  catch(error){
    console.log("Error connecting DB",error);
    process.exit(1);
  }
}