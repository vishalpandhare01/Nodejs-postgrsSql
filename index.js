import express from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/userRoutes.js';
import prisma from './db/prisma.js'
dotenv.config()
const app = express()

const port = 8000
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(userRoute)

app.listen(port,()=>{
    console.log('server running on port ',port)
})

