import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const imagePath = product.imagePath ? require(`../images/${product.imagePath}`) : null;

  return (
    <Card className="my-3 p-3 rounded">
      {imagePath && <Card.Img variant="top" src={imagePath.default} />}
      <Card.Body>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
        <Card.Text as="h3">${product.price}</Card.Text>
        <Link to={`/product/${product.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
