import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "../About";
import Contacts from "../Contacts";
import Contents from "../Content";

const NavLink = function () {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className="container-md" expand="md">
          <Navbar.Brand href="#">
            <img
              src="./logo192.png"
              style={{ width: "32px", height: "32px" }}
              alt=" Brand image"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">National News</Nav.Link>
              <NavDropdown
                title="International News"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">England</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">America</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Japan</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Korea</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">China</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Code News" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">C++/C</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Python</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">JavaScript</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5"> Java</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Assembly</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Job News" id="navbarScrollingDropdown">
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Web Dev</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Mobile Dev</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  {" "}
                  Desktop Dev
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Embedded System
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
  // return (
  //   <ul>
  //     <li>
  //       <Link to="/">Home</Link>
  //     </li>
  //     <li>
  //       <Link to="/About">About</Link>
  //     </li>
  //     <li>
  //       <Link to="/Contacts">Topics</Link>
  //     </li>
  //   </ul>
  // );
};
function HeaderPage() {
  return (
    <>
      <Router>
        <NavLink />
        <Container>
          <Routes>
            <Route path="/" exacts element={<Contents />} />
            <Route path="/Contacts" exacts element={<Contacts />} />
            <Route path="/About" exacts element={<About />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default HeaderPage;
