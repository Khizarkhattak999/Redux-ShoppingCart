import React from "react";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import products from "../data";
// import { Col, Image, ListGroup, Row } from "react-bootstrap";


const Details = () => {
  const params = useParams();

  const product = products.find(p => p.id === params._id);
  console.log(product)

  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" sx={{ backgroundColor: "#000", margin: 2 }}>
          Back
        </Button>
      </Link>

      {/* <Row>
        <Col md={6}>
            <Image src={product.img} alt={product.title} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
          <ListGroup.Item>
                  <h3>{product.title}</h3>
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row> */}
    </>
  );
};

export default Details;
