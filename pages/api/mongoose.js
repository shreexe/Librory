import mongoose from "mongoose";
import { connectdb } from "../../api-helpers/util";
import { addBooks, getBooks } from "../../api-helpers/ctrl/book-ctrl";
export default async function handler(req,res) {
   await connectdb()

   if(req.method==='GET'){
   return getBooks(req,res);
   }
   else if(req.method==='POST'){
    return addBooks(req,res)
   }
}