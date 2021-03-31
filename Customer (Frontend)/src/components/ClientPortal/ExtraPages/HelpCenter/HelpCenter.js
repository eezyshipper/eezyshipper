import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faBoxes, faCreditCard, faFileSignature, faUser } from '@fortawesome/free-solid-svg-icons';
import './HelpCenter.css';
import { helpCenterData } from '../ExtraPagesData/HelpCenterData';

const HelpCenter = () => {
    const [contentTrigger, setContentTrigger] = useState('general');
    const [categoryWiseData, setCategoryWiseData] = useState([]);
    const [showState, setShowState] = useState({dataId: 1, show: false});
    useEffect(() => {
        const filteredData = helpCenterData.filter(data => data.category.toLocaleLowerCase() === contentTrigger.toLocaleLowerCase());
        setCategoryWiseData(filteredData);
    },[contentTrigger])
    return (
        <>
        <div className="faq">
            <Container>
                <h1>Frequently Asked Questions</h1>
                <Row className="faq-items" id="myDIV">
                    <Col className={`faq-category item ${contentTrigger === 'general' ? 'item_active' : ''}`} onClick={() => setContentTrigger('general')}>
                        <div>
                            <FontAwesomeIcon icon={faBullhorn} />
                            <h6>General</h6>
                        </div>
                    </Col>  

                    <Col className={`faq-category item ${contentTrigger === 'packageDelivary' ? 'item_active' : ''}`} onClick={() => setContentTrigger('packageDelivary')}>
                        <div>
                            <FontAwesomeIcon icon={faBoxes} />
                            <h6>Package Deliveries</h6>
                        </div>
                    </Col>

                    <Col className={`faq-category item ${contentTrigger === 'paymentInvoice' ? 'item_active' : ''}`} onClick={() => setContentTrigger('paymentInvoice')}>
                        <div>
                            <FontAwesomeIcon icon={faCreditCard} />
                            <h6>Payment Invoices</h6>
                        </div>
                    </Col>

                    <Col className={`faq-category item ${contentTrigger === 'insurance' ? 'item_active' : ''}`} onClick={() => setContentTrigger('insurance')}>
                        <div>
                            <FontAwesomeIcon icon={faFileSignature} />
                            <h6>Insurance</h6>
                        </div>
                    </Col>

                    <Col className={`faq-category item ${contentTrigger === 'myAccount' ? 'item_active' : ''}`} onClick={() => setContentTrigger('myAccount')}>
                        <div>
                            <FontAwesomeIcon icon={faUser} />
                            <h6>My Account</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="faq-content">
            <Container>
                <div className="general-text" style={{display: 'block'}}>
                {
                    categoryWiseData.map(data => {
                        return (
                            <>
                        <button className={`accordion ${(showState.dataId === data.id && showState.show) ? 'active' : ''}`} onClick={() => {setShowState({dataId: data.id, show: !showState.show})}}>{data.query}</button>
                        <div className="panel" style={(showState.dataId === data.id && showState.show) ? {maxHeight: '109px'} : {}}>
                            <p className="p-3">{data.answer}</p>
                            <div className="panel-border"></div>
                        </div>
                        </>
                        )}
                    )
                }
                </div>
            </Container>
        </div>
        </>
    );
};

export default HelpCenter;