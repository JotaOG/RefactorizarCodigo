import React from "react";
import { Link } from "@reach/router";
import { Container, Row, Col } from "react-bootstrap";
import { DeleteButtonProduct } from "./DeleteButtonProduct";

export const ProductList = (props) => {
  const { products, removeProductFromDom } = props;

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <h2>Product List</h2>
          {products.map((product, idx) => {
            return (
              <p key={idx}>
                <Link to={"/product/" + product._id}>{product.title}</Link>
                <span> </span>
                <Link to={"/" + product._id + "/edit"}>Edit {product.title}</Link>
                <span> </span>
                <DeleteButtonProduct productId={product._id} successCallback={()=>removeProductFromDom(product._id)}/>
                <span> </span>
              </p>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
