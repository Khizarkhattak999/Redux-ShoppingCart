import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box, Grid, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { adjustqty, removefromcart } from "../store/Actions";
import styled from "styled-components";
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = ({ item }) => {

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  const cart = useSelector(state => state.cart.cart)
  

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach(cur => {
      items += cur.qty;
      price += cur.qty * cur.price
    });

    setTotalItems(items)
    setTotalPrice(price)

  }, [cart, totalItems, totalPrice, ])

  const dispatch = useDispatch()

  const Wrapper = styled.div`
    display: flex;
    width: 100%;
    max-height: 50%;
    
  `
  const Container2 = styled.div`
    width: 20%;
    height: 30%;
    margin-left: 20px;
    margin-top: 20px;
    border: 2px solid green;
    padding: 10px;
  `

  const Container = styled.div`
    display: flex;
    border-radius: 20px;
    border: 1px solid #000;
    width: 100%;
    max-height: 50%;
    margin-top: 10px;
    
  `;

  const Image = styled.div`
    img {
      min-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 20px;
    }
  `;
  const Info = styled.div`
    display: flex;
    width: 200px;
    height: 100%;
    margin-left: 5px;
    flex-direction: column;
    align-items: center;
    margin-left: 0px;

  `;
  const Title = styled.div`
    margin-top: 2px;
    margin-left: 28px;
    font-size: 27px;
    color: green;
    font-weight: bolder;
  `
  const Description = styled.div`
    margin-top: 15px;
    font-size: 20px;
    font-weight: bolder;

  `
  const Total = styled.div`
    margin-left: 3px;
    font-size: 25px;
    font-weight: bolder;
    margin-top: 80px;
  `
  const Quantity = styled.div`
    display: flex;
    flex-direction: column;
  `
  const Input = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 18px;
    margin-top: 20px;

    span{
      font-weight: bolder;
      color: red;
      margin-right: 3px;
      font-size: 20px;
    }

    input{
      width: 45px;
    }
  `
const Delete = styled.div`
  margin-top: 130px;
  color: red;
  margin-left: 50px;
`

  return (
    <>
      <Wrapper>
      <Container>
        <Image>
          <img src={item.img} alt={item.title} />
        </Image>
        <Info>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        <Total>
          $  {item.price}
        </Total>
          </Info>
        <Quantity>
          <Input>
          <span>Qty</span>
          <input type='number' value={item.qty} />
          </Input>

          <Delete><Button color="error" onClick={() => dispatch(removefromcart(item.id))}><DeleteIcon  fontSize="large"/></Button></Delete>
        </Quantity>
      </Container>
        {/* <Container2>
          <h2><span style={{color: 'red', fontWeight: 'bolder'}}>Total Items: </span> {totalItems}</h2>
          <h2 style={{marginTop:'30px'}}><span style={{color: 'red', fontWeight: 'bolder'}}> Price:</span> {totalPrice}</h2>
        </Container2> */}
      </Wrapper>
      
      
    </>
  );
};

export default Cart;
