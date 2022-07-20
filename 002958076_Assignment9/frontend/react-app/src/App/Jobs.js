import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactForm from './Form/ReactForm';
import ReactToast from 'react-bootstrap/Toast';
import RecommendationForm from './Recommendation/RecommendationForm';

const componentsMap = new Map([["Form", ReactForm], ["Toast", ReactToast], ["Recommend", RecommendationForm]]);


function renderFormComponent(decision) {
const DynamicComponent = componentsMap.get(decision);
return (
  <DynamicComponent/>
);
}

function Jobs() {
  return (
    <Container>
      <Row>
        <Col><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="images/jobs1.jpg" />
          <Card.Body>
            <Card.Title>Software Developer II</Card.Title>
            <Button variant="primary">Learn more</Button>
          </Card.Body>
        </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="images/jobs5.jpg" />
          <Card.Body>
            <Card.Title>Principal software engineer</Card.Title>
          </Card.Body>
        </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="images/jobs2.jpg" />
          <Card.Body>
            <Card.Title>Software developer internship</Card.Title>
            <Button variant="primary">Learn more</Button>
          </Card.Body>
        </Card></Col>

      </Row>
      {<Row>
        <Col>{renderFormComponent("Recommend")}</Col>
        <Col><Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            {renderFormComponent("Form")}
            </Card.Text>
          </Card.Body>
        </Card></Col>
      </Row>}
    </Container>

  );
}

export default Jobs;