import React from 'react';
import { Col } from 'react-bootstrap';
import MainContentLayout from '../../../Layouts/MainContentLayout/MainContentLayout';
import './CalculateShippingCost.css';

const CalculateShippingCost = () => {
    return (
        <div className="dash-cmn-right">
            <MainContentLayout titleSize="6"  title="Calculate Shipping Cost" customShadow>
                <form>
                    <Col xl={12} lg={12} md={12} sm={12} className="cal-shipping no-gutters">
                        <Col lg={7} xl={7} md={8} sm={8} htmlFor="shippingFrom">Shipping From</Col>
                        <select name="shippingFrom" style={{border: 'none', background: 'transparent'}} className="col-lg-4 col-xl-4 col-md-3 col-sm-3 col-3">
                            <option value="">USA</option> 
                            <option value="">Italy</option> 
                            <option value="">UAE</option> 
                            <option value="">UK</option> 
                        </select>
                    </Col>

                    <Col xl={12} lg={12} md={12} sm={12} className="cal-shipping no-gutters">
                        <Col lg={7} xl={7} md={8} sm={8} htmlFor="shippingTo">Shipping To</Col>
                        <select name="shippingTo" style={{border: 'none', background: 'transparent'}} className="col-lg-4 col-xl-4 col-md-3 col-sm-3 col-3">
                            <option value="">USA</option> 
                            <option value="">Italy</option> 
                            <option value="">UAE</option> 
                            <option value="">UK</option> 
                        </select>
                    </Col>

                    <Col xl={12} lg={12} md={12} sm={12} className="cal-shipping no-gutters">
                        <Col lg={7} xl={7} md={8} sm={8} htmlFor="weight">Weight</Col>
                        <select name="weight" style={{border: 'none', background: 'transparent'}} className="col-lg-4 col-xl-4 col-md-3 col-sm-3 col-3">
                            <option value="lb">LB</option> 
                            <option value="kg">KG</option>  
                        </select>
                    </Col>
                    <div className="text-center">
                        <label htmlFor="approxCost">Approx Costs</label>
                        <h4 className="font-weight-bold">$50.00</h4>
                    </div>
                    <hr/>
                </form>
                <p className="text-center" style={{fontSize: '12px'}}>Price Based on actual package <br/> weight, regardless of <br/> volume/dimension</p>
            </MainContentLayout>
        </div>
        
    );
};

export default CalculateShippingCost;