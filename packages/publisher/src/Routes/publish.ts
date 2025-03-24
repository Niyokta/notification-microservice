import express from "express";



export const publishRouter=express.Router();


publishRouter.post("/publish",(req,res)=>{
    res.send("hi")
})