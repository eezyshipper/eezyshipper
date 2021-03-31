import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import MainContentLayout from '../../Layouts/MainContentLayout/MainContentLayout';
import './ClientParcels.css'

const fakePercels = [
    { 
        id: 1,
        dateTime: '13/10/2020 14:20',
        transactionId: 'TN111111114',
        from: 'Amazon',
        destination: 'Kenya',
        eta: 'TBC',
        parcelItem: 'shoes',
        status: 'CLICK TO PAY',
        category: 'active'
    },
    { 
        id: 2,
        dateTime: '12/10/2020 14:20',
        transactionId: 'TN111111113',
        from: 'Amazon',
        destination: 'Kenya',
        eta: 'TBC',
        parcelItem: 'shirts',
        status: 'Recieved at Warehouse',
        category: 'active'
    },
    { 
        id: 3,
        dateTime: '12/10/2020 14:20',
        transactionId: 'TN111111113',
        from: 'Amazon',
        destination: 'Kenya',
        eta: 'To be confirmed',
        parcelItem: 'shoes',
        status: 'Delivered',
        category: 'history'
    }
]

const ClientParcels = ( ) => {
    const history = useHistory();
    const [activeMenu, setActiveMenu] = useState('active');
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        const categoryWiseParcel = fakePercels.filter(parcel => parcel.category === activeMenu);
        setSelectedItems(categoryWiseParcel);
    }, [activeMenu])

    const hide_status = () => {
        if (window.matchMedia("(max-width: 600px)").matches){
          document.getElementById("myDIV").style.display = "none";
        }
    }

    const show_status = () => {
        if (window.matchMedia("(max-width: 600px)").matches){
            document.getElementById("myDIV").style.display = "block";
        }
    }
      
    return (
        <>
            <Row>
                <Col md={12} lg={11}>
                    <MainContentLayout customShadow>
                        <h1>Parcels</h1>
                        <Row className="parcel-filter-option">
                            <div>
                                <div id="myDIV" className="filter_status">
                                    <button className={`btn parcel_button item ${activeMenu === 'active' ? 'active_list' : ''}`} onClick={() => setActiveMenu('active')}> Active(2)</button>
                                    <button className={`btn parcel_button item ${activeMenu === 'history' ? 'active_list' : ''}`} onClick={() => setActiveMenu('history')}>History(1)</button>
                                </div>
                            </div>
                            <div id className="searchBar"> 
                                <div className="searchBox" onMouseOver={() => hide_status()} onMouseOut={ () => show_status()}>
                                    <input className="searchInput" type="text" placeholder="Enter your TN number" />
                                    <button className="btn searchButton" href="#">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </div> 
                            </div>
                        </Row>
                        <hr/>
                        {
                            selectedItems.map(parcel => (
                                <Row className="paypending_div text-left pointer-cursor" onClick={() => history.push('/dashboard/parcel-details')}>
                                    <Col xl={7} lg={7} md={7} sm={12}> 
                                        <h5>Fashion: {parcel.parcelItem}</h5>
                                        <p>Estimated Time of Arrival: {parcel.eta}</p>
                                    </Col>
                                    <Col xl={5} lg={5} md={5} sm={12}>
                                        {
                                            parcel.status === 'CLICK TO PAY' ?
                                            <>
                                            <h5 style={{color: '#FE0707'}}>Payment Pending </h5>
                                            <h5>€56.90</h5>
                                            </>
                                            :
                                            <>
                                            <h5 style={{color: '#FF8D18'}}>Recieved at Warehouse</h5>
                                            </>
                                        }
                                        
                                    </Col>
                                </Row>
                            ))
                        }
                    </MainContentLayout>
                </Col>
            </Row>

            
        </>
    );
};

export default ClientParcels;