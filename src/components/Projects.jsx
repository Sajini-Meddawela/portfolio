import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project1 from "../Assets/img/project1.png";
import project2 from "../Assets/img/project2.png";
import project3 from "../Assets/img/project3.png";
import shade2 from "../Assets/img/Shade2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Projects = () => {
    const projects = [
        {
            title: "Epic_Eventify Event Management System",
            description: "Role Base User Authentication and Authorization with Chat based user Interaction",
            imgUrl: project1,
        },
        {
            title: "My Personal Portfolio",
            description: "Portfolio introducing my skills, projects and connecting Information.",
            imgUrl: project2,
        },
        {
            title: "Business Startup",
            description: "gvfgjbfdin",
            imgUrl: project3,
        },
        {
          title: "Epic_Eventify Event Management System",
          description: "Role Base User Authentication and Authorization with Chat based user Interaction",
          imgUrl: project1,
      },
      {
          title: "My Personal Portfolio",
          description: "Portfolio introducing my skills, projects and connecting Information.",
          imgUrl: project2,
      },
      {
          title: "Business Startup",
          description: "gvfgjbfdin",
          imgUrl: project3,
      },
    ];
    return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>Welcome to my portfolio of projects! Here, you'll find a collection of my most significant and recent work, showcasing my skills and experience in web development, design. 
                      Each project reflects my dedication to learning and applying new technologies, solving complex problems, and delivering high-quality, user-friendly applications.
                      Explore my projects below and visit my GitHub for more details.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Technologies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={shade2}></img>
        </section>
      )
    }