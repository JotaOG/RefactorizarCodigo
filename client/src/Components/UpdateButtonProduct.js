import React from 'react';
import { Button } from 'react-bootstrap';

export const UpdateButtonProduct = (props) => {
    const { successCallback } = props;
    
    /* const updateProduct = () => {
    axios.put('http://localhost:8000/api/product/' + productId)
    .then((res) => successCallback())
    .catch((err) => console.log(err)); */

    return (<Button variant="warning" onClick={successCallback}>Update</Button>);
}