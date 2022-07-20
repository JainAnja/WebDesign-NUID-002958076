import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function RecommendationForm() {
    return (<Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Improve your recommendations</Card.Title>
            <Card.Text>
                Get personalized recommendations<br />
                Are you open to relocation? <br />
                <Button variant="light" size="lg" active>Yes</Button>
                <Button variant="secondary" size="lg">No</Button>
            </Card.Text>
        </Card.Body>
    </Card>);
}

export default RecommendationForm;