import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { contentChange } from '../../../redux/Actions/eeztshipperActions';
import SummeryLayout from '../../Layouts/SummeryLayout/SummeryLayout';


const Summery = ({contentChange}) => {
    return (
        <div>            
            <Row>
                <Col  className="p-3 pt-4"  md={8} style={{backgroundColor : '#DEF2FD'}}>
                    <Row>
                        <Col md={6}>
                            <Button as={Link} to={`/dashboard/bookInParcel`} className="rounded-pill px-5 py-2 font-weight-bold" variant="primary">BOOK IN PARCEL</Button>
                            <SummeryLayout title="Cosignment" value="4"></SummeryLayout>
                            <SummeryLayout title="Cosignment" value="4"></SummeryLayout>
                            <SummeryLayout title="Cosignment" value="4"></SummeryLayout>
                        </Col>
                        <Col md={6} className="pt-5">
                            <SummeryLayout title="Cosignment" value="4"></SummeryLayout>
                            <SummeryLayout title="Cosignment" value="4"></SummeryLayout>
                            <SummeryLayout title="Cosignment" value="4"></SummeryLayout>
                        </Col>
                    </Row>
                </Col>
                <Col md={4}  className="" style={{paddingTop : '70px'}}>
                    <SummeryLayout title="Cosignment" value="4"></SummeryLayout>
                    <SummeryLayout title="Cosignment" value="4"></SummeryLayout>
                    <SummeryLayout title="Cosignment" value="4"></SummeryLayout>
                    <SummeryLayout title="Cosignment" value="4"></SummeryLayout>
                    <SummeryLayout title="Cosignment" value="4"></SummeryLayout>
                </Col>
            </Row>
        
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        contentChanger: state.contentChanger
    }
}

const mapDispatchToProps = {
    contentChange: contentChange
}

export default connect(mapStateToProps, mapDispatchToProps)(Summery);