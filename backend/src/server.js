import express from "express";
import {ENV} from "./config/env.js"
import { connectDB } from "./config/db.js";
import {clerkMiddleware} from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./src/inngest"


const app = express();
app.use(clerkMiddleware());

app.use(express.json())

app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/", (req, res) => {
  
  res.send("hello world123");
});



const startServer = () =>{
  try{
    await connectDB();
    if (ENV.NODE_ENV !== 'production'){
      app.listen(ENV.PORT, () => {
  console.log(`Server running on port ${ENV.PORT}`);
  
});



    }
  }
  catch(err){
    console.log(err);
  }
};

export default app;



// 4xxNrhdYT91Fkisd
