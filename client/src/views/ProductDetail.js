import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link, navigate } from "@reach/router";
import { DeleteButtonProduct } from "../Components/DeleteButtonProduct";
/* import { UpdateButtonProduct } from "../Components/UpdateButtonProduct"; */

export const ProductDetail = (props) => {
  const { id } = props;
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + id)
        .then((res) =>
      setProduct({
        ...res.data,
      })
    );
  }, [id]);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <h2>Product Detail</h2>
          <p>Title: {product.title}</p>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <DeleteButtonProduct productId={product._id} successCallback={()=> navigate('/')}/><span> </span>
          <Link to={"/" + product._id + "/edit"}>Edit {product.title}</Link><span> </span>
          {/* <UpdateButtonProduct productId={product._id} successCallback={()=> navigate('/' + product._id + '/edit')}/><br/> */}
          <Link to="/">Back to Home</Link>
        </Col>
      </Row>
    </Container>
  );
};
