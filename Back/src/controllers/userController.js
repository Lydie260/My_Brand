import userModel from "../models/userModel.js";
import handleCrud from "../utilis/handleCrud.js";

const signup= handleCrud.createOne(userModel);
 const getOne = handleCrud.getOneById(userModel);
 const getAllUsers = handleCrud.getAll(userModel);
 const updateUser = handleCrud.updateOneById (userModel);
 const deleteUser = handleCrud.deleteOneById(userModel);

 
 export default {signup,getOne,getAllUsers,deleteUser,updateUser}
