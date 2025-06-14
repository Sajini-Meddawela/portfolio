import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { EducationCard } from "./EducationCard";
import { ArrowRightCircle } from "react-bootstrap-icons";
import AMCCLogo from "../Assets/img/Edu/AMCC.jpg";
import UOMLogo from "../Assets/img/Edu/UOM.png";
import SabaraLogo from "../Assets/img/Edu/sabaragamuwa.jpeg";
import Intern from "../Assets/img/Edu/Ariso1.png";
import project1 from "../Assets/img/project1.png";
import project2 from "../Assets/img/project2.png";
import project3 from "../Assets/img/project3.png";
import project4 from "../Assets/img/project4.png";
import project5 from "../Assets/img/project5.png";
import shade2 from "../Assets/img/Shade2.png";
import flutter from "../Assets/img/tech/flutter.svg";
import java from "../Assets/img/tech/java.svg";
import javascript from "../Assets/img/tech/javascript.svg";
import react from "../Assets/img/tech/react.svg";
import python from "../Assets/img/tech/python.svg";
import css from "../Assets/img/tech/css.svg";
import html from "../Assets/img/tech/html.svg";
import nodejs from "../Assets/img/tech/nodejs.svg";
import mysql from "../Assets/img/tech/mysql.svg";
import gimp from "../Assets/img/tech/gimp.svg";
import figma from "../Assets/img/tech/figma.svg";
import blender from "../Assets/img/tech/blender.svg";
import git from "../Assets/img/tech/git.svg";
import c from "../Assets/img/tech/c.svg";
import mongodb from "../Assets/img/tech/mongodb.svg";
import firebase from "../Assets/img/tech/firebase.svg";
import postman from "../Assets/img/tech/postman.svg";
import tailwind from "../Assets/img/tech/tailwind.svg";
import graphql from "../Assets/img/tech/graphql.svg";
import next from "../Assets/img/tech/next.svg";
import postgres from "../Assets/img/tech/postgresql.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "EpicEventify Event Management System",
      description:
        "Role Base User Authentication and Authorization with Chat based user Interaction.2nd year software development project",
      imgUrl: project1,
    },
    {
      title: "My Personal Portfolio",
      description:
        "Portfolio introducing my skills, projects and connecting Information.",
      imgUrl: project2,
    },
    {
      title: "DonorLink (OnGoing)",
      description:
        "Web-based application designed to streamline the donation process for children and elderly care homes. The system will allow house owners to update the goods they need in real-time and manage their inventory efficiently. Donors can browse through these needs and make informed decisions about what to donate based on current requirements.",
      imgUrl: project3,
    },
    {
      title: "CineMate",
      description:
        "A personalized movie catalog application that allows users to store their favorite and trending movies in a curated list for personal use.",
      imgUrl: project4,
    },
    // {
    //   title: "DialDesk (OnGoing)",
    //   description:
    //     "As part of my company’s team, I contribute to a multi-tenant AI-powered call center platform that automates customer service using AI agents, with seamless human agent integration when needed. Built with Next.js, Node.js, GraphQL, and PostgreSQL, the system manages calls, real-time interactions, and analytics improving efficiency while ensuring scalability for diverse client needs",
    //   imgUrl: project5,
    // },
  ];

  const techImages = [
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: javascript, alt: "JavaScript" },
    { src: react, alt: "React" },
    { src: next, alt: "NextJs" },
    { src: flutter, alt: "Flutter" },
    { src: nodejs, alt: "NodeJs" },
    { src: c, alt: "C" },
    { src: java, alt: "Java" },
    { src: python, alt: "Python" },
    { src: git, alt: "Git" },
    { src: postgres, alt: "PostgreSQL" },
    { src: mysql, alt: "MySQL" },
    { src: mongodb, alt: "MongoDB" },
    { src: graphql, alt: "GraphQL" },
    { src: postman, alt: "Postman" },
    { src: tailwind, alt: "Tailwind" },
    { src: figma, alt: "Figma" },
    { src: gimp, alt: "GIMP" },
    { src: blender, alt: "Blender" },
  ];

  const education = [
    {
      qualification: "Bsc (Hons) in Information Technology and Management",
      institute: "University of Moratuwa",
      year: "2022 - 2026",
      logo: UOMLogo,
    },
    {
      qualification: "Higher Secondary Education",
      institute: "Balangoda Ananda Maithreya Central College",
      year: "2012-2020",
      logo: AMCCLogo,
    },
    {
      qualification: "Diploma in English",
      institute: "Sabaragamuwa University of SriLanka",
      year: "2021",
      logo: SabaraLogo,
    },
    {
      qualification: "Software Engineering Intern",
      institute: "Ariso Technologies Pvt. Ltd",
      year: "2025 (6 Months)",
      logo: Intern,
    },
  ];

  const handleLinkedInRedirect = () => {
    window.open("https://www.linkedin.com/in/sajini-meddawela", "_blank");
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Technologies</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Education and Experience
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <p>
                          Welcome to my portfolio of projects! Here, you'll find
                          a collection of my most significant and recent work,
                          showcasing my skills and experience in web
                          development, design. Each project reflects my
                          dedication to learning and applying new technologies,
                          solving complex problems, and delivering high-quality,
                          user-friendly applications. Explore my projects below
                          and visit my GitHub for more details.
                        </p>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p className="technology-description">
                          Though I'm not yet an expert in these technologies,
                          I've gained a foundational understanding through my
                          studies and self-driven exploration. I am deeply
                          committed to advancing my skills and continuously
                          learning more about these tools. My journey with these
                          technologies is ongoing, and this collection
                          represents my current capabilities and my dedication
                          to becoming proficient in each of these areas.
                        </p>
                        <Row>
                          {techImages.map((tech, index) => (
                            <Col
                              key={index}
                              xs={4}
                              md={3}
                              lg={2}
                              className="tech-col"
                            >
                              <TrackVisibility>
                                {({ isVisible }) => (
                                  <div
                                    className={
                                      isVisible
                                        ? "animate__animated animate__zoomIn"
                                        : ""
                                    }
                                  >
                                    <img
                                      src={tech.src}
                                      alt={tech.alt}
                                      className="tech-image"
                                    />
                                    <p>{tech.alt}</p>
                                  </div>
                                )}
                              </TrackVisibility>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <TrackVisibility>
                          {({ isVisible }) => (
                            <div
                              className={
                                isVisible
                                  ? "animate__animated animate__zoomIn"
                                  : ""
                              }
                            >
                              <Row>
                                {education.map((edu, index) => (
                                  <Col
                                    key={index}
                                    xs={12}
                                    md={6}
                                    lg={4}
                                    className="mb-4"
                                  >
                                    {" "}
                                    <EducationCard
                                      qualification={edu.qualification}
                                      institute={edu.institute}
                                      year={edu.year}
                                      logo={edu.logo}
                                    />
                                  </Col>
                                ))}
                              </Row>
                            </div>
                          )}
                        </TrackVisibility>
                        <div className="d-flex justify-content-center">
                          <button onClick={handleLinkedInRedirect}>
                            Refer My LinkedIn For More Certifications{" "}
                            <ArrowRightCircle size={25} />
                          </button>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={shade2}
        alt="background"
      ></img>
    </section>
  );
};
