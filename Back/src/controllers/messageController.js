import messageModel from "../models/messageModel.js";


import handleCRUD from "../utilis/handleCrud.js"



const addMessage = handleCRUD.createOne(messageModel);
const deleteMessage = handleCRUD.deleteOneById(messageModel);
const getOneMessage = handleCRUD.getOneById(messageModel);
const getAllMessages = handleCRUD.getAll(messageModel);
const updateMessage = handleCRUD.updateOneById(messageModel);



export default { addMessage,deleteMessage,getOneMessage,getAllMessages,updateMessage}

