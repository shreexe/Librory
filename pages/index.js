import { featuredBooks, getfeaturedBooks } from "../api-helpers/render/util"
import AllBook from "../components/allbook"

export default function Home(books) {
    console.log(books )
    return(
        <AllBook data={books} />


        
        
    )
}
export const getStaticProps = async()=>{
    const books=await getfeaturedBooks()
    return{props:{
        books,
    },}
}