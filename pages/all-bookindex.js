import { getAllBooks } from "../api-helpers/render/util"
import AllBook from "../components/allbook"
import BookItem from "../components/bookItem"

export default function BooksHome(books) {
    return(
        <AllBook data={books}/> 
    )
}

export const getStaticProps=async()=>{
    const books= await getAllBooks()
    return{
        props:
        {
            books,
        }
    }
}