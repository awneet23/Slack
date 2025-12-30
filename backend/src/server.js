import "../instrument.js";
import * as Sentry from "@sentry/node";
import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./config/ingest.js"; 
import chatRoutes from "./routes/chat.route.js"



 
const app = express();

app.use(clerkMiddleware());
app.use(express.json());

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);



app.get("/", (req, res) => {
  res.send("API is running!");
});
app.get('/debug-sentry',(req,res)=>{
  throw new Error("my first sentry error")
})
Sentry.setupExpressErrorHandler(app);

// <--- FIXED: Added 'async' keyword here
const startServer = async () => {
  try {
    await connectDB();
    console.log("Database connected successfully");

    // Only listen on local. Vercel handles this automatically in production.
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => {
        console.log(`Server running on port ${ENV.PORT}`);
      });
    }
  } catch (err) {
    console.log("Error starting server:", err);
  }
};

// <--- FIXED: Actually call the function to start DB connection
startServer();

export default app;