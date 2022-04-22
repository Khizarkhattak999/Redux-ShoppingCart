import React from "react";
import styled from "styled-components";
import { Badge, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  background-color: #fff;
  height: 60px;
  color: #1c393d;
  border-bottom: 2px solid #17c5c2;
`;
const Wrapper = styled.div`
  padding: 15px 20px;
  display: Flex;
  justify-content: space-around;
`;
const Left = styled.div`
  font-size: 20px;
  flex: 1;
  color: #17c5c2;
  font-weight: bold;
`;
const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  padding-left: 200px;
`;

// const Input = styled.input`
//   border: none;
// `;
// const SearchContainer = styled.div`
//   display: flex;
//   border: 1px solid gray;
//   align-items: center;
// `;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const Navbar = () => {
  const cart = useSelector(state => state.cart.cart)

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Left>Shopping Cart</Left>
        </Link>

        <Right>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{ backgroundColor: "#17C5C2", color: "#fff" }}
            >
              SignIn
            </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              style={{ borderColor: "#17C5C2", color: "#000", marginLeft: 5 }}
            >
              SignUp
            </Button>
          </Link>
          <Link to="/cart">
            <Button>
              <Badge
                badgeContent={cart.length}
                color="primary"
                style={{ marginLeft: 10 }}
              >
                <ShoppingCartIcon color="success" />
              </Badge>
            </Button>
          </Link>

          {/* <Link to="/">
              <Button variant="contained">Logout</Button>
            </Link> */}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
