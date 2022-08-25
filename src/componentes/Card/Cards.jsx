import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';

function Cards({ src, altImg, titleCard, descripcion, titleButton }) {
  return (

    <Col md>
      <Card >
        <Card.Img variant="top" src={`${src}`} alt={`${altImg}`} height='auto' />
        <Card.Body>
          <Card.Title>{titleCard}</Card.Title>
          <Card.Text className='textCard'>{descripcion}</Card.Text>
          <Button variant="primary">{titleButton}</Button>
        </Card.Body>
      </Card>
    </Col>

  );
}

export default Cards;