import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import arrowImage from '../../../images/arrow.png';
import shoeImage from '../../../images/shoes.png';
import blenderImage from '../../../images/blender.png';
import shirtImage from '../../../images/shirt.png';
import formalImage from '../../../images/formal.png';

import './ShippingCost.css';

const ShippingCost = () => {
    return (
        <>
        <div className="shipping-cost">
            <Container>
                <div className="text-center">
                    <h3>Shipping Cost Examples</h3>
                    <hr className="border mb-2" />
                    <small>You can shop internationally</small>
                </div>
                <div className="shipping">
                    <Row className="row shipping-items">
                        <Col lg={3} sm={6}>
                            <div className="item-cost">
                                <div className="text-center">
                                    <img className="img-fluid item-cost-img" src={shoeImage} alt="shoe"/>
                                    <div className="pt-3">
                                        <span style={{color: '#999999'}}>1.1 KG</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline">
                                    <p>UK&nbsp;&nbsp;</p>
                                    <img style={{width: '20%', height: 'auto'}} src={arrowImage} alt="arrow"/>
                                    <p>&nbsp;&nbsp;Nairobi</p>
                                </div>
                                <div>
                                    <p>Basic Plan<br/>£11.33 </p>
                                </div>
                                <div>
                                    <p>Premium Plan<br/>£7.93</p>
                                </div>
                                <hr style={{color: '#29c9f8'}}/>
                                <div>
                                    <p>DHL = £41<br/>FedEx = £46</p>
                                </div>
                                <div className="item-cost-circle">
                                    <p>Save upto<br/>£38.07</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="item-cost">
                                <div className="text-center">
                                    <img className="img-fluid item-cost-img" src={blenderImage} alt="blender" />
                                    <div className="pt-3">
                                    <span style={{color: '#999999'}}>1.9 KG</span>
                                    </div>
                                </div>
                                
                                <div className="d-flex align-items-baseline">
                                    <p>UK&nbsp;&nbsp;</p>
                                    <img style={{width: '20%', height: 'auto'}} src={arrowImage} alt="arrow" />
                                    <p>&nbsp;&nbsp;Nairobi</p>
                                </div>
                                <div>
                                    <p>Basic Plan<br/>£19.57 </p>
                                </div>
                                <div>
                                    <p>Premium Plan<br/>£13.69</p>
                                </div>
                                <hr style={{color: '#29c9f8'}}/>
                                <div>
                                    <p>DHL = £53<br/>ParcelForce = £69</p>
                                </div>
                                <div className="item-cost-circle">
                                    <p>Save upto<br/>£55.31</p>
                                </div>
                            </div>
                        </Col>
                    
                        <Col lg={3} sm={6}>
                            <div className="item-cost">
                                <div className="text-center">
                                    <img className="img-fluid item-cost-img" src={shirtImage} alt="shirt" />
                                    <div className="pt-3">
                                    <span style={{color: '#999999'}}>1.0 KG</span>
                                    </div>
                                </div>
                                
                                <div className="d-flex align-items-baseline">
                                    <p>UK&nbsp;&nbsp;</p>
                                    <img style={{width: '20%', height: 'auto'}} src={arrowImage} alt="arrow" />
                                    <p>&nbsp;&nbsp;Nairobi</p>
                                </div>
                                <div>
                                    <p>Basic Plan<br/>£10.30 </p>
                                </div>
                                <div>
                                    <p>Premium Plan<br/>£7.21</p>
                                </div>
                                <hr style={{color: '#29c9f8'}} />
                                <div>
                                    <p>TNT = £35<br/>ParcelForce = £58</p>
                                </div>
                                <div className="item-cost-circle">
                                    <p>Save upto<br/>£50.79</p>
                
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="item-cost">
                                <div className="text-center">
                                    <img className="img-fluid item-cost-img" src={formalImage} alt="formal" />
                                    <div className="pt-3">
                                    <span style={{color: '#999999'}}>1.4 KG</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline">
                                    <p>UK&nbsp;&nbsp;</p>
                                    <img style={{width: '20%', height: 'auto'}} src={arrowImage} alt="arrow" />
                                    <p>&nbsp;&nbsp;Nairobi</p>
                                </div>
                                <div>
                                    <p>Basic Plan<br/>£14.42 </p>
                                </div>
                                <div>
                                    <p>Premium Plan<br/>£10.09</p>
                                </div>
                                <hr style={{color: '#29c9f8'}} />
                                <div>
                                    <p>DHL = £38<br/>ParcelForce = £64</p>
                                </div>
                                <div className="item-cost-circle">
                                    <p>Save upto<br/>£53.91</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <small><em>** The above prices are for illustrative purposes only. Accurate shipping costs will be calculated upon recieving your order.</em></small>
                </div>
            </Container>
        </div>
        </>
    );
};

export default ShippingCost;