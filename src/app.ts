import express from "express";
import { errorHandler } from "./utils/handleError";

const app=express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello')
})

app.use(errorHandler)

export default app