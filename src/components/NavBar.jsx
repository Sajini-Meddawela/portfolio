import {useState,useEffect} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../Assets/img/logo.png';
import Icon1 from '../Assets/img/nav-icon1.svg';
import Icon2 from '../Assets/img/nav-icon2.svg';
import Icon3 from '../Assets/img/nav-icon3.svg';
import Icon4 from '../Assets/img/github.png';

export const NavBar = () => {
  const [activeLink,setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);

  useEffect (() => {
    const onScroll = () => {
      if (window.scrollY > 50){
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink (value);
  }

  const handleConnectClick = () => {
    onUpdateActiveLink('contact');
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

    return(
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sajini-meddawela" target="_blank" rel="noopener noreferrer"> <img src={Icon1} alt="LinkedIn"/> </a>
              <a href="https://github.com/Sajini-Meddawela" target="_blank" rel="nooperner noreferrer"><img src={Icon4} alt="GitHub"/></a>
              <a href="#"> <img src={Icon2} alt="FaceBook"/> </a>
              <a href="#"> <img src={Icon3} alt="Instagram"/> </a>
            </div>
            <button className='vvd' onClick={handleConnectClick}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}