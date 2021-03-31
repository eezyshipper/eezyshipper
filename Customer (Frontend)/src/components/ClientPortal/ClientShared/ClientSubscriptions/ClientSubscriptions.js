import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MainContentLayout from '../../../Layouts/MainContentLayout/MainContentLayout';
import basicSubscriptionImage from '../../../../images/basic-subscription.png';
import proSubscriptionImage from '../../../../images/pro-subscription.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './ClientSubscriptions.css'

const subcriptionData = [
    {
        id: 1,
        subscriptionTitle: 'Basic',
        subscriptionImage: basicSubscriptionImage,
        isActive: true,
        subscriptionDetails: 'Basic Subscription Details'
    },
    {
        id: 2,
        subscriptionTitle: 'Premium',
        subscriptionImage: proSubscriptionImage,
        isActive: false,
        subscriptionDetails: 'Upgrade to 30% discount'
    },
]

const ClientSubscriptions = () => {
    return (
        <div className="dash-cmn-right">
            <MainContentLayout title="Your Subscriptions" customShadow>
                {
                    subcriptionData.map(subscription => (
                        <div key={subscription.id} className={`${subscription.isActive ? 'active-status' : ''} subs-status`}>
                            <Row className="d-flex flex-nowrap align-items-center">
                                <Col lg={4}>  
                                    <img src={subscription.subscriptionImage} className="img-fluid" alt="" />
                                </Col>
                                <Col lg={6}>
                                    <p><span className="font-weight-bold">{subscription.subscriptionTitle}</span> <br />{subscription.isActive ? 'Current Plan' : subscription.subscriptionDetails} </p>
                                </Col>
                                <Col lg={2} className=" m-0 p-0">
                                    { subscription.isActive &&
                                        <div className="active-tick">
                                            <FontAwesomeIcon icon={faCheck}/>
                                        </div>}
                                </Col>
                            </Row>
                        </div>
                    ))
                }
            </MainContentLayout>
        </div>
    );
};

export default ClientSubscriptions;