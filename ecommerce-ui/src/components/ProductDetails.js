import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`http://localhost:5000/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const imagePath = product.imagePath ? require(`../images/${product.imagePath}`) : null;

  return (
    <Container>
      {product && (
        <Row>
          <Col md={6}>
            {imagePath && <Image src={imagePath.default} fluid />}
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Card.Text>Description: {product.description}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>)}
</Container>
);
};

export default ProductDetails;
     
