import { Router } from 'express';
import userControllers from '../controllers/userController';
import { checkUser, loginUser } from '../middlewares/checkUserExist';

const route = Router();



route 
 .route("/")
 .post( checkUser, userControllers.signup);

 route.
 post("/login", loginUser);


export default route;
