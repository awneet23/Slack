import express from "express";
import {ENV} from "./config/env.js"
import { connectDB } from "./config/db.js";



const app = express();

app.get("/", (req, res) => {
  res.send("hello world123");
});



app.listen(ENV.PORT, () => {
  console.log(`Server running on port ${ENV.PORT}`);
  connectDB(); 
});






// 4xxNrhdYT91Fkisd
