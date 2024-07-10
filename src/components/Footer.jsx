import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../Assets/img/logo.png";
import Icon1 from '../Assets/img/nav-icon1.svg';
import Icon2 from '../Assets/img/medium.svg';
import Icon3 from '../Assets/img/nav-icon2.svg';
import Icon4 from '../Assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm/>
                    <Col sm={6}>
                        <img src= {logo} alt="logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href="https://www.linkedin.com/in/sajini-meddawela" target="_blank" rel="noopener noreferrer"> <img src={Icon1} alt="LinkedIn"/> </a>
                        <a href="#"> <img src={Icon3} alt=""/> </a>
                        <a href="#"> <img src={Icon4} alt=""/> </a>
                        <a href="https://medium.com/@sajinimeddawela" target="_blank" rel="noopener noreferrer"> <img src={Icon2} alt="medium"/> </a>
                        </div>
                        <p>CopyRight 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}