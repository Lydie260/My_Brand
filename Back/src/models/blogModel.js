import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    author:{
        type: String,
    },
    description:{
        type: String,
    }
})