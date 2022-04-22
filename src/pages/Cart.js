import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removefromcart } from "../store/Actions";

const Cart = () => {

  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Your cart items </h1>

      <Box sx={{ marginTop: 10, marginLeft: 14, marginBottom: 22 }}>
        <Grid container spacing={4}> 
           {cart.map((product) => {
            return (
              <Card sx={{ maxWidth: 345, marginLeft: 3, marginBottom: 2 }} key={product.id}>
                <Link to="/details">
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.img}
                    alt="green iguana"
                  />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#17C5C2",
                        color: "#fff",
                        justifyContent: "center",
                      }}
                    >
                      View
                    </Button>
                  </Link>
                  <Button
                  onClick={()=> dispatch(removefromcart())}
                      variant="outlined"
                      style={{
                        color: "#17C5C2",
                        justifyContent: "center",
                        marginLeft: 5,
                      }}
                    >
                      Remove
                    </Button>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Box> 

      {cart.length === 0 && (
        <h3 className="cartempty">Your Cart is empty.</h3>
      )}
    </>
  );
};

export default Cart;
