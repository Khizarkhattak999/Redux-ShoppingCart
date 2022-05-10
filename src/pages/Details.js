import React from "react";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import products from "../data";
import { Col, Image, ListGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addtocart } from "../store/Actions";



const Details = () => {

  const dispatch = useDispatch()
  
  const params = useParams();
  const product = products.find(p => p.id == params._id);
  console.log(product)

  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" sx={{ backgroundColor: "#000", margin: 2 }}>
          Back
        </Button>
      </Link>

      <Row style={{display: 'flex', justifyContent: 'space-around', marginTop: '10px'}}>
        <Col md={6}>
            <Image src={product.img} alt={product.title} fluid style={{width: '500px', height: '350px', objectFit: 'contain'}}/>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush" style={{marginRight: '200px', marginTop: '10px', border: '2px solid gray', padding: '20px',}}>
          <ListGroup.Item > 
                  <h3 style={{fontSize: '30px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{product.title}</h3><hr></hr>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4 style={{fontSize: '20px', color: 'gray', marginTop: '30px'}}><span  style={{color: 'green', marginRight: '5px' , fontWeight: '300px'}}>Description:</span> {product.description}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h3 style={{border: '2px solid gray' , fontSize: '28px', marginTop: '100px', paddingLeft: '30px'}}><span style={{color: 'green', marginRight: '5px' , fontWeight: 'bolder'}}>Price:</span> ${product.price}</h3></ListGroup.Item>
          </ListGroup>
          <Button size="large" color="error" variant="contained" style={{width: '57%' ,marginTop: '10px', }} onClick={()=> dispatch(addtocart(product.id))}>Add to cart</Button>
        </Col>
      </Row>
    </>
  );
};

export default Details;
