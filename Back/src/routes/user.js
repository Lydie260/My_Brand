import { Router } from 'express';
import userControllers from '../controllers/userController.js';
//import blogControllers from '../controllers/blogControllers.js';
import { checkUser, loginUser } from '../middlewares/checkUserExist.js';
import { verifyUserToken } from '../middlewares/verifyToken.js';
import verifyAccess from '../middlewares/verifyAccess.js';


const route = Router();
//user routes
route.post("/signup", checkUser,userControllers.signup);
route.post("/login",loginUser);
route.get("/users",userControllers.getAllUsers)
route.get("/user/:id",userControllers.getOne);
route.put("/user/update/:id",userControllers.updateUser);
route.delete("/user/delete/:id",userControllers.deleteUser);

//blog routes












// route 
//  .route("/")
//  .post( checkUser, userControllers.signup);

//  route.
//  post("/login", loginUser);
//  //route.use(verifyUserToken);
//  route
//  .route("/")
//  //.get(verifyAccess("Admin"),userControllers.getAllUsers);
// route
// .route("/:id")
// .patch(userControllers.updateUser)
// //.delete(verifyAccess("Admin"),userControllers.deleteUser)
// //.get(verifyAccess("Admin"),userControllers.getOne);



export default route;
