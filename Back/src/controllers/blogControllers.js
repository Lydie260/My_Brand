import blogModel from "../models/blogModel.js";
import handleCRUD from "../utilis/handleCRUD.js";

 const createBlog = handleCRUD.createOne(blogModel);
 const getoneBlog = handleCRUD.getOneById(blogModel);
 const getallBlogs = handleCRUD.getAll(blogModel);
 const updateBlog = handleCRUD.updateOneById(blogModel);
 const deleteBlog = handleCRUD.deleteOneById(blogModel);

 export default {createBlog,getoneBlog,getallBlogs,updateBlog,deleteBlog}