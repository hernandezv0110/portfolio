import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./NavbarComponent.module.css";

function NavbarComponent({
  aboutRef,
  projectsRef,
  resumeRef,
  contactRef,
  scrollToSection,
}) {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      fixed="top"
      className="shadow-sm w-100 fixed-top navbar-dark bg-dark"
    >
      <Container>
        <Navbar.Brand href="#home">Victor Hernandez Barajas</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto d-flex gap-3">
            <Nav.Link
              onClick={() => scrollToSection(aboutRef)}
              className={styles["tech-green"]}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection(projectsRef)}
              className={styles["tech-green"]}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection(resumeRef)}
              className={styles["tech-green"]}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection(contactRef)}
              className={styles["tech-green"]}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
