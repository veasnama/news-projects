import { Container, Col, Row } from "react-bootstrap";
function Contents() {
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row>
        <Col className="p-5" style={{ background: "green" }} sm>
          hello world
        </Col>
        <Col sm>hello world</Col>
        <Col sm>hello world</Col>
      </Row>
      <Row>
        <Col sm>hello world</Col>
        <Col sm>hello world</Col>
        <Col sm>hello world</Col>
      </Row>
    </Container>
  );
}

export default Contents;
