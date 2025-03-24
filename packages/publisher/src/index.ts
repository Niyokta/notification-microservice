import express from "express"
import { publishRouter } from "./Routes/publish";

const app=express();
app.use(express.json());
const PORT=process.env.PUBLISHER_PORT

app.use("/api/v1",publishRouter)
app.listen(PORT,()=>{
    console.log(`Publisher running on port ${PORT}`)
})