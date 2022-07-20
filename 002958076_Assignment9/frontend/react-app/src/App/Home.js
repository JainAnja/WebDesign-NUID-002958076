import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
    return (
        <Card className="bg-dark text-green">
        <Card.Img variant="top" src="images/home2.jpg" />
        <Card.ImgOverlay>
          <Card.Title><h1>Glassdoor</h1></Card.Title>
          <Card.Text>
            <a href="#">Search for job</a> | <a href="#">Post a job</a> | <a href="#">Share your experience</a>
          </Card.Text>
          <Button variant="primary">Start your journey</Button>
        </Card.ImgOverlay>
      </Card>
    );
  }

export default Home;