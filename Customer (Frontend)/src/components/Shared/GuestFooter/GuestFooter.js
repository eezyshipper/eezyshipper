import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footerLogo from '../../../images/logo2.png';
import './GuestFooter.css';

const GuestFooter = () => {
    return (
        <>
        <section className="address-bottom">
            <Container>
                <div className="bottom-text">
                    <h3>Get your <br/> <br/> free international address</h3>
                    <div>
                        <button className="btn reg-btn">REGISTER</button>
                    </div>
                </div>
            </Container>
        </section>
        <footer>
            <Container>
                <Row className="footer-row text-white">
                    <Col lg={3} sm={3}>
                        <img className="img-fluid footer-logo" src={footerLogo} alt="footer-logo"/> 
                    </Col>
                    <Col lg={3} sm={3}>
                        <ul>
                            <li><p>About Us</p></li>
                            <a href="_" target="_blank"><li><small>How it Works</small></li></a> 
                            <a href="_" target="_blank"><li><small>Pricing</small></li></a>
                        </ul>
                    </Col>
                    <Col lg={3} sm={3}>
                        <ul>
                            <li><p>Support</p></li>
                            <a href="./faq.html" target="_blank"><li><small>Help Centre</small></li></a>
                            <a href="./contact.html" target="_blank"><li><small>Contact Us</small></li></a>
                        </ul>
                    </Col>
                    <Col lg={3} sm={3}>
                        <ul>
                            <li><p>Legal</p></li>
                            <a href="./restricted.html" target="_blank"><li><small>Restricted &amp; Prohibited Items</small></li></a>
                            <a href="./privacy.html" target="_blank"><li><small>Privacy Policy</small></li></a>
                            <a href="./terms.html" target="_blank"><li><small>Terms &amp; Conditions</small></li></a>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="footer-bottom">
                <Container className="text-white">
                    <div className="footer-bottom-text">
                        <small>Copyright © 2020 Eezyshipper Ltd. All rights reserved. </small>
                        <div className="d-flex align-items-baseline">
                            <div className="f-bottom-img">
                                {/* <i className="fab fa-facebook-square"></i> */}
                            </div>
                            <p>Sitemap</p>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    </>
    );
};

export default GuestFooter;