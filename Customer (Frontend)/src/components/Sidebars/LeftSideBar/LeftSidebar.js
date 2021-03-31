import React, { useState } from 'react';
import { Nav, Dropdown, Icon } from 'rsuite';
import { connect } from 'react-redux';
import { contentChange } from '../../../redux/Actions/eeztshipperActions';
import './LeftSidebar.css';
import { Link, useHistory } from 'react-router-dom';


const LeftSidebar = ({ user, contentChanger, contentChange }) => {
    const [activeMenu, setActiveMenu] = useState(1);
    const history = useHistory();
    return (
        <div>
          {
            user === 'admin' ?
            <>
            <Nav>
                <Dropdown  eventKey="1" title="Business Rules" icon={<Icon icon="magic" />}>
                    <Link to={`/dashboard/adminConsignments`}><Dropdown.Item eventKey="1-1">Consingnment</Dropdown.Item></Link>
                </Dropdown>
                <Dropdown eventKey="2" title="Management" icon={<Icon icon="gear-circle" />}>
                    <Link to={`/dashboard/adminSystemUser`}><Dropdown.Item eventKey="2-1">System User</Dropdown.Item></Link>
                    <Link to={`/dashboard/adminLocationList`}><Dropdown.Item eventKey="2-2">Location</Dropdown.Item></Link>
                    <Link to={`/dashboard/adminPricingList`}><Dropdown.Item eventKey="2-3">Pricing</Dropdown.Item></Link>
                    <Link to={`/dashboard/adminSuppliers`}><Dropdown.Item eventKey="2-4">Suppliers</Dropdown.Item></Link>
                    <Link to={`/dashboard/adminMultiCurrency`}><Dropdown.Item eventKey="2-5">Multi Currency</Dropdown.Item></Link>
                    <Link to={`/dashboard/adminWeightConversion`}><Dropdown.Item eventKey="2-6">Weight Conversion</Dropdown.Item></Link>
                </Dropdown>
                <Dropdown eventKey="3" title="Customers" icon={<Icon icon="magic" />}>
                    <Link to={`/dashboard/adminProfiles`}><Dropdown.Item eventKey="3-1">Profiles</Dropdown.Item></Link>
                    <Link to={`/dashboard/adminPasswordReset`}><Dropdown.Item eventKey="3-2">Password Reset</Dropdown.Item></Link>
                </Dropdown>
            </Nav>
            </>
            :
            <>
            <div>
              <div className="d-flex flex-column">
                <button className={`btn left-menu-item menu-item ${activeMenu === 1 ? 'menu_active' : ''}`} onClick={() => {setActiveMenu(1); history.push(`/dashboard/summery`)}}>Dashboard</button>
                <button className={`btn left-menu-item menu-item ${activeMenu === 2 ? 'menu_active' : ''}`} onClick={() => {setActiveMenu(2); history.push(`/dashboard/myaccount`)}}>Account</button>
                <button className={`btn left-menu-item menu-item ${activeMenu === 3 ? 'menu_active' : ''}`} onClick={() => {setActiveMenu(3); history.push(`/dashboard/subscription`)}}>Subscription</button>
              </div>
              <div className="d-flex flex-column">
                <button className={`btn left-menu-item menu-item ${activeMenu === 4 ? 'menu_active' : ''}`} onClick={() => {setActiveMenu(4); history.push(`/dashboard/parcels`)}}>Parcels</button>
                <button className={`btn left-menu-item menu-item ${activeMenu === 5 ? 'menu_active' : ''}`} onClick={() => {setActiveMenu(5); history.push(`/dashboard/payments`)}}>Payment</button>
              </div>
            </div>
            <div className="left-menu-links">
                  <a href="/restricted" target="_blank"><p>Restricted &amp; Prohibited Items</p></a>
                  <a href="/help" target="_blank"><p>Help Center</p></a>
                  <a href="/terms" target="_blank"><p>Terms &amp; Conditions</p></a>
                  <a href="/privacy" target="_blank"><p>Privacy Policy</p></a>
              </div>
            </>
          }  
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        contentChanger: state.contentChanger
    }
}

const mapDispatchToProps = {
    contentChange: contentChange
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar);