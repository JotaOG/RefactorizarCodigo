import React, { useEffect, useState } from "react";
import { ProductForm } from "./ProductForm";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { Link, navigate } from "@reach/router";

export const ProductUpdate = (props) => {
  const { id } = props;
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + id)
      .then((res) => {
        setProduct(res.data);
        setLoaded(true);
    });
  }, [id]);

  const updateProduct = (product) => {
    console.log(product);
    axios
      .put("http://localhost:8000/api/product/" + id, product)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      navigate("/");
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          {loaded && (
            <>
              <ProductForm
                initialTitle={product.title}
                initialPrice={product.price}
                initialDescription={product.description}
                onSubmitProp={updateProduct}
              />
              <br />
              <Link to="/">Back to Home</Link><br/>
              <Link to={"/product/" + product._id}>Back to {product.title} Detail</Link>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};
