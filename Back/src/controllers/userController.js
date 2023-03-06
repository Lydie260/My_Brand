import userModel from "../models/userModel";
import handleCrud from "../utilis/handleCrud";

 const signup= handleCrud.createOne(userModel);


 
 export default {signup}
