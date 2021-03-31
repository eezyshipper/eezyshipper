import React from 'react';
import { useForm } from 'react-hook-form';
import { Toggle } from 'rsuite';
import MainContentLayout from '../../../Layouts/MainContentLayout/MainContentLayout';
import SupplierList from './SupplierList/SupplierList';

const Suppliers = () => {
    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = data => {
        // fetch('localhost:5000/addUser')
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     history.push('/dashboard')
        // });

        console.log(data);
    }
    return (
        <>
            <div>
                <MainContentLayout title="Suppliers">
                    <div className="pr-5 pl-3">
                        <h6>Add new supplier</h6>
                        <hr className="d-block"/>
                    </div>
                    <div className="mt-2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="text-secondary">Country</td>
                                        <td >
                                            <div>
                                                <select class="btn border-bottom btn-block my-2 dropdown-toggle" name="locationAddCountry" ref={register({ required: true})}>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="United States">United States</option>
                                                </select>
                                                {errors?.locationAddCountry && <span className="text-danger">This field is required</span>}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-secondary">City</td>
                                        <td >
                                            <div>
                                                <select class="btn border-bottom btn-block my-2 dropdown-toggle" name="locationAddCity" ref={register({ required: true})}>
                                                    <option value="London">London</option>
                                                    <option value="Nairobi">Nairobi</option>
                                                    <option value="Dhaka">Dhaka</option>
                                                </select>
                                                {errors?.locationAddCountry && <span className="text-danger">This field is required</span>}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-secondary">Address</td>
                                        <td><input type="text" name="locationAddAddressLine1" ref={register({ required: true})} className="form-control" placeholder="Address Line 1"/></td>
                                        {errors?.locationAddAddressLine1 && <span className="text-danger">This field is required</span>}
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><input type="text" name="locationAddAddressLine2" ref={register({ required: true})} className="form-control" placeholder="Address Line 2"/></td>
                                        {errors?.locationAddAddressLine2 && <span className="text-danger">This field is required</span>}
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><input type="text" name="locationAddAddressLine3" ref={register({ required: true})} className="form-control" placeholder="Address Line 3 - Postcode"/></td>
                                        {errors?.locationAddAddressLine3 && <span className="text-danger">This field is required</span>}
                                    </tr>
                                    <tr>
                                        <td>Telephone</td>
                                        <td><input type="text" name="locationAddAddressLine3" ref={register({ required: true})} className="form-control" placeholder="++4016829968"/></td>
                                        {errors?.locationAddAddressLine3 && <span className="text-danger">This field is required</span>}
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td><input type="email" name="locationAddAddressLine3" ref={register({ required: true})} className="form-control" placeholder="pappuhassan"/></td>
                                        {errors?.locationAddAddressLine3 && <span className="text-danger">This field is required</span>}
                                    </tr>
                                    <tr>
                                        <td className="text-secondary">Supplier Type</td>
                                        <td >
                                            <div>
                                                <select class="btn border-bottom btn-block my-2 dropdown-toggle" name="locationAddTypeLocation" ref={register({ required: true})}>
                                                    <option value="Active">Active</option>
                                                    <option value="Inactive">Inactive</option>
                                                </select>
                                                {errors?.locationAddTypeLocation && <span className="text-danger">This field is required</span>}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr/>
                            <div className="d-flex justify-content-center">
                                <input className="btn bg-warning rounded-pill mx-1" type="button" onClick={() => reset({})}  value="Cancel" /> 
                                <input className="btn bg-primary rounded-pill mx-1" type="submit" value="Save" />
                            </div>
                        </form>
                    </div>
                </MainContentLayout>
            </div>
        </>
    );
};

export default Suppliers;