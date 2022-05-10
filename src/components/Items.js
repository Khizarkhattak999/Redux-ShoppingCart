import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import styled from "styled-components";
import Product from "../pages/Product";
import { Form, FormControl } from "react-bootstrap";
import { Search } from "@mui/icons-material";
import { useSelect } from "@mui/base";
import { useSelector } from "react-redux";

const Centering = styled.span`
  text-align: center;
  font-size: 30px;
  margin-top: 20px;
  font-weight: bold;
  color: red;
  border-bottom: 3px solid aqua;
  margin-left: 45%;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 20px;

  :focus-within{
    box-shadow: 0 0 0 3px #f90;
  }
`;
const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 0;
  background-color: #d8d8d8;
  color: #000;

  :focus {
    outline: none;
  }
`;
const HeaderSearchIconContainer = styled.div`
  background-color: orange;
  color: #000;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;



 


const Items = () => {

  const [searchitem, setSearchitem] = useState('')

  const products = useSelector((state) => state.cart.products)
  
  const loggedin = useSelector((state) => state.auth.isLoggedin)
  

  const searchchangehandler = (e) => {
      setSearchitem(e.target.value)
  }

  return (
    <>
      <Centering>All Items</Centering>
      <HeaderSearch>
          <HeaderSearchInput type="text" onChange={searchchangehandler}/>
          <HeaderSearchIconContainer>
            <Search />
          </HeaderSearchIconContainer>
        </HeaderSearch>
      
          
     <Box sx={{ marginTop: 10, marginLeft: 14 }}>
        <Grid container spacing={4}>
          {products.filter((val) => {
            if(searchitem===""){
              return val
            }else if (val.title.toLowerCase().includes(searchitem.toLowerCase())) {
                return val
            }
          }).map((item) => {
            return (
              <Product
                img={item.img}
                title={item.title}
                description={item.description}
                price={item.price}
                key={item.id}
                id={item.id}
              />
            );
          })}
        </Grid>
      </Box>
      {/* {!loggedin && 
      <h2 style={{textAlign: 'center', marginTop: '20px'}}>You must be Logged In to  view the Items.</h2>} */}
    </>
  );
};

export default Items;
