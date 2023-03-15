import {Router} from 'express';
import messageController from '../controllers/messageController';



const router = Router();

router.post("/add-comment", commentmessageControllerController.addComment);
router.get("/getOne-Comment", messageController.getOneComment);
router.get("/get-allcomments", messageController.getAllComments);
router.put("/comment/{id}", messageController.updateComment);
router.delete("/delete-comment/{id}",messageController.deleteComment);



export default router;
