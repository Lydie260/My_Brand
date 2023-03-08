import { Router } from 'express';
import userControllers from '../controllers/userController';
import { checkUser, loginUser } from '../middlewares/checkUserExist';
import { verifyUserToken } from '../middlewares/verifyToken';
import verifyAccess from '../middlewares/verifyAccess';
const route = Router();



route 
 .route("/")
 .post( checkUser, userControllers.signup);

 route.
 post("/login", loginUser);
 route.use(verifyUserToken);
 route
 .route("/")
 .get(verifyAccess("Admin"),userControllers.getAllUsers);
route
.route("/:id")
.patch(userControllers.updateUser)
.delete(verifyAccess("Admin"),userControllers.deleteUser)
.get(verifyAccess("Admin"),userControllers.getOne);

sweetheart


export default route;
