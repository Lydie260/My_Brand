import { Router } from 'express';
import userControllers from '../controllers/userController.js';
//import blogControllers from '../controllers/blogControllers.js';
import { checkUser, loginUser } from '../middlewares/checkUserExist.js';
import { verifyUserToken } from '../middlewares/verifyToken.js';
import verifyAccess from '../middlewares/verifyAccess.js';
import registerValidations from '../middlewares/validation.js'
import userModel from '../models/userModel.js';
const route = Router();

//user routes
route.post("/signup", checkUser, userControllers.signup);
route.post("/login",loginUser);
route.get("/users",userControllers.getAllUsers)
route.get("/user/:id",userControllers.getOne);
route.put("/user/update/:id",userControllers.updateUser);
route.delete("/user/delete/:id",userControllers.deleteUser);

export default route;
