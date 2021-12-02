import React, { useState } from "react";
import { Col, Container, Row, Form, FormGroup, Button, FormLabel, FormControl  } from "react-bootstrap";

export const ProductForm = (props) => {
  const { onSubmitProp, initialTitle, initialPrice, initialDescription } = props;
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ title, price, description });
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <h2>Product Manager</h2>
          <Form onSubmit={onSubmitHandler}>
            <FormGroup>
            <FormLabel htmlFor="title">Title: </FormLabel>
            <FormControl
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              minLength='3'
            />
          </FormGroup>
          <FormGroup>
          <FormLabel htmlFor="price">Price: </FormLabel>
            <FormControl
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              min={0}
            />
          </FormGroup>
          <FormGroup>
          <FormLabel htmlFor="description">Description: </FormLabel>
            <FormControl
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              minLength='3'
            />
          </FormGroup>
            <Button type="submit" variant='primary'>Add Product</Button><span> </span>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
