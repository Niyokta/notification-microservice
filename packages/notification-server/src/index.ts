import express from "express"
import notificationRoute from "./routes/notificationRoute";
import cors from "cors";


const app=express();
app.use( cors() )
const PORT=process.env.NOTIFICATION_SERVER_PORT

app.use(express.json());
app.use('/api/v1', notificationRoute);

app.listen(PORT,()=>{
    console.log(`Notification Server Running at port ${PORT}`)
})