import Card from 'react-bootstrap/Card';

export default function About() {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img variant="bottom" src="images/about.jpg" alt="Card image" />
        <Card.Body>
          <Card.Title>Who are we???</Card.Title>
          <Card.Text>
            The company was co-founded in 2007 by Tim Besse, Robert Hohman, who serves as the company's CEO, and Expedia founder Rich Barton, who served as the company's Chairman.[4] The idea came from a brainstorming session between the two of them when Hohman relayed the story of accidentally leaving the results of an employee survey on the printer while working at Expedia, when the two began to think about what would have happened if the results had gotten out into the public. The two hypothesized that if the material had been revealed publicly, it could have been a service to those looking to make career decisions.[5] The company's headquarters were established in Mill Valley.[6]
          </Card.Text>
          <Card.Text>Glassdoor produces reports based upon the data collected from its users, on topics including work–life balance,[29] CEO pay-ratios,[30] lists of the best office places and cultures,[31] and the accuracy of corporate job searching maxims.[32] Data from Glassdoor has also been used by outside sources to produce estimates on the effects of salary trends and changes on corporate revenues.[33] Glassdoor also puts the conclusions of its research of other companies towards its own company policies.[9] In 2015, Tom Lakin produced the first study of Glassdoor in the United Kingdom, concluding that Glassdoor is regarded by users as a more trustworthy source of information than career guides or official company documents.[34][35]

          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

