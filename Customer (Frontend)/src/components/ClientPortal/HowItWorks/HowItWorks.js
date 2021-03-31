import React from 'react';
import { Modal } from 'react-bootstrap';
import './HowItWorks.css';

const HowItWorks = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>How It works</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="how-it-group">
                    <div className="how-it-items">
                        <div className="how-it-circle">
                            <h1>1</h1>
                        </div>
                        <p className="pt-4">Shop in a <br/> UK online store <br/> and add your <br/>purchase to your<br/> cart</p>
                    </div>
                    <div className="how-it-items">
                        <div className="how-it-circle">
                            <h1>2</h1>
                        </div>
                        <p className="pt-4">Use your Eezyshipper <br/> UK address <br/> in the delivery <br/> address field <br/> of the store's <br/> checkout<br/> form</p>
                    </div>
                    <div className="how-it-items">
                        <div className="how-it-circle">
                            <h1>3</h1>
                        </div>
                        <p className="pt-4">Pay for your<br/> delivery  when <br/>your parcel become <br/>visible in the <br/> Eezyshipper website</p>
                    </div>
                    <div className="how-it-items">
                        <div className="how-it-circle">
                            <h1>4</h1>
                        </div>
                        <p className="pt-4">Recieve your parcel</p>
                    </div>
                </div>
            </Modal.Body>
        </Modal>   
    );
};

export default HowItWorks;
