import React from 'react';
import ExtraPagesLayout from '../../../Layouts/ExtraPagesLayout/ExtraPagesLayout';
import towerImage from '../../../../images/tower.png';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <>
        <ExtraPagesLayout title="Contact Us">
            <div className="container pt-3">
                <div className="text-center">
                    <h4>Shop the World and have it delivered to your door</h4>
                    <hr className="border mb-2" />
                </div>
                
                    <div className="how-it-icons text-center">
                        <div className="text-center mb-5">
                            <h5 className="font-weight-bold">Email Us</h5>
                            <p>info@eezyshipper.com</p>
                        </div>
                        <img className="tower-img img-fluid" src={towerImage} alt="tower" />
                    </div>
                </div>
        </ExtraPagesLayout>
        </>
    );
};

export default ContactUs;