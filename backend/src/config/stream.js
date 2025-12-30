import {StreamChat} from "stream-chat";
import { ENV } from "../config/env.js";

const streamClient = StreamChat.getInstance(ENV.STREAM_API_KEY,ENV.STREAM_API_SECRET);

export const upsertStreamUser = async (userData) =>{
  try{
    await streamClient.upsertUser(userData);
    console.log("Stream user upserted successfully",userData.name);
    return userData;
  }
  catch(err){
    console.log("Error upserting stream user",err);

  }
}

export const deleteStreamUser = async (userId) =>{
  try{
    await streamClient.deleteUser(userId);
    console.log("user deleted successfully")
  }
  catch(err){
    console.log("Error deleting user",error);

  }
}

export const generateStreamToken = (userId) =>{
  try{
const userIdString = userId.toString();
return streamClient.createToken(userIdString);
  }
  catch(err){
console.log("Error generating Stream token",err);
return null;
  }
}