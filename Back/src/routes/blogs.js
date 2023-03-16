import {Router} from 'express';
import blogControllers from '../controllers/blogControllers.js';
import {commentingOnblog,likeblog} from "../controllers/blogControllers.js";
import  {protect} from "../middlewares/verifyAccess.js";


const router = Router();
router.post("/api/create-blog",protect, blogControllers.createBlog);
router.get("/api/get-all-blogs",blogControllers.getAllBlogs)
router.get("/api/blog/:id",blogControllers.getOneBlog);
router.put("/api/blog-update/:id", blogControllers.updateBlog);
router.delete("/api/delete-blog/:id", blogControllers.deleteBlog);
router.post("/api/blog/:blog_id/comment",protect,commentingOnblog);
router.post("/api/blog/:blog_id/like",protect, likeblog);

export default router;
