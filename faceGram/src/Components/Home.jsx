import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import "./Home.css";
function Home() {
  return (
    <Container
      className="bg-image"
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
      }}
    >
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <div className="mask gradient-custom-3"></div>
      <Row className="text-center">
        <Col className="left-nav" xs={12} md={4}>
          <Toast className="grps">
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        </Col>
        <Col className="right-nav" xs={12} md={8}>
          hello
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
