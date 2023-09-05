import { Router } from "express";
const userRoute = Router()
import  {createUser, getuserData}  from "../controller/userdata.js";

userRoute.post('/createUser',createUser)
userRoute.get('/getuserData',getuserData)

export default userRoute