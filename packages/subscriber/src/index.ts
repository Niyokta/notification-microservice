import express from "express"


const app=express();
const PORT=process.env.SUBSCRIBER_PORT

app.listen(PORT,()=>{
    console.log(`Subscriber running on port ${PORT}`)
})