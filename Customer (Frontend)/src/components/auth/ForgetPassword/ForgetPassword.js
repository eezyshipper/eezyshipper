import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import MainContentLayout from '../../Layouts/MainContentLayout/MainContentLayout';
import './ForgetPassword.css';
import customerLogo from '../../../images/customer-logo.png';

const ForgetPassword = () => {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        history.push('/dashboard')
    }
    return (
        <div className="login-area">
            <Row className="justify-content-center text-center">
                <Col md={4} className="login-main px-4 mt-5">
                <img style={{width: '40%'}} className="img-fluid d-block mx-auto" src={customerLogo} alt="logo"/>
                <MainContentLayout title="Reset Password">
                    <div className="">
                        <form className="" onSubmit={handleSubmit(onSubmit)}>    <p className="mt-3"><small                className="font-weight-bold pt-5" style={{letterSpacing: '1px',  color: '#00000094'}}>Enter the email address associated with your account and we will send a link to reset your password</small></p>          

                            <input className="my-4 form-control login-input" type="email" name="forgetPasswordEmail" ref={register({ required: true })} placeholder="Email"/>           
                            {errors.forgetPasswordEmail && <span className="text-danger">This field is required</span>}

                            <input className="btn  log-in-btn" type="submit" value="Send Link" />
                            
                        </form>
                    </div>
                </MainContentLayout>
                </Col>
            </Row> 
        </div>
        
    );
};

export default ForgetPassword;