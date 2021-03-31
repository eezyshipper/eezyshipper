import React from 'react';
import { Modal } from 'react-bootstrap';
import './TrackParcel.css';

const TrackParcel = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Track Parcel</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <p style={{fontSize: '14px'}}>Use the eezyshipper tracking number to know <br/> your parcel status</p>
                <input className="track-num" type="text" placeholder="Tracking Number starts with ES?"/>
                <div>
                    <button className="btn track-parcel-btn">Track</button>
                </div>
            </Modal.Body>
        </Modal> 
    );
};

export default TrackParcel;