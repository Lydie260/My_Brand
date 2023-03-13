import {Router} from 'express';
import blogControllers from '../controllers/blogControllers.js';
// import { checkUser } from '../middlewares/checkUserExist.js';

const router = Router();
router.post("/api/create-blog",blogControllers.createBlog);
router.get("/api/get-all-blogs",blogControllers.getallBlogs)
router.get("/blog/{id}",blogControllers.getoneBlog);
router.put("/update/{id}",blogControllers.updateBlog);
router.delete("/delete-blog/{id}",blogControllers.deleteBlog);

export default router;
