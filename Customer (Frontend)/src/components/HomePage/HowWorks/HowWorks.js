import React from 'react';
import towerImage from '../../../images/tower.png';
import './HowWorks.css';

const HowWorks = () => {
    return (
        <>
        <div class="how-it" id="works">
            <div class="container">
                <div class="text-center">
                    <h3>How It Works</h3>
                    <hr class="border mb-2"/>
                    <small>The <em>Shipping</em> is as Easy as the <em>Shopping</em></small>
                </div>
                <div class="how-it-icons text-center">
                    <div class="demo-circle col-lg-10">
                        <div class="circle">
                            <h4>1</h4>
                        </div>
                        <hr class="icon-border"/>
                        <div class="circle">
                            <h4>2</h4>
                        </div>
                        <hr class="icon-border" />
                        <div class="circle">
                            <h4>3</h4>
                        </div>      
                    </div>
                    <div class="row  text-center">
                        <div class="col-lg-4 col-sm-4">
                            <div class="circle mobile-circle-view">
                                <h4>1</h4>
                            </div>
                            <div class="work-text">
                                <p>Get Your Addresses</p>
                                <span>Register and receive your<br/>international addresses — it<br/> just takes a few clicks.</span>
                            </div>
                            <button class="btn address-btn">Get free address</button>
                        </div>
                        <div class="col-lg-4 col-sm-4">
                            <div class="circle mobile-circle-view">
                                <h4>2</h4>
                            </div>
                            <div class="work-text">
                                <p>Shop Online... Internationally!</p>
                                <span>And use your international<br/>addresses to get your orders<br/>delivered to us.</span>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-4">
                            <div class="circle mobile-circle-view">
                                <h4>3</h4>
                            </div>
                            <div class="work-text">
                                <p>Get your Items</p>
                                <span>We ship your items to your<br/>home address — right to<br/>your door!</span>
                            </div>
                        </div>
                    </div>
                    <img class="tower-img img-fluid" src={towerImage} alt="tower" />
                </div>
            </div>
        </div>
            
        </>
    );
};

export default HowWorks;