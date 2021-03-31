import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import MainContentLayout from '../../Layouts/MainContentLayout/MainContentLayout';
import customerLogo from '../../../images/customer-logo.png';
import './Login.css';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../../redux/Actions/eeztshipperActions';

const Login = ({setCurrentUser}) => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const onSubmit = data => {
        const user = {email: 'admin@email.com', password: 'password', firstName: 'firstName', lastName: 'lastName', role: 'admin'};
        setCurrentUser(user);
        history.replace(from);
        // fetch('http://localhost:9000/auth/login',{
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json'},
        //     body: JSON.stringify(data)
        // })
        // .then(res => res.json())
        // .then(returnedData => {
        //     const {token, user} = returnedData;
        //     const registeredUserInfo = {...user, token};
        //     setCurrentUser(registeredUserInfo);
        //     history.replace(from);
        // })
        // .catch(err => {
        //     console.log(err);
        // })
    }

    return (
        <div className="login-area">
        <Row className="justify-content-center text-center">
            <Col md={4} className="login-main px-4 mt-5">
            <img style={{width: '40%'}} className="img-fluid d-block mx-auto" src={customerLogo} alt="logo"/>
            <MainContentLayout title="Log In">
                <div className="">
                    <form className="" onSubmit={handleSubmit(onSubmit)}>              
                        <input className="my-4 form-control login-input" type="email" name="email" ref={register({ required: true })} placeholder="Email Address"/>           
                        {errors.email && <span className="text-danger">This field is required</span>}

                        <input className="mt-4 mb-2 form-control login-input" type="password" name="password" ref={register({ required: true })} placeholder="Password"/>           
                        {errors.password && <span className="text-danger">This field is required</span>}

                        
                        <input className="btn  log-in-btn" type="submit" value="Log In" />
                        <p as={Link} className="text-right mb-2 mt-1 mr-3"> 
                        <Link to="/forget-pass" style={{textDecoration: 'none', fontSize: '13px', color: '#00000094'}}>  Forget Password</Link></p>
                        <p className="mt-4"><small className=" pt-5" style={{letterSpacing: '1px',  color: '#00000094'}}>Don't Have an account??</small></p>
                        
                        <Link style={{textDecoration : 'none'}} to="/register"><Button className="create-acc-btn">Create Account</Button></Link>
                    </form>
                </div>
            </MainContentLayout>
            </Col>
        </Row> 
        </div>
    );
};

const mapStateToProps = state => {
    return{
        currentUser: state.currentUser
    }
}

const mapDispatchToProps ={
    setCurrentUser: setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);