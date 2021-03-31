import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MainContentLayout from '../../../Layouts/MainContentLayout/MainContentLayout';
import './IdentificationDocuments.css';

const IdentificationDocuments = () => {
    const history = useHistory();
    return (
        <>
            <Row>
            <Col lg={9} xl={7} className="identity">
            <MainContentLayout customShadow title="Identifications Documents">
                    <p style={{fontSize : '16px'}}>For High Value Purchases, we require a photo or scan of the following documents  before we can procced with the shipment</p>
                    <div className="w-50">
                        <h3 className="pt-3">For Individuals</h3>
                        <hr/>
                        <div className="indiv-text">
                            <p>Passport</p>
                            <p>Driving License</p>
                        </div>
                        
                        <h3 className="pt-3">For Businesses</h3>
                        <hr/>
                        <div className="indiv-text">
                            <p>Importer Code</p>
                            <p>VAT Certificate or TRN No</p>
                            <p>Trade License</p>
                        </div>
                        <div className="upload-file">
                            <button className="btn"><FontAwesomeIcon size="3x" icon={faUpload} /><span><br/>Upload File</span></button>
                        </div>
                        <p className="max-file-size">Upto 4 files. JPEG,PNG,PDF <br/> Maximum size 10MB/File</p>
                        <div>
                            <button className="btn skip-btn" onClick={() => history.push('/dashboard/myaccount')}>Skip</button>
                        </div>
                    </div>
            </MainContentLayout>
            </Col>
            </Row>
        </>
    );
};

export default IdentificationDocuments;