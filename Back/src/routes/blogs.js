import {Router} from 'express';
import blogControllers from '../controllers/blogControllers.js';
// import { checkUser } from '../middlewares/checkUserExist.js';
import {verifyUserToken} from "../middlewares/verifyToken.js"
import  verifyAccess from "../middlewares/verifyAccess.js"
import {commentingOnblog,likeblog} from "../utilis/handleCrud.js"
import registerValidations from "../middlewares/validation.js"

const router = Router();
router.post("/api/create-blog",verifyUserToken, blogControllers.createBlog);
router.get("/api/get-all-blogs",blogControllers.getallBlogs)
router.get("/api/blog/:id",blogControllers.getoneBlog);
router.put("/api/blog-update/:id",verifyUserToken, blogControllers.updateBlog);
router.delete("/api/delete-blog/:id",verifyUserToken, blogControllers.deleteBlog);
router.post("/api/blog/:blog_id/comment",verifyUserToken,commentingOnblog);
router.post("/api/blog/:blog_id/like",verifyUserToken, likeblog);

export default router;
