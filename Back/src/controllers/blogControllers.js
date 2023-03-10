import blogModel from "../models/blogModel.js";
import handleCRUD from "../utils/handleCRUD.js";

 const createBlog = handleCRUD.createOne(blogModel);
 const getoneBlog = handleCRUD.getOneById(blogModel);
 const getAllBlogs = handleCRUD.getAll(blogModel);
 const updateBlog = handleCRUD.updateOneById(blogModel);
 const deleteBlog = handleCRUD.deleteOneById(blogModel);

 export default {createBlog,getoneBlog,getAllBlogs,updateBlog,deleteBlog}