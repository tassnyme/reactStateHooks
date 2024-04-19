import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import '../index.css'
import Filter from './Filter';

function BasicExample({movie}) {
  return (
    <div className='container'>
      <div>
    <Card style={{ minWidth: '15rem',backgroundColor: ' #d5f5de' }}>
      <Card.Body>
        <Card.Title >{movie[1]}</Card.Title>
        <Card.Text>
        {movie[3]}
        </Card.Text>
        <Card.Text>
        {movie[7]}
        </Card.Text>
        <Button variant="outline-success"><Card.Text>
        {movie[5]}
        </Card.Text></Button>
      </Card.Body>
    </Card>
       </div>
    </div>
  );
}

export default BasicExample;