import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const FeaturesList = () => {
    const businessService = [
        {
            name:'Pay Per 100 Grams',
            image:'https://shipamall.com/assets/weight-blue.svg',
            details: 'Pay for the actual weight. You can check our delivery rates based on the parcel weight and destination country.'
        },
        {
            name:'Membership Plans',
            image:'https://shipamall.com/assets/star-blue.svg',
            details: 'You don’t have to be a member to get your free international addresses, but members also enjoy a 30% shipping discount.'
        },
        {
            name:'Cash On Delivery',
            image:'https://shipamall.com/assets/cash-blue.svg',
            details: 'Pay online or pay at the door.'
        },
    ]
    return (
        <section  className="d-flex align-items-center">
            <Container className="text-center">
                <h2 className="mt-2 pt-3">Shop the World – And Save up to 30% on Shipping</h2> 
                <Row className="mt-5 pt-3">
                    {
                        businessService.map((service, idx )=> 
                            <Col md={4} key={idx}>
                                <div className="p-1">
                                    <Image width={80} src={service.image} alt="im" fluid/>
                                    <h4 className="mt-4">{service.name}</h4>
                                    <p className="mt-2 text-secondary">{service.details}</p>
                                </div>
                            </Col>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default FeaturesList;