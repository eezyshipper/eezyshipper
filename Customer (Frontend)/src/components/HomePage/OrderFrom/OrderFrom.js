import React from 'react';
import './OrderFrom.css';

const OrderFrom = () => {
    return (
        <>
        <div className="order-store">
            <div className="container">
                <div className="text-center pt-4">
                    <h3 className="font-weight-bold pb-4">Order from Your Favourite UK Stores</h3>
                    <small>And many more</small>
                </div>
                
                <div className="pl-2 country-tab text-left">
                    <h5>UK</h5>
                    <hr className="icon-border" style={{width: '30px'}} />
                </div>
                <div className="stores">
                    <div className="text-center">
                        <div>
                            <img className="store-img" src="./img/stores/debenhams.png" alt="" />
                        </div>
                        <div>
                            <img className="store-img" src="./img/stores/topshop.png" alt="" />
                        </div>
                    </div> 
                    <div className="text-center">
                        <div>
                        <img className="store-img" src="./img/stores/ms.png" alt="" />
                        </div>
                        <div>
                            <img className="store-img" src="./img/stores/boots.png" alt="" />
                        </div>
                    </div> 
                    <div className="text-center">
                        <div>
                            <img className="store-img" src="./img/stores/next.png" alt="" />
                        </div>
                        <div>
                            <img className="store-img" src="./img/stores/ebay.png" alt="" />
                        </div>
                    </div> 
                    <div className="text-center">
                        <div>
                            <img className="store-img" src="./img/stores/river.png" alt="" />
                        </div>
                        <div>
                            <img className="store-img" src="./img/stores/argos.png" alt="" />
                        </div>
                    </div> 
                    <div className="text-center">
                        <div>
                            <img className="store-img" src="./img/stores/hm.png" alt="" />
                        </div>
                        <div>
                            <img className="store-img" src="./img/stores/amazon.png" alt="" />
                        </div>
                    </div> 
                </div>
            </div>
            </div> 
        </>
    );
};

export default OrderFrom;