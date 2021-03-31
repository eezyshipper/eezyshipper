import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'react-bootstrap';
import customerLogo from '../../../images/customer-logo.png';
import MainContentLayout from '../../Layouts/MainContentLayout/MainContentLayout';
import './Register.css';
import ReCAPTCHA from "react-google-recaptcha";
import { setCurrentUser } from '../../../redux/Actions/eeztshipperActions';
import { connect } from 'react-redux';



const Register = ({currentUser, setCurrentUser}) => {
    //localize
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard/summery" } };

    console.log(from);

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:9000/auth/register',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(returnedData => {
            if(returnedData){
                const {token, user} = returnedData;
                const registeredUserInfo = {...user, token};
                setCurrentUser(registeredUserInfo);
                history.replace(from);
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    function onChange(value) {
        console.log("Captcha value:", value);
    }


    return (
        <>
            <div className="register-area">
                <Row className="justify-content-center text-center">
                    <Col md={4} className="login-main px-1 mt-5 mb-4">
                    <img style={{width: '40%'}} className="img-fluid d-block mx-auto" src={customerLogo} alt="logo"/>
                    <MainContentLayout title="Create Account">
                        <div className="">
                            <form className="" onSubmit={handleSubmit(onSubmit)}>              
                            <input className="form-control my-3 register-input" type="text" name="firstName" ref={register({ required: true, maxLength: 45 })} placeholder="First Name"/>           
                                    { errors?.firstName && errors?.firstName?.type === 'required' &&  <span className="text-danger">This field is required</span>}
                                    { errors?.firstName && errors?.firstName?.type === 'maxLength' && <span className="text-danger">Max 45 Characters</span>}

                                    <input className="form-control my-3 register-input" type="text" name="lastName" ref={register({ required: true, maxLength: 45 })} placeholder="Last Name"/>           
                                    { errors?.lastName && errors?.lastName?.type === 'required' &&  <span className="text-danger">This field is required</span>}
                                    { errors?.lastName && errors?.lastName?.type === 'maxLength' && <span className="text-danger">Max 45 Characters</span>}

                                    <input className="form-control my-3 register-input" type="email" name="email" ref={register({ required: true })} placeholder="Email"/>           
                                    {errors?.email && <span className="text-danger">This field is required</span>}

                                    <input className="form-control my-3 register-input" type="password" name="password" ref={register({ required: true })} placeholder="Password"/>           
                                    {errors?.password && <span className="text-danger">This field is required</span>}

                                    <select style={{color : '#6C7D75'}} name="country" ref={register({ required: true })} className="register-input btn mt-1  mb-3 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                        <option disabled>Country</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Srilanka">Srilanka</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Bhutan">Bhutan</option>
                                    </select>
                                    {errors?.country && <span className="text-danger">This field is required</span>}

                                    <div className="d-flex justify-content-center">
                                        <ReCAPTCHA
                                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                            onChange={onChange}
                                        />
                                    </div>

                                
                                <input className="btn  log-in-btn" type="submit" value="Create Account" />

                                <p style={{fontSize : '13px'}} className="text-center mb-2 mt-2 mr-3">By Clicking 'Create Account' above you accept <br/> our Terms and Services and Policy</p>
                                
                                <p className="mt-5"><small className="font-weight-bold pt-5" style={{letterSpacing: '1px',  color: '#00000094'}}>Already Have an account??</small></p>
                                
                                <Link style={{textDecoration : 'none'}} to="/login"><Button className="create-acc-btn">Log In</Button></Link>
                                
                            </form>
                        </div>
                    </MainContentLayout>
                    </Col>
                </Row> 
        </div>
        </>
    );
};

const mapStateToProps = state => {
    return{
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = {
    setCurrentUser: setCurrentUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);