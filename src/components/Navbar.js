import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Badge, Box, Button, Modal, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";

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
  color: red;
  font-weight: bold;
`;
const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  padding-left: 200px;
`;

const Container2 = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid #000;
  margin-left: 40%;
  margin-right: 40%;
  margin-top: 15px;
  margin-bottom: 15px;
  
`

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
  const cart = useSelector((state) => state.cart.cart);

  const loggedin = useSelector((state) => state.auth.isLoggedin);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClose = (e) => setOpen(false);

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

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

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Left>Shopping Cart</Left>
        </Link>

        <Right>
        <Link to="/favourites" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#17C5C2", color: "#fff", marginRight: '5px' }}
                >
                  Favourites
                </Button>
              </Link>
          {!loggedin && (
            <>
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
                  style={{
                    borderColor: "#17C5C2",
                    color: "#000",
                    marginLeft: 5,
                  }}
                >
                  SignUp
                </Button>
              </Link>
            </>
          )}

          <Button onClick={() => setOpen(true)}>
            <Badge
              badgeContent={cart.length}
              color="primary"
              style={{ marginLeft: 10 }}
            >
              <ShoppingCartIcon color="success" />
            </Badge>
          </Button>
          {loggedin && (
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                onClick={() => dispatch({ type: "Logouthandler" })}
              >
                Logout
              </Button>
            </Link>
          )}
        </Right>
      </Wrapper>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={1000}
          height={500}
          bgcolor="white"
          sx={{
            margin: "0 auto",
            paddingTop: "20px",
            paddingLeft: "20px",
            marginTop: "30px",
            borderRadius: "4px",
            overflowY: "scroll",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{
              textAlign: "center",
              borderBottom: "3px solid red",
              marginRight: "16px",
            }}
          >
            Your Cart Items
          </Typography>

          {cart.map((prod) => {
            return <Cart key={prod.id} item={prod} />;
          })}

          <Container2>
            <h2>
              <span style={{ color: "red", fontWeight: "bolder"}}>
                Total Items:
              </span>{" "}
              {totalItems}
            </h2>
            
            <h2 style={{ marginTop: "30px" }}>
              <span style={{ color: "red", fontWeight: "bolder" }}>
                {" "}
                Price:
              </span>{" "}
              {totalPrice}
            </h2>
          </Container2>

          {cart.length === 0 && (
            <h3 style={{ textAlign: "center", marginTop: "200px" }}>
              Cart is empty.
            </h3>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default Navbar;
