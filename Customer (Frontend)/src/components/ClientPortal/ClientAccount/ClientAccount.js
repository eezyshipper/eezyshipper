import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MainContentLayout from '../../Layouts/MainContentLayout/MainContentLayout';
import './ClientAccount.css';

const ClientAccount = () => {
    const history = useHistory();
    return (
        <>
            <Row>
                <Col xl={7} lg={9}>
                    <MainContentLayout customShadow title="Accounts">
                        <div className="acc-info">
                            <p>Email</p>
                            <p>newuser@hotmail.com</p>
                        </div>
                        <div className="acc-info">
                            <p>Your ID</p>
                            <p>ES0123456</p>
                        </div>
                        <div className="acc-info">
                            <p>Identification Documents</p>
                            <button className="btn" style={{color: 'blue'}} onClick={() => history.push('/dashboard/verify')}>Upload</button>
                        </div>
                        <div className="mt-5">
                            <h2>Address</h2>
                            <hr/>
                            <form>
                                <Row className="add-details-name">
                                    <Col lg={6} md={6} sm={6} className="mb-4">
                                        <div className="add-details">
                                            <label htmlFor="" className="float-label">First Name</label>
                                            <input type="text" />
                                        </div>
                                        <small className="mt-2" style={{fontSize: '11px'}}>Must match your passport</small>
                                    </Col>
                                    
                                    <Col lg={6} md={6} sm={6} className="mb-4">
                                        <div className="add-details">
                                            <label htmlFor="">Last Name</label>
                                            <input type="text"/>
                                        </div>
                                        <small className="mt-2" style={{fontSize: '11px'}}>Must match your passport</small>
                                    </Col>
                                </Row>
                                <div className="add-line">
                                    <label htmlFor="">Address Line 1</label>
                                    <input type="text" />
                                </div>
                                <div className="add-line">
                                    <label htmlFor="">Address Line 2</label>
                                    <input type="text" />
                                </div>
                            </form>
                            <Row>
                                <Col lg={6} md={6} sm={6} className="mb-4">
                                    <div className="add-details">
                                        <label htmlFor="">City</label>
                                        <input type="text" />
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6} className="mb-4">
                                    <div className="add-details">
                                        <label htmlFor="">Country</label>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <select name="" id="" style={{width:"100%"}}>
                                                <option value="">Kenya</option>
                                                <option value="">UK</option>
                                                <option value="">USA</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="mt-5">
                            <h2>Bio</h2> 
                            <hr/>
                            <form>
                                <Row>
                                    <Col lg={6} md={6} sm={6} className="mb-4">
                                        <div className="add-details">
                                            <label htmlFor="">Gender</label>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <select name="" style={{width: '100%'}}>
                                                    <option value="">Male</option>
                                                    <option value="">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} className="mb-4">
                                        <div className="add-details">
                                            <label htmlFor="">Date of Birth</label>
                                            <input type="date" />
                                        </div>
                                    </Col>
                                </Row>
                                <div className="add-details">
                                    <label htmlFor="">Nationality</label>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <select name="" style={{width: '100%'}}>
                                            <option value="">Kenya</option>
                                            <option value="">UK</option>
                                            <option value="">USA</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="mt-5">
                            <h2>Email Subscription</h2> 
                            <hr/>
                            <form>
                                <div className="email-subs">
                                    <div className="save-card-toogle">
                                        <div>
                                            <p className="pr-3" style={{fontSize: '13px'}}>Service Updates</p>
                                        </div>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                    <div className="save-card-toogle">
                                        <div>
                                            <p className="pr-3" style={{fontSize: '13px'}}>Promotional Emails</p>
                                        </div>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </MainContentLayout>
                </Col>
            </Row>
        </>
    );
};

export default ClientAccount;