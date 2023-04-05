import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
          <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product.id}`}>
              <Card.Img variant="top" src={require(`../images/${product.imagePath}`).default} />
            </Link>
            <Card.Body>
              <Link to={`/product/${product.id}`}>
                <Card.Title as="div">
                  <strong>{product.name}</strong>
                </Card.Title>
              </Link>
              <Card.Text as="h3">${product.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
