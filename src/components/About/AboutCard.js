import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prem Singh Sengar </span>
            from <span className="purple"> Burhanpur, India.</span>
            <br /> I am a second year student pursuing an Computer Science & Engineering at NIE Mysore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about Recent Events
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I don't get revenge by beating people once!"{" "}
          </p>
          <footer className="blockquote-footer">Magnus Carlsen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
