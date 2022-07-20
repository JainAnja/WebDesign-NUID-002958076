import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ReactForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Where would you prefer to work?</Form.Label>
        <Form.Control type="text" placeholder="Enter work preference location" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ReactForm;