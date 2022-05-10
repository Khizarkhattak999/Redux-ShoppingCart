import styled from "@emotion/styled";
import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { favourites, removefromfavourites } from "../store/Actions";
import {useSelector, useDispatch} from  'react-redux'
import { Grid } from "@mui/material";


const Favourites = () => {

    const favourites = useSelector(state => state.cart.favourites)
    const dispatch = useDispatch()

  return (
    <>
      <Title>Favourites</Title>
      <Title>{favourites.length == 0 && <h2 style={{color: 'red', marginTop: '30px'}}>You have no Favourite Products.</h2>}</Title>
      <Wrapper>
    <Grid container spacing={5}>
    {favourites.map((item) => {
    return (
        <Grid item xs={4} >
        <Card sx={{ minWidth: 300 }}>
        <CardMedia
          component="img"
          height="140"
          image={item.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => dispatch(removefromfavourites(item.id))}>Remove</Button>
        </CardActions>
      </Card>
      </Grid>
      
      )
    })}
    </Grid>
    </Wrapper>
      
    </>
  );
};

export default Favourites;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: bolder;
`
const Wrapper = styled.div`
 display: flex;
 justify-content: space-around;
 margin-left: 10%;
 margin-right: 10%;
 margin-top: 10px;
 padding: 20px;
`