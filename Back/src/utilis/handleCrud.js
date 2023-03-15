import blogModel from "../models/blogModel.js";
import User from "../models/userModel.js";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();
today = dd + "/" + mm + "/" + yyyy;


const createOne = (Model) => async (req,res,next) => {
    {
    try {
        const doc = await Model.create(req.body)
        if (!doc) {
            return res.status (404).json ({message:"failed to register"});
        }
       
        return res.status(200).json({message: 'Created successfully', data: doc});
            }catch(error){
              console.log(error)
            }
          }
          
        }
const getAll = (Model) => async (req,res,next) => {
    {
    try {
        const doc = await Model.find().select("-password");
        if (!doc) {
            return res.status (404).json ({message:"failed to get all"});
        }
        return res.status (200).json ({message:"succcessfully retrieved data",data:doc});
    }catch (error) {
        console.log (error)
    }
    }
};

const getOneById = (Model) => async (req,res,next) => {
    {
    try {
        const doc = await Model.findById(req.params.id).select("-password");
        if (!doc) {
            return res.status (404).json ({message:"failed to retrieved"});
        }
        return res.status (200).json ({message:"succcessfully user retrieved",data:doc});
    }catch (error) {
        console.log (error)
    }
    }
};

const updateOneById = (Model) => async (req,res,next) => {
    {
    try {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
        }).select("-password");
        if (!doc) {
            return res.status (404).json ({message:"failed to update"});
        }
        return res.status (200).json ({message:"succcessfully updated",data:doc});
    }catch (error) {
        console.log (error)
    }
    }
};

const deleteOneById = (Model) => async (req,res,next) => {
    {
    try {
        const doc = await Model.findByIdAndDelete(req.params.id).select("-password");;
        if (!doc) {
            return res.status (404).json ({message:""});
        }
        return res.status (200).json ({message:"succcessfully deleted",data:doc});
    }catch (error) {
        console.log (error)
    }
    }
};

export const commentingOnblog = (req, res) => {
    const { blog_id } = req.params;
    const { comment } = req.body;
    // console.log(blog_id);
    User.findOne({
      _id: req.user.id
    }).then((user) => {
  //  console.log(user);
      const newComment = {
        user_id: user._id,
        email: user.email,
        comment,
        postedDate: today,
      };
      blogModel
        .findOne({ _id: blog_id })
        .then((blog) => {
          if (blog) {
            blog.comments.push(newComment);
            blog
              .save()
              .then((result) => res.json(result))
              .catch((error) => res.status(500).json({ error: error.message }));
          } else res.status(404).json({ error: "blog doesn't exist" });
        })
        .catch((error) => res.status(500).json({ error: error.message }));
    });
  };
  export const likeblog = async (req, res) => {
    const { blog_id } = req.params;
    const user_id = req.user.id;
    const newLike = {
      user_id,
    };
  blogModel.findOne({_id:blog_id})
      .then(blog=>{
          if(blog)
          {
              const found = blog.likes.some(el => el.user_id.toString() === user_id.toString());
              console.log(found)
              if (found) {
                 blog.likes=blog.likes.filter(item=>item.user_id.toString()!==user_id.toString())
              }else
              {
                   blog.likes.push(newLike);
              }
              blog.save()
              .then(result=>res.json(result))
              .catch(error=>res.status(500).json({error:error.message}))
          }
          else res.status(404).json({error:"blog doesn't exist"})
      })
      .catch(error=>res.json({error:error.message}))
  };


export default {createOne,getAll,getOneById,updateOneById,deleteOneById}

