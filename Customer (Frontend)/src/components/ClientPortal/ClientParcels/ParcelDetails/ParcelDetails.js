import { faChevronDown, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MainContentLayout from '../../../Layouts/MainContentLayout/MainContentLayout';
import './ParcelDetails.css';

const ParcelDetails = () => {
    const [showList, setShowList] = useState(false);
    const history = useHistory();
    return (
        <>
        <div>
            <button className="btn" style={{fontSize: '14px', color: '#29CAF8'}} onClick={() => history.push('/dashboard/parcels')}><FontAwesomeIcon icon={faLongArrowAltLeft} />&nbsp;&nbsp;Back to Parcel List</button>
        </div>

        <Row>
            <Col lg={4} md={6} sm={12}>
                <MainContentLayout customShadow>
                    <h6>Transaction ID - ez111111110</h6>
                    <hr/>
                        <div className="pl-2 parcel-link-table">
                        <table className="mb-3">
                            <tbody>
                            <tr>
                                <td colSpan="2"><Button variant="danger" className="btn-block">PAY $56.90</Button></td>
                            </tr>
                            <tr className="table-row-border">
                                <th>Date &amp; Time</th>
                                <td>12/10/2020 &nbsp;14:20</td>
                            </tr>
                            <tr className="table-row-border">
                                <th>From</th>
                                <td>Amazon</td>
                            </tr>
                            <tr className="table-row-border">
                                <th>Destination</th>
                                <td>Kenya</td>
                            </tr>
                            <tr className="table-row-border">
                                <th>No of Packages</th>
                                <td>4 &nbsp;&nbsp;<button className="btn" onClick={() => setShowList(!showList)}><FontAwesomeIcon icon={faChevronDown} style={{fontSize: '12px'}}  id="showIcon" /></button> 
                                    <p className="p-2" style={{backgroundColor: '#f5f5f5', display: showList ? 'block' : 'none' }}>Shoes <br/>Books <br/>Electric blinder <br/>Hard drive</p>
                                </td>
                            </tr>
                            <tr className="table-row-border">
                                <th>Total Weight</th>
                                <td>1.2KG</td>
                            </tr>
                            
                            <tr className="table-row-border">
                                <th>ETA</th>
                                <td>To be confirmed</td>
                            </tr>
        
                            <tr className="table-row-border">
                                <th>Status</th>
                                <td className="text-danger">Payment Pending</td>
                            </tr>
                        </tbody></table>
                    </div>
                </MainContentLayout>
            </Col>
        </Row>
        
        </>
    );
};

export default ParcelDetails;