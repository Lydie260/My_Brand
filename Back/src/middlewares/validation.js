import joi from 'joi';


const registerValidations = (user) =>{
    const schema = joi.object().keys({
        fullName:joi.string().required(),
        email: joi.string().required().email(),
        phone:joi.number().required().min(10),
        password:joi.string().required().min(6)
    })
    return schema.validate(user);
}


const loginValidation = (user) =>{
    const schema = joi.object().keys({
        email: joi.string().required().email(),
        password: joi.string().required().min(6)
    })
    return schema.validate(user);
}




const deleteUser= (user) =>{
    const schema = joi.object().keys({
        _id: joi.string().required(),
    })
    return schema.validate(user);
}
const createBlog = (user) =>{
    const schema = joi.object().keys({
        title:joi.string().required(),
        author:joi.string().required(),
        content:joi.string().required(),

    })
    return schema.validate(user);

}

export default {registerValidations,loginValidation, deleteUser,createBlog};
