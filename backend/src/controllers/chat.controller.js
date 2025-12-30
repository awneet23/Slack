import { generateStreamToken } from "../config/stream.js"



export const getStreamToken = async (req,res) =>{
  try{
    const token = await generateStreamToken(req.auth().userId);
    res.status(200).json({token});
  }
  catch(err){
    console.log("error generate token")
res.staus(500).json({
  
  message:"Failed to generate stream token",
})

  }
}