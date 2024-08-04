import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPaperPlane, faBars } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

// Function to scroll to the top of the page
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <button onClick={scrollToTop} className="navbar-brand" style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0, fontSize: 'inherit', color: 'inherit' }}>
                        Luke Foley
                    </button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <FontAwesomeIcon icon={faBars} style={{ color: 'rgb(80, 65, 65)' }} />
                    </button>
                    <div className="collapse navbar-collapse d-none d-lg-block" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.linkedin.com/in/luke-foley-9006ba205/" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                                    <FontAwesomeIcon className="nav-icon" icon={faLinkedin} />&nbsp;LinkedIn
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/lfoley7" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                                    <FontAwesomeIcon className="nav-icon" icon={faGithub} />&nbsp;Github
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=lcfoley@wpi.edu" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                                    <FontAwesomeIcon className="nav-icon" icon={faPaperPlane} />&nbsp;Email
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/Foley%20Luke%20Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                                    <FontAwesomeIcon className="nav-icon" icon={faFile} />&nbsp;Download Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/luke-foley-9006ba205/" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon className="nav-icon" icon={faLinkedin} />&nbsp;LinkedIn
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/lfoley7" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon className="nav-icon" icon={faGithub} />&nbsp;Github
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=lcfoley@wpi.edu" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon className="nav-icon" icon={faPaperPlane} />&nbsp;Email
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/Foley%20Luke%20Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon className="nav-icon" icon={faFile} />&nbsp;Download Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
