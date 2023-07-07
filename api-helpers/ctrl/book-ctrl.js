import Book from "../mod/bookscheme"
export const getBooks=async(req,res) => {
     let books
     try {
        books=await Book.find()
     } catch (error) {
        return new Error(error)
     }
     if(!books){
        return res.status(500).json({message: "Server Error"})
     }
     if (books.length==0){
        return res.status(404).json({message:"Not found"})
     }
     return res.status(200).json({books})
}


export const updateBookItem= async(res,req)=>{
    const id=req.query.id
    let book
    try{
        book= await Book.findByIdAndUpdate(id,{
            available,featured
        })
    }
    catch(err){
        return (err)
    }
    return res.status(200).json({message:"updated"})

}
export const addBooks=async(req,res)=>{
    const{title,author,image,featured,available

    }=req.body
    let book
    try {
        book=new Book({title,author,image,available,featured})
        book= await book.save()
    } catch (error) {
        return new Error(error)
    }
}