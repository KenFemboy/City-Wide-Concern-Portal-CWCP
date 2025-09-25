import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
})

export default mongoose.model("post", userSchema)