import React from 'react';
import MainContentLayout from '../../Layouts/MainContentLayout/MainContentLayout';
import './ClientSubscription.css';
import basicImage from '../../../images/basic.png';
import premiumImage from '../../../images/premium.png';
import activeImage from '../../../images/active.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const subscriptionData = [
    {
        id: 1,
        subscriptionImage: basicImage,
        subscriptionTitle: 'Basic',
        subscriptionType: 'Free Plan',
        isActive: true,
        subscriptionFeatures: [
            {
                id: 'feature1',
                featureTitle: 'Delivery Address',
                featureDescription: 'Shop online in your country of choice, and use your allocated international addresses when placing your orders.',
            },
            {
                id: 'feature2',
                featureTitle: 'Pay Per 100 Grams',
                featureDescription: 'Our pay-by-weight shipping rates are straightforward and affordable.',
            },
            {
                id: 'feature3',
                featureTitle: 'Wait No More',
                featureDescription: 'We ship your purchases to you as soon as they arrive at your international address. You will receive your shipment within 5-7 business days.',
            },
        ]
    },
    {
        id: 2,
        subscriptionImage: premiumImage,
        subscriptionTitle: 'Premium',
        subscriptionType: 'Paid Plan',
        isActive: false,
        subscriptionFeatures: [
            {
                id: 'feature1',
                featureTitle: 'Basic Plan',
                featureDescription: 'Enjoy all features of the basic plan, plus',
            },
            {
                id: 'feature2',
                featureTitle: 'Discounted Shipping Rates',
                featureDescription: 'Enjoy a 30% shipping rate discount on purchases shipped to the GCC.',
            }
        ]
    }
]

const ClientSubscription = () => {
    const history = useHistory();
    return (
        <>
        <MainContentLayout customShadow title="Subscriptions">
        <p>Our subscription plans let you choose between free membership, with free international addresses and 
        standard, pay-by-weight shipping, and paying a small monthly subscription to receive a 30% discount on 
        our standard shipping fees. <br/><br/>
        Whichever plan you choose, shipping rates are based on the actual weight of your items, and charged per 
        100 grams, so you won’t pay through the nose for shipping large-sized, lightweight packages.</p>

            <h2 className="pt-5">Plans</h2>
            <hr/>

            <div className="currentplan-mbl">
                <h6>Active Plan</h6>
                <hr/>
                <p>You're subscribed to Basic plan</p>
            </div>
            <div className="subscription-plans mb-3">
                {
                    subscriptionData.map(subscription => (
                        <div key={subscription.id} className="subs-plan">
                            {
                                subscription.isActive &&
                                <div className="plan-active">
                                    <img src={activeImage} alt="active" />
                                </div>
                            }
                            <div className="text-center">
                                <img src={subscription.subscriptionImage} alt="subscription" />
                                <h5 className="pt-3">{subscription.subscriptionTitle} - <span style={{color:'grey'}}>{subscription.subscriptionType}</span></h5>
                            </div>
     
                            {
                                subscription.subscriptionFeatures instanceof Array &&
                                subscription.subscriptionFeatures.length > 0 &&
                                subscription.subscriptionFeatures.map(feature => (
                                    <div key={feature.id} className="d-flex subs-check pt-4 align-items-baseline"> 
                                        <FontAwesomeIcon icon={faCheckCircle} style={{color: 'grey'}} />&nbsp;
                                        <p style={{fontSize: '12px'}}><span className="font-weight-bold">{feature.featureTitle}<br/></span>{feature.featureDescription}</p>
                                    </div>
                                ))
                            }
                            <div className={subscription.isActive ? 'basic-div' : 'upgrade-div'} style={{borderTop: '1px solid #cbcbcb', width: '80%'}}>
                                {
                                    subscription.isActive ?
                                    <h5>Free</h5>
                                    :
                                    <>
                                    <small>Paid Yearly</small>
                                    <div className="d-flex align-items-baseline justify-content-between">
                                        <h5>$3 per month</h5>
                                        <button className="btn upgrade-btn" onClick={() => history.push('/dashboard/upgrade')}>Upgrade</button>
                                    </div>
                                    </>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </MainContentLayout>
        </>
    );
};

export default ClientSubscription;