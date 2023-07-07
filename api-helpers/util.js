import mongoose from "mongoose"

export const connectdb= async()=>{
   if(mongoose.connection[0]){
    return
   }
    await mongoose.connect(process.env.DB_URI
    ).then(()=>console.log("connected"))
    .catch((err)=>console.log(err))
}