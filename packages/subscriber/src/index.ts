import express from "express"
import { RedisClientConfig } from "./config/redisconfig";


const app=express();
const PORT=process.env.SUBSCRIBER_PORT

app.listen(PORT,async ()=>{

    console.log(`Subscriber running on port ${PORT}`)
    const temp=RedisClientConfig.getInstance();
    while(true){
        const message=await temp.RemoveFromQueue();
        if(message!=null){
            const data=JSON.parse(message);
            try{
                await fetch("http://localhost:3000/api/v1/notification/send",{
                    method:"POST",
                    body:JSON.stringify({
                        to:data.to,
                        subject:data.subject,
                        data:data.payload
                    }),
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
            }
            catch(err){
                console.log("error while sending mail : ",err)
            }
        
        }
    }
})