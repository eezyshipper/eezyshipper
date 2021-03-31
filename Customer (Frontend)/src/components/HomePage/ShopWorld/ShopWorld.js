import React from 'react';
import kgImage from '../../../images/kg.png'
import onlineImage from '../../../images/online.png';

import './ShopWorld.css';

const ShopWorld = () => {
    return (
        <>
        <div className="shop-world">
            <div className="container">
                <h3 className="text-center">Shop the World and have it delivered to your door</h3>
                <hr className="hr-border"/>
                <div className="row shop-items">
                    <div className="pay">
                        <img className="img-fluid icon" src={kgImage} alt="kg-weight" />
                        <p>Pay by the gram</p>
                        <span>Pay for the actual weight.<br/>You can check our delivery<br/>rates based on the parcel<br/>weight and destination<br/>country</span>
                    </div>

                    <div className="pay">
                        <img className="img-fluid icon" src={onlineImage} alt="onine" />
                        <p>All Online</p>
                        <span>You pay online to recieve the<br/>delivery</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ShopWorld;