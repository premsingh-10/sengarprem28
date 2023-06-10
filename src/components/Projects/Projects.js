import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ReactNews from "../../Assets/Projects/ReactNews.png"
import Charts from "../../Assets/Projects/Charts.png"
import FlappyBird from "../../Assets/Projects/flappyBird.jpg"
import ChatApp from "../../Assets/Projects/chat-app.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReactNews}
              isBlog={false}
              title="Hacker News"
              description="Api is fetched in this project to provide different kinds of React related news. We can remove and read more about the news on clicking the selected option."
              ghLink="https://github.com/premsingh-10/NewsWEb"
              demoLink="https://news-w-eb.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Charts}
              isBlog={false}
              title="Charts"
              description="Charts are best way to represent statistics. To represent that in website we used ChartJS library, Tailwind CSS is  used in this project. This Project is made in nextJS to get better understanding of new framework in demand. "
              ghLink="https://github.com/premsingh-10/Charts"
              demoLink="https://charts-three-eta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatApp}
              isBlog={false}
              title="Chat-app"
              description="In Progress Project, A chatting app using NextJS and Tailwind CSS. In Backend Firebase will be in lead role in for authentication of gmail, registration and to making id with avatar and many more functionality."
              ghLink="https://github.com/premsingh-10/chatting-app" 
              demoLink="https://chatting-app-sigma.vercel.app/login"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FlappyBird}
              isBlog={false}
              title="Flappy Bird"
              description="Flappy Bird is a very famous game in our childhood. I tried created that game by using javascript (React). In Functionality wise it is quite effective. "
              ghLink="https://github.com/premsingh-10/flappy"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
