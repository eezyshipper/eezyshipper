import React, { useEffect } from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Redirect, Route, Switch } from "react-router-dom";
import HomePageRoot from './components/HomePage/HomePageRoot/HomePageRoot';
import DashboardLayout from './components/Layouts/DashboardLayout/DashboardLayout';
import EmptyLayout from './components/Layouts/EmptyLayout/EmptyLayout';
import NotFound from './components/Shared/NotFound/NotFound';
import { connect } from 'react-redux';
import Login from './components/auth/Login/Login';
import PrivacyPolicy from './components/ClientPortal/ExtraPages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './components/ClientPortal/ExtraPages/TermsAndConditions/TermsAndConditions';
import HelpCenter from './components/ClientPortal/ExtraPages/HelpCenter/HelpCenter';
import RestrictedItems from './components/ClientPortal/ExtraPages/ResrtictedItems/RestrictedItems';
import ForgetPassword from './components/auth/ForgetPassword/ForgetPassword';
import Register from './components/auth/Register/Register';
import './App.css';
import ContactUs from './components/ClientPortal/ExtraPages/ContactUs/ContactUs';
import { setAllWarehouses } from './redux/Actions/eeztshipperActions';

const AppRoute = ({currentUser, component: Component, layout: Layout, ...rest}) => {
  return(
    <Route 
      {...rest} 
      render={({location}) => 
      currentUser.role ? (
      <Layout>
        <Component  {...rest}/>
      </Layout>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state:{from: location}
          }}
          />
      )}></Route>
  )
}

function App({currentUser, setAllWarehouses}) {
  useEffect(() => {
    const fetchWarehouses = () => {
      fetch('http://localhost:9000/warehouse')
      .then(res => res.json())
      .then(returnedData => {
        const {warehouses} = returnedData;
        setAllWarehouses(warehouses);
      })
      .catch(err => console.log(err));
    }
    fetchWarehouses();
  }, [setAllWarehouses])
  return (
    <div className="app-class">
      <Switch> 
          <Route exact path="/">
            <EmptyLayout>
              <HomePageRoot/>
            </EmptyLayout>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/forget-pass">
            <ForgetPassword/>
          </Route>
          <AppRoute path="/dashboard" currentUser={currentUser} layout={DashboardLayout}/>
          <Route path="/privacy">
            <EmptyLayout>
              <PrivacyPolicy/>
            </EmptyLayout>
          </Route>
          <Route path="/terms">
            <EmptyLayout>
              <TermsAndConditions/>
            </EmptyLayout>
          </Route>
          <Route path="/help">
            <EmptyLayout>
              <HelpCenter/>
            </EmptyLayout>
          </Route>
          <Route path="/restricted">
            <EmptyLayout>
              <RestrictedItems/>
            </EmptyLayout>
          </Route>
          <Route path="/contact">
            <EmptyLayout>
              <ContactUs/>
            </EmptyLayout>
          </Route>
          <Route path="*">
            <EmptyLayout>
              <NotFound/>
            </EmptyLayout>
          </Route>
        </Switch>
    </div>
  );
}

const mapStateToProps = state =>{
  return{
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = {
  setAllWarehouses: setAllWarehouses
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
