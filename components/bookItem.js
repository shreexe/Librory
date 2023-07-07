import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea } from '@mui/material'
const BookItem = ({ title, author, image, available, id }) => {
    return (

        <Card sx={{ width: "100%", height: "100%" }}>
            <div style={{ width: "100%", height: "50%"}}>
                <img src={image} alt={title} width={"100%"} height={"100%"} />
            </div>




            <CardContent>
                <Typography gutterBottom variant="h4" color="black" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    {author}

                </Typography>
                <Typography variant='body2' color='text.primary'>
                    Available:  {available}

                </Typography>

            </CardContent>

            <CardActions>
                <Button variant="contained"size="medium" style={{backgroundColor:"#708090"}} >Cart</Button>

            </CardActions>
        </Card>

    )
}

export default BookItem