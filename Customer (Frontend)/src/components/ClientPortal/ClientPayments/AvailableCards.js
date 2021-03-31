import React from 'react';
import MainContentLayout from '../../Layouts/MainContentLayout/MainContentLayout';
import visaCard from '../../../images/visa-card.png';
import { Button, Col, Row } from 'react-bootstrap';

const AvailableCards = () => {
    return (
        <Row>
            <Col md={8}>
                <MainContentLayout title="Payments">
                    <h6>Current Cards Available</h6>
                    <div style={{height : '130px', width : '300px'}} className="border p-3 rounded">
                        <img style={{height : '80px', width : '200px'}} src={visaCard} alt=""/>
                        <p><small>************1234</small></p>
                    </div>
                    <h6 className="text-secondary mt-2">Visa Card</h6>
                    <Button className="rounded mt-2" variant="primary">Add Card</Button>
                </MainContentLayout>
            </Col>
            
        </Row>
    );
};

export default AvailableCards;