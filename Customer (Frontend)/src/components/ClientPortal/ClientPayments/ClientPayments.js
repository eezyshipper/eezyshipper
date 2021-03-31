import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {  Col, Row } from 'react-bootstrap';
import creditCardImage from '../../../images/creditcard.png';
import MainContentLayout from '../../Layouts/MainContentLayout/MainContentLayout';
import './ClientPayments.css';

const ClientPayments = () => {
    const [myCards, setMyCards] = useState([]);
    const [contentHandler, setContentHandler] = useState(false);
    const handleAddPaymentCard = () => {
        setMyCards([...myCards, {name: 'visa', number: 424242424242}]);
        setContentHandler(false);
    }
    return (
        <>
            <Row>
                <Col md={12} sm={12} lg={11}>
                    <MainContentLayout customShadow>
                        <h1 className="mb-4">Payment</h1>
                        <h5>Cards</h5>
                        <hr/>
                        {
                            myCards.length === 0 ?
                            <div>
                                <div className="text-center pt-5 pb-5" style={{display: contentHandler ? 'none' : 'block'}}>
                                    <img className="img-fluid creditcard-img" src={creditCardImage} alt="credit-card" />
                                    <p className="pb-3" style={{fontSize: '13px', color: 'grey'}}>Currently No Cards available</p>
                                    <button className="btn add-card-btn" onClick={() => setContentHandler(true)}>Add Card</button>
                                </div>
                            </div>
                            :
                            <>
                            <div style={{display: contentHandler ? 'none' : 'block'}}>
                                <p className="pb-3" style={{fontSize: '13px'}}>Current Cards available</p>
                                <div className="avail-card-margin">
                                    <div className="avail-card">
                                        <FontAwesomeIcon icon={faCcVisa} size="5x" />
                                        <small><br/>************1234</small>
                                    </div>
                                    <small className="pl-3" style={{color: 'grey'}}>Visa Card</small>
                                </div>

                                <div className="text-center">
                                    <img className="img-fluid creditcard-img" src={creditCardImage} alt="creditCard" />
                                </div>
                                <div className="text-center">
                                    <button className="btn add-card-btn" onClick={() => setContentHandler(true)}>Add Card</button>  
                                </div>    
                                </div>
                            </>
                        }

                        <div className="add-card-section" style={{display: contentHandler ? 'block' : 'none'}}>
                            <h5>Add Card</h5>
                            <form>
                                <div className="form-group">
                                    <select className="form-control form-control-sm addcard-form-style" >
                                    <option>Card Type</option>
                                    <option>PayPal</option>
                                    <option>Mastercard</option>
                                    <option>Visa</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-sm addcard-form-style" placeholder="Card Number" />
                                </div>
                                <div className="row flex-nowrap">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-sm addcard-form-style" placeholder="MM/YY" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-sm addcard-form-style" placeholder="CVC" />
                                            <small style={{color: 'grey'}}>Last three digits from the back of the card</small>
                                        </div> 
                                    </div>
                                </div>
                                <div className="save-card-toogle">
                                    <div>
                                        <p>Save my Credit Card</p>
                                    </div>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </form>   
                            <div className="text-center">
                                <button className="btn pay-btn" onClick={() => handleAddPaymentCard()}>Save</button>   
                            </div> 
                        </div>
                    </MainContentLayout>
                </Col>
            </Row>
        </>
    );
};

export default ClientPayments;