import express from "express";
import { RedisClientConfig } from "../Config/clientinit";


export const publishRouter = express.Router();


publishRouter.post("/publish", async(req, res) => {
    try {
        const {data}=req.body
        const temp = RedisClientConfig.getInstance();
        await temp.publishMessage("emailqueue", JSON.stringify(data));
        res.send("hi")
    }
    catch(err){
        console.log("error in the route")
    }
});