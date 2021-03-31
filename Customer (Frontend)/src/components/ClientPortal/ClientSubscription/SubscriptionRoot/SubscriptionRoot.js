import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ClientSubscriptions from '../../ClientShared/ClientSubscriptions/ClientSubscriptions';
import ClientSubscription from '../ClientSubscription';
import './SubcriptionRoot.css';

const SubscriptionRoot = () => {
    return (
        <Row>
            <Col xl={8} lg={9} md={12}>
                <ClientSubscription></ClientSubscription>
            </Col>
            <Col xl={4} lg={3} md={2} className="right-top-dash-subs">
                <ClientSubscriptions></ClientSubscriptions>
            </Col>
        </Row>
    );
};

export default SubscriptionRoot;