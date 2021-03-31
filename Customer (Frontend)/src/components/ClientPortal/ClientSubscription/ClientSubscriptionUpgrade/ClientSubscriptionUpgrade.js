import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle, faCreditCard, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MainContentLayout from '../../../Layouts/MainContentLayout/MainContentLayout';
import './ClientSubscriptionUpgrade.css';

const ClientSubscriptionUpgrade = () => {
    return (
        <Row>
            <Col xl={9} lg={12}>
                <MainContentLayout customShadow title="Subscribe/Upgrade">
                    <p style={{fontSize: '14px'}}>Premium Subscription for a year</p>
                    <h5 className="pt-3" style={{wordSpacing:'30px'}}>Total 36USD</h5>
                    <hr/>
                    <p className="pb-3" style={{fontSize: '13px', color: 'grey'}}>This plan will active immediately after payment</p>
                    <h5 className="pt-5">Pay</h5>
                    <hr/>
                    <div className="card-pay mt-4">    
                        <FontAwesomeIcon icon={faCreditCard} size="3x" style={{color: '#028002'}} />
                        <div className="text-center">
                            <h6>Credit Card</h6>
                            <button style={{fontSize: '13px'}} className="btn"><u>Add Card</u></button>
                        </div>
                        <FontAwesomeIcon icon={faCheckCircle} style={{color: '#028002'}} size="2x" />
                    </div>
                    <div class="card-pay mt-3 mb-3">    
                        <FontAwesomeIcon icon={faCcPaypal} size="3x"></FontAwesomeIcon>
                        <div className="text-center">
                            <h6>PayPal</h6>
                        </div>
                        <FontAwesomeIcon icon={faTimesCircle} size="2x" />
                    </div>
                    <div>
                        <button class="btn pay-btn">Pay</button>
                    </div>
                </MainContentLayout>
            </Col>
        </Row>
    );
};

export default ClientSubscriptionUpgrade;