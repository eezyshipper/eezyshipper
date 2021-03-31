import { faCaretDown, faCaretUp, faExclamationCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MainContentLayout from '../../../Layouts/MainContentLayout/MainContentLayout';
import './ClientDeliveryAddress.css';
import HowItWorks from '../../HowItWorks/HowItWorks';
import { connect } from 'react-redux';


const ClientDeliveryAddress = ({allWarehouses, currentUser}) => {
    const history = useHistory();
    const [showNotificationArea, setShowNotificationArea] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(allWarehouses[0]);
    const [showFlagDD, setShowFlagDD] = useState(false);

    const [showHowItWorksModal, setShowHowItWorksModal] = useState(false);
    const handleHowItClose = () => setShowHowItWorksModal(false);
    const handleHowItShow = () => setShowHowItWorksModal(true);
    
    return (
        <>
        <MainContentLayout customShadow>
        <div className="delivery-add">
            <div>
                <h4>{`Delivery Address   ${currentUser?.es_id}`}</h4>
            </div>
            <div>
                <div className="country-selectdiv">
                    <p>Origin Country:</p>
                    <form>
                        <div className="form-item">
                            <div className="country-select inside">
                                <input className="country_input" type="text" value={selectedCountry?.country} />
                                <div className="flag-dropdown" onClick={() => setShowFlagDD(!showFlagDD)}>
                                    <div className="selected-flag">
                                        <img src={`https://www.countryflagicons.com/FLAT/48/${selectedCountry?.country_code}.png`}  className="flag" alt="flag"/>
                                        <FontAwesomeIcon className="ml-4" icon={showFlagDD ? faCaretUp : faCaretDown} />
                                    </div>
                                    <ul className={showFlagDD ? 'country-list' : 'country-list hide'}>
                                        {
                                            allWarehouses.length > 0 && allWarehouses.map(country => (
                                                <li key={country.id} onClick={() => setSelectedCountry(country)} className="country preferred active">
                                                    <img src={`https://www.countryflagicons.com/FLAT/48/${country?.country_code}.png`}  className="flag" alt="flag"/>
                                                    <span className="country-name text-dark">{country?.country}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form>
               </div>
            </div>
        </div>
        <hr/>
        <div className="alert-pr" style={showNotificationArea ? {display: 'none'} : {}}>
            <Row className="align-items-center" >
                <Col md={1} className="alerticon">
                    <FontAwesomeIcon icon={faExclamationCircle} size="3x" />
                </Col>
                <Col md={7}>
                    <p>For smoother shipping and delivery, we’ll need eezyshipper ID.
                        Please make sure to read the list of restricted and prohibited items.</p>
                </Col>
                <Col md={4}>
                    <button className="btn pri-button" onClick={() => history.push('/restricted')}>Prohibited Items</button>
                </Col>
            </Row>
            <button className="btn close-pr" onClick={() => setShowNotificationArea(true)}> ×</button>
        </div>
        <div className="howitwork ">
            <p>Copy this address and use when you make purchases in stores.</p>
            <button className="btn howit-btn" onClick={()=> handleHowItShow()}><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon> How it works?</button>
        </div>
        <Row className="user-info-sec">
            <Col lg={6} md={6} sm={12}>
                <div className="user-info-data">
                <span>Full Name</span>
                <p>{`${currentUser?.first_name} ${currentUser?.last_name}`}</p>
                </div>
                <div className="user-info-data">
                <span>Address Line 1</span>
                <p>{selectedCountry?.address_line_1}</p>
                </div>
                <div className="user-info-data">
                <span>Address Line 2</span>
                <p>{currentUser?.es_id}</p>
                </div>
                <div className="user-info-data">
                    <span>State</span>
                    <p>Bedfordshire</p>
                </div>
            </Col>

            <Col lg={6} md={6} sm={12} className="text-left">
                <div className="user-info-data">
                    <span>eezyshipper ID</span>
                    <p>{currentUser?.es_id}</p>
                </div>
                <div className="user-info-data">
                    <span>City</span>
                    <p>Luton</p>
                </div>
                <div className="user-info-data">
                    <span>Post Code</span>
                    <p>LU2 9NH</p>
                </div>
                <div className="user-info-data">
                    <span>Phone</span>
                    <p>+44(0)1582727558</p>
                </div>
            </Col>
        </Row>
        </MainContentLayout>
        <HowItWorks show={showHowItWorksModal} handleClose={handleHowItClose}></HowItWorks>
        </>
    );
};

const mapStateToProps = state => {
    return{
        currentUser: state.currentUser,
        allWarehouses: state.allWarehouses
    }
}

export default connect(mapStateToProps)(ClientDeliveryAddress);