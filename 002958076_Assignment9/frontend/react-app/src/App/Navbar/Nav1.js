import { Navbar, Nav, Container } from 'react-bootstrap';

export function Nav1() {
  return (
<Navbar bg="dark" expand="sm" variant="dark" fixed="top">
<Container>
<Navbar.Brand href="#home">Glassdoor</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
    <Nav.Link href="/home">Home</Nav.Link>
    <Nav.Link href="/about">About</Nav.Link>
    <Nav.Link href="/jobs">Jobs</Nav.Link>
    <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  );
}

