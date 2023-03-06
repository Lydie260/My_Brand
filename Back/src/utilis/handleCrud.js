

const createOne = (Model) => async (req,res,next) => {
    {
    try {
        const doc = await Model.create(req.body);
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
        const doc = await Model.find();
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
        const doc = await Model.findById(req.params.id);
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
        const doc = await Model.findByIdAndDelete(req.params.id);
        if (!doc) {
            return res.status (404).json ({message:""});
        }
        return res.status (200).json ({message:"succcessfully deleted",data:doc});
    }catch (error) {
        console.log (error)
    }
    }
};

export default {createOne,getAll,getOneById,updateOneById,deleteOneById}

