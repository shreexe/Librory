
import  mongoose from "mongoose"

const Schema=mongoose.Schema

const bookscheme= new   Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,

    },
    
    image:{
        type:String,
        required:true,

    },
    featured:{
        type:Boolean,
    },
    available:{
        type: Number,
        required: true,
    },
})
export default mongoose.models.Book || mongoose.model("Book",bookscheme)
