import axios from "axios"
export const getAllBooks= async()=>{
    const res= await axios.get("http://localhost:3000/api/mongoose") 
    const data= await res.data?.books
    return data
}
export const getfeaturedBooks=async()=>{
    const books=await getAllBooks()
    const featuredBooks=books.filter((book)=>book.featured==true)
    return featuredBooks
}