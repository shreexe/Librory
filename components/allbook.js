import React from 'react'
import {Grid} from '@mui/material'
import BookItem from './bookItem'
const AllBook = ({data}) => {
  console.log("data",data)
  
  return (
     <div>
      <Grid padding={1} spacing={2} container>
        {data.books.map((book)=>
        (<Grid xs={6} sm={4} md={3} lg={2}  height={"500px"} width={"100%"} item 
          key={book._id}>
            <BookItem
              title={book.title}
              author={book.author}
              id={book._id}
              available={book.available}
              image={book.image}
              />
              
             
          </Grid>
        ))}
      </Grid>

     </div>
  )
}
export default AllBook