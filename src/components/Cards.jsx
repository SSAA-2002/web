import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import singapore from "../assets/img/singapore.jpg"
import malaysia from "../assets/img/malaysia.jpg"
import vietnam from "../assets/img/vietnam.jpg"
import thailand from "../assets/img/thailand.jpg"
import srilanka from "../assets/img/srilanka.jpg"
// import azerbaija from "../assets/img/Azerbaija.jpg"
import combodia from "../assets/img/combodia.jpg"

function Cards() {
  const cardData = [
    {
      image: singapore,
      title: "Singapore Evisa",
      body: "This is the content",
    },
    {
      image: malaysia,
      title: "Malaysia Evisa",
      body: "This is the content ",
    },
    {
      image: vietnam,
      title: "Vietnam Evisa",
      body: "This is the content ",
    },
    {
      image: thailand,
      title: "Thailand Evisa",
      body: "This is the content ",
    },
    {
      image: srilanka,
      title: "Srilanka Evisa",
      body: "This is the content ",
    },
    {
      image: combodia,
      title: "Combodia Evisa",
      body: "This is the content ",
    },
  ];

  return (
    <Container>
      <Row xs={1} md={2} lg={3}>
        {cardData.map((card, index) => (
          <Col key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={card.image} alt="Card image" style={{maxHeight:"260px"}} />

              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;
