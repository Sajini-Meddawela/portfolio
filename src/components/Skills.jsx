import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../Assets/img/skill1.svg";
import skill2 from "../Assets/img/skill2.svg";
import skill3 from "../Assets/img/skill3.svg";
import shade from "../Assets/img/Shade.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite = {true} className="skill-slider">
                            <div className="item">
                                <img src={skill1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={skill2} alt="Image" />
                                <h5>Creativity</h5>
                            </div>
                            <div className="item">
                                <img src={skill3} alt="Image" />
                                <h5>Problem Solving</h5>
                            </div>
                            <div className="item">
                                <img src={skill1} alt="Image" />
                                <h5>UI/UX design</h5>
                            </div>
                            <div className="item">
                                <img src={skill3} alt="Image" />
                                <h5>Critical thinking</h5>
                            </div>
                            <div className="item">
                                <img src={skill1} alt="Image" />
                                <h5>Listening</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={shade}/>
        </section>
      )
}