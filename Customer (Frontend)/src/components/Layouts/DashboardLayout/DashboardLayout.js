import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Sidenav } from 'rsuite';
import { connect } from 'react-redux';
import Consignment from '../../AdminPortal/BusinessRules/Consignment/Consignment';
import Profiles from '../../AdminPortal/Customer/Profiles/Profiles';
import MultiCurrency from '../../AdminPortal/Management/MultiCurrency/MultiCurrency';
import Suppliers from '../../AdminPortal/Management/Suppliers/Suppliers';
import SystemUser from '../../AdminPortal/Management/SystemUser/SystemUser';
import WeightConversion from '../../AdminPortal/Management/WeightConversion/WeightConversion';
import Summery from '../../AdminPortal/Summery/Summery';
import LeftSidebar from '../../Sidebars/LeftSideBar/LeftSidebar';
import './DashboardLayout.css';
// import ClientDashboard from '../../ClientPortal/ClientDashboard/ClientDashboard';
import ClientAccount from '../../ClientPortal/ClientAccount/ClientAccount';
import ClientParcels from '../../ClientPortal/ClientParcels/ClientParcels';
import ClientPayments from '../../ClientPortal/ClientPayments/ClientPayments';
import Titlebar from '../LayoutHelpers/Titlebar/Titlebar';
import ClientDashboardRoot from '../../ClientPortal/ClientDashboard/ClientDashboardRoot/ClientDashboardRoot';
import { Route, Switch, useLocation } from 'react-router-dom';
import AddNewLocation from '../../AdminPortal/Management/Location/AddNewLocation/AddNewLocation';
import LocationList from '../../AdminPortal/Management/Location/LocationList/LocationList';
import SupplierList from '../../AdminPortal/Management/Suppliers/SupplierList/SupplierList';
import PricingList from '../../AdminPortal/Management/Pricing/PricingList/PricingList';
import AddNewPricing from '../../AdminPortal/Management/Pricing/AddNewPricing/AddNewPricing';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import SearchUser from '../../AdminPortal/BookInParcel/SearchUser/SearchUser';
import AddParcelToClient from '../../AdminPortal/BookInParcel/AddParcelToClient/AddParcelToClient';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AwaitingPayment from '../../AdminPortal/BookInParcel/AwaitingPayment/AwaitingPayment';
import ForgetPassword from '../../auth/ForgetPassword/ForgetPassword';
import IdentificationDocuments from '../../ClientPortal/ClientAccount/IdentificationDocuments/IdentificationDocuments';
import SubscriptionRoot from '../../ClientPortal/ClientSubscription/SubscriptionRoot/SubscriptionRoot';
import ClientSubscriptionUpgrade from '../../ClientPortal/ClientSubscription/ClientSubscriptionUpgrade/ClientSubscriptionUpgrade';
import ParcelDetails from '../../ClientPortal/ClientParcels/ParcelDetails/ParcelDetails';

const DashboardLayout = ({currentUser, children, contentChanger, contentChange}) => {
    const [drawerOpenState, setDrawerOpenState] = useState(false);
    let location = useLocation();

    return (
        <div className="dashboard-holder" style={{backgroundColor : '#F0FBFF', minHeight: '100vh', position: drawerOpenState ? 'relative' : 'static', right: drawerOpenState ? '250px' : '0px'}}>
            <div>
                <Titlebar drawerOpenState={drawerOpenState} setDrawerOpenState={setDrawerOpenState}  user={currentUser?.role}></Titlebar>
            </div>
            <div>
                <Row className="flex-nowrap">
                    
                    {
                        currentUser.role === 'admin'  ?
                        <>
                            <Col className="text-center pt-3 px-3 pr-0 " md={2}>
                                <Link to={`/dashboard/summery`}><h4>Dashboard</h4></Link>
                                <Sidenav className="bg-transparent" defaultOpenKeys={['1', '2']}>
                                    <LeftSidebar user={currentUser.role}></LeftSidebar>
                                </Sidenav>
                            </Col>
                            <Col  md={10}>
                                <TransitionGroup>
                                    <CSSTransition in={true} key={location.key} classNames="page-fade" timeout={100}>
                                        <Switch location={location}>
                                            <Route path="/dashboard/summery">
                                                <Summery></Summery>
                                            </Route>
                                            <Route path="/dashboard/adminConsignments">
                                                <Consignment></Consignment>
                                            </Route>
                                            <Route path="/dashboard/addNewLocation">
                                                <AddNewLocation></AddNewLocation>
                                            </Route>
                                            <Route path="/dashboard/adminSystemUser">
                                                <SystemUser></SystemUser>
                                            </Route>
                                            <Route path="/dashboard/adminLocationList" >
                                                <LocationList></LocationList>
                                            </Route>
                                            <Route path="/dashboard/adminPricingList" >
                                                <PricingList></PricingList>
                                            </Route>
                                            <Route path="/dashboard/addNewPricing" >
                                                <AddNewPricing></AddNewPricing>
                                            </Route>
                                            <Route path="/dashboard/adminMultiCurrency" >
                                                <MultiCurrency></MultiCurrency>
                                            </Route>
                                            <Route path="/dashboard/adminSuppliers" >
                                                <SupplierList></SupplierList>
                                            </Route>
                                            <Route path="/dashboard/addNewSupplier" >
                                                <Suppliers></Suppliers>
                                            </Route>
                                            <Route path="/dashboard/adminWeightConversion" >
                                                <WeightConversion></WeightConversion>
                                            </Route>
                                            <Route path="/dashboard/adminProfiles" >
                                                <Profiles></Profiles>
                                            </Route>
                                            <Route path="/dashboard/adminPasswordReset" >
                                                <ForgetPassword></ForgetPassword>
                                            </Route>
                                            <Route exact path="/dashboard/bookInParcel" >
                                                <SearchUser></SearchUser>
                                            </Route>
                                            <Route exact path="/dashboard/bookInParcel/awaitingPayment" >
                                                <AwaitingPayment></AwaitingPayment>
                                            </Route>
                                            <Route exact path="/dashboard/bookInParcel/:userId" >
                                                <AddParcelToClient></AddParcelToClient>
                                            </Route>
                                        </Switch>
                                    </CSSTransition>
                                </TransitionGroup>
                            </Col>
                        </>
                        :
                        <>
                        <Col className="left-menu" xl={1} lg={2}>
                            <LeftSidebar user="client"></LeftSidebar>
                        </Col>
                        <Col lg={10} xl={11}>
                            <>
                            <Switch location={location}>
                                <Route path="/dashboard/summery">
                                    <ClientDashboardRoot></ClientDashboardRoot>
                                </Route>
                                <Route path="/dashboard/myaccount">
                                    <ClientAccount></ClientAccount>
                                </Route>
                                <Route path="/dashboard/subscription">
                                    <SubscriptionRoot></SubscriptionRoot>
                                </Route>
                                <Route path="/dashboard/parcels">
                                    <ClientParcels></ClientParcels>
                                </Route>
                                <Route path="/dashboard/upgrade">
                                    <ClientSubscriptionUpgrade></ClientSubscriptionUpgrade>
                                </Route>
                                <Route path="/dashboard/parcel-details">
                                    <ParcelDetails></ParcelDetails>
                                </Route>
                                <Route path="/dashboard/verify" >
                                    <IdentificationDocuments></IdentificationDocuments>
                                </Route>
                                <Route path="/dashboard/payments" >
                                    <ClientPayments></ClientPayments>
                                </Route>
                            </Switch>
                            </>
                        </Col>
                        </>
                    }
                    
                </Row>
            </div>
            <div>
                <p className="text-center mb-0">copyright@EzzyShippers</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        currentUser: state.currentUser
    }
}
export default connect(mapStateToProps)(DashboardLayout);