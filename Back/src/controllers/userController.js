import userModel from "../models/userModel";
import handleCrud from "../utilis/handleCrud";

const signup= handleCrud.createOne(userModel);
 const getOne = handleCrud.getOneById(userModel);
 const getAllUsers = handleCrud.getAll(userModel);
 const updateUser = handleCrud.updateOneById (userModel);
 const deleteUser = handleCrud.deleteOneById(userModel);

 
 export default {signup,getOne,getAllUsers,deleteUser,updateUser}
