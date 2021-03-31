import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import ReviewItem from '../ReviewItem/ReviewItem';

const ClientFeedback = () => {
    const reviews = [
        {
            reviewId: 1,
            personName: 'Nash Patrik',
            designation: 'CEO, Manpol',
            personPhoto: '/images/customer-1.png',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
    
        },
        {
            reviewId: 2,
            personName: 'Miriam Barron',
            designation: 'CEO, Manpol',
            personPhoto: '/images/customer-2.png',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
    
        },
        {
            reviewId: 3,
            personName: 'Bria Malone',
            designation: 'CEO, Manpol',
            personPhoto: '/images/customer-3.png',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat',
    
        }
    ]
    return (
        <section className="my-auto py-5 d-flex justify-content-center align-items-center">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center">Clients <span className="text-brand">Feedback</span></h1>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {
                        reviews.map(review => <ReviewItem data={review} key={review.reviewId}></ReviewItem>)
                    }
                </Row>
            </Container>
        </section>
    );
};

// const mapStateToProps = state => {
//     return {
//         reviews: state.reviews
//     }
// }
export default ClientFeedback;