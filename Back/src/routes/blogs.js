import {Router} from 'express';
import blogControllers from '../controllers/blogControllers';
import { verifyUserToken } from '../middlewares/verifyToken';
import verifyAccess from '../middlewares/verifyAccess';

const route = Router();
route.post("/api/create-blog", checkUser,blogControllers.createBlog);
route.get("/api/get-all-blogs",checkUser.blogControllers.getAllBlogs)
route.get("/get-one-blog",blogControllers.getoneBlog);
route.put("/update/{id}",blogControllers.updateBlog);
route.delete("/delete-blog/{id}",blogControllers.deleteBlog);

export default route;
