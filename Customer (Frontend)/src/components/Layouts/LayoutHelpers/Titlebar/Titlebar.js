import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Titlebar.css';
import logo from '../../../../images/logo.png';
import adminLogo from '../../../../images/admin-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import TrackParcel from '../../../ClientPortal/TrackParcel/TrackParcel';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Titlebar = ({user, setDrawerOpenState, drawerOpenState}) => {
    const history = useHistory();
    const [showTrackParcelModal, setShowTrackParcelModal] = useState(false);
    const handleTrackParcelClose = () => setShowTrackParcelModal(false);
    const handleTrackParcelShow = () => setShowTrackParcelModal(true);

    const handleSignOutBtnClick = () => {
        fetch('http://localhost:9000/auth/logout')
        .then(res => {
            console.log(res);
        })
        .catch(err => {console.log(err)})
    }
    return (
        <>
        <Container fluid>
        {
            user === 'admin' ?
            <>
                <Navbar className="py-0" bg="primary" variant="dark">
                    <Navbar.Brand href="#home">
                        <img src={adminLogo} alt=""/>
                        <p>Back Office</p>
                    </Navbar.Brand>
                    <Nav className="text-white ml-auto mt-5">
                        <Link className="mx-5 text-white" to="/home">Track Parcel</Link>
                        <Link className="mx-5 text-white" to="/dashboard">Global Setting</Link>
                        <Link className=" mx-5 text-white" to="/login">Log Out</Link>
                    </Nav>
                    
                    
                </Navbar>
            </>
            :
            <>
            <div className="container-fluid">
                <div className="top-menu-bar row">
                    <div className="col-lg-3">
                        <img className="eezy-logo img-fluid" src={logo} alt="logo" />
                    </div>
                    <div className="top-three-menu colg-lg-9">
                        <button type="button" className="top-menu-btn btn" onClick={() => handleTrackParcelShow()}>Track Parcel</button>
                        <a type="button" className="top-menu-btn btn" target="_blank" href="/contact">Support</a>
                        <button className="top-menu-btn btn" onClick={() => handleSignOutBtnClick()}>Log Out</button>
                        <button style={{display: drawerOpenState ? 'none' : ''}} className="btn openbtn" onClick={() => setDrawerOpenState(true)}><FontAwesomeIcon icon={faBars} /></button>
                    </div>
                </div>
                <div className="responsive-nav">
                    <div id="mySidebar" className="sidebar" style={{width: drawerOpenState ? '250px' :  '0px'}}>
                        <a className="closebtn" onClick={() => setDrawerOpenState(false)}>×</a>
                        <a className="left-menu-mobile">
                            <div className="left-menu-nav">
                                <button className="btn left-menu-item menu-mbl" onClick={() => {history.push(`/dashboard/summery`); setDrawerOpenState(false)}}>Dashboard</button>
                                <button className="btn left-menu-item menu-mbl" onClick={() => {history.push(`/dashboard/myaccount`); setDrawerOpenState(false)}}>Account</button>
                                <button className="btn left-menu-item menu-mbl" onClick={() => {history.push(`/dashboard/subscription`); setDrawerOpenState(false)}}>Subscription</button>
                                <button className="btn left-menu-item menu-mbl" onClick={() => {history.push(`/dashboard/parcels`); setDrawerOpenState(false)}}>Parcels</button>
                                <button className="btn left-menu-item menu-mbl" onClick={() => {history.push(`/dashboard/payments`); setDrawerOpenState(false)}}>Payment</button>
                            </div> 
                            <hr width="90%" />
                            <div>
                                <button type="button" className="btn top-menu-btn1" onClick={() => {setDrawerOpenState(false); handleTrackParcelShow()}}>Track Parcel</button>
                                <button onClick={() => history.push('/contact')} className="btn top-menu-btn1">Support</button>
                                <button className="btn top-menu-btn1" onClick={() => handleSignOutBtnClick()}>Log Out</button>
                            </div>
                            <hr width="90%" />
                        </a>
                        <div className="left-menu-links-mbl">
                            <a href="/restricted" target="_blank"><p>Restricted &amp; Prohibited Items</p></a>
                            <a href="/faq" target="_blank"><p>Help Center</p></a>
                            <a href="/terms" target="_blank"><p>Terms &amp; Conditions</p></a>
                            <a href="/privacy" target="_blank"><p>Privacy Policy</p></a>
                        </div>
                    </div>
                </div>
            </div>
            <TrackParcel show={showTrackParcelModal} handleClose={handleTrackParcelClose}></TrackParcel>
            </>
        }
        </Container>
        </>
    );
};

export default Titlebar;