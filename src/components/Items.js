import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import styled from "styled-components";
import products from "../data";
import Product from "../pages/Product";
import { Form, FormControl } from "react-bootstrap";

const Centering = styled.span`
  text-align: center;
  font-size: 30px;
  margin-top: 20px;
  font-weight: bold;
  color: gray;
  border-bottom: 3px solid red;
  margin-left: 45%;
`;

const SearchTitle = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-top: 20px;

`
const Title = styled.div`
  margin-right: 5px;
  color: #000;
  font-weight: bold;
`

 


const Items = () => {

  const [searchitem, setSearchitem] = useState('')
  

  const searchchangehandler = (e) => {
      setSearchitem(e.target.value)
  }

  return (
    <>
      <Centering>All Items</Centering>
      <SearchTitle>
        <Title>
        Search
          </Title>
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search Product"
          className="me-2"
          aria-label="Search"
          onChange={searchchangehandler}

        />
        </Form>
      </SearchTitle>
      
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
    </>
  );
};

export default Items;
