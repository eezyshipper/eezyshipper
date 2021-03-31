import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import ShopWorld from '../ShopWorld/ShopWorld';
import HowWorks from '../HowWorks/HowWorks';
import ShippingCost from '../ShippingCost/ShippingCost';
import OrderFrom from '../OrderFrom/OrderFrom';

const HomePageRoot = () => {
    return (
        <>
            <TopBanner></TopBanner>
            <ShopWorld></ShopWorld>
            <HowWorks></HowWorks>
            <ShippingCost></ShippingCost>
            <OrderFrom></OrderFrom>
        </>
    );
};

export default HomePageRoot;