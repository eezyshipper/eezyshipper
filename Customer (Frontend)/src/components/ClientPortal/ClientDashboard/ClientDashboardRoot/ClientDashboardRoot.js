import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ClientSubscriptions from '../../ClientShared/ClientSubscriptions/ClientSubscriptions';
import CalculateShippingCost from '../CalculateShippingCost/CalculateShippingCost';
import ClientActiveParcels from '../ClientActiveParcels/ClientActiveParcels';
import ClientDeliveryAddress from '../ClientDeliveryAddress/ClientDeliveryAddress';

const ClientDashboardRoot = () => {;

    return (
        <>
            <Row>
                <Col xl={8} lg={12}>
                    <ClientDeliveryAddress></ClientDeliveryAddress>
                </Col>
                <Col xl={4} lg={12}>
                    <CalculateShippingCost></CalculateShippingCost>
                </Col>
            </Row>
            <Row>
                <Col xl={8} lg={12}>
                    <ClientActiveParcels></ClientActiveParcels>
                </Col>
                <Col xl={4} lg={12}>
                    <ClientSubscriptions></ClientSubscriptions>
                </Col>
            </Row>
        </>
    );
};

export default ClientDashboardRoot;