import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImage from "../Assets/img/myImg.svg";
import { ArrowDownCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import cv from '../Assets/cv/Sajini_Meddawela_SE_Resume.pdf'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Undergraduate", "UI/UX Enthusiast", "Quality Assurance Enthusiast" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'Sajini_Meddawela_CV_SE.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Sajini Meddawela`}<br/> <span className="txt-rotate rotate-with-margin" dataPeriod="1000" data-rotate='[ "Undergraduate", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                  I'm a motivated IT undergraduate with a deep passion for technology and an insatiable thirst for knowledge. My journey in the tech world is driven by curiosity and a desire to continuously learn and grow. With a solid foundation in information technology and a keen interest in emerging trends, I am eager to apply my skills to tackle real-world challenges and contribute to innovative solutions.
                  <br/>Let's connect and explore the exciting world of technology together! Whether you have advice, opportunities, or simply want to share knowledge, I would love to hear from you. Feel free to reach out to me via LinkedIn or email. Together, we can drive innovation forward and make a difference in the tech world.
                  </p>
                  <button onClick={handleDownload}>Download CV <ArrowDownCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImage} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}