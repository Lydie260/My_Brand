import { Router } from 'express';
import userControllers from '../controllers/userController.js';
import { checkUser, loginUser } from '../middlewares/checkUserExist.js';

const route = Router();

//user routes
route.post("/signup", checkUser, userControllers.createUser);
route.post("/login",loginUser,userControllers);
route.get("/users",userControllers.getAllUsers)
route.get("/user/:id",userControllers.getOneUser);
route.put("/user/update/:id",userControllers.updateUser);
route.delete("/user/delete/:id",userControllers.deleteUser);

export default route;
