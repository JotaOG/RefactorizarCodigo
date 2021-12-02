import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

export const DeleteButtonProduct = (props) => {
  const { productId, successCallback } = props;
  const deleteProduct = () => {
    axios
      .delete("http://localhost:8000/api/product/" + productId)
      .then((res) => successCallback())
      .catch((err) => console.log(err));
  };
  return <Button onClick={deleteProduct}>Delete Product</Button>;
};
