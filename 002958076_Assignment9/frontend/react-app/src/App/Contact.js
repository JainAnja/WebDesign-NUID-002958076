import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default function Contact() {
  return (
    <div>
      <Card className="bg-light text-dark" style={{ width: '120rem' }}>
        <Card.Body>
          <Card.Text>
          <h4>Legal FAQs</h4>
View articles providing important information on legal topics related to using Glassdoor, including posting/responding to reviews, how Glassdoor approaches certain common issues and how it fights to protect users’ anonymous free speech rights as appropriate.
          </Card.Text>

          <Card.Text>
          <h4>Community Guidelines</h4>
          
Glassdoor follows simple principles and guidelines to ensure the most authentic, transparent, and valuable information is available to workers and job candidates while balancing fairness to employers.
        </Card.Text>
        <Card.Text>
        <h4>How to search for jobs on Glassdoor</h4>
        To search for a job:<br />

<ol>
  <li>Go to Glassdoor's Home page.</li>
  <li>In the Search box, enter a Job Title, Keyword, or Company that you want to search.</li>
  <li>Enter a Location where you'd like to find a job.</li>
  <li>Click Search.Jobs that meet your search criteria will be listed.</li>
  </ol> 
        </Card.Text>
        <hr /><br />
        <Card.Title className="text-center">Contact us</Card.Title>
        <Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className="w-50 text-center" type="email" placeholder="Enter your email" style= {{ 'text-align': 'center'}} size="lg" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicComments">
                <Form.Label>Comments</Form.Label>
                <Form.Control className="w-50 text-center" as="textarea" placeholder="Enter your questions" style= {{ 'text-align': 'center'}} size="lg" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit Query
              </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  );
}
