import { Router } from "express";
import * as userservice from "./Services/user.service.js";
const userController =Router();


userController.post('/signup',userservice.Signupservice);

 userController.put('/:id',userservice.CreateOrUpdate,userservice.Signupservice)

userController.get('/by-email', userservice.FindByEmail);

 userController.get('/:id',userservice.findByPK)

// userController.get





export default userController;