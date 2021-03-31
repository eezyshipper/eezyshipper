import React from 'react';
import { useForm } from 'react-hook-form';
import { Toggle } from 'rsuite';
import MainContentLayout from '../../../../Layouts/MainContentLayout/MainContentLayout';

const AddNewPricing = () => {
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
        <div className="d-block">
            <MainContentLayout title="ADD NEW PRICING">
            <form onSubmit={handleSubmit(onSubmit)}>
            <table>
                <tbody>
                    <tr>
                        <td className="text-secondary">Supplier</td>
                        <td >
                            <div>
                                <select class="btn border-bottom btn-block my-2 dropdown-toggle" name="locationAddCountry" ref={register({ required: true})}>
                                    <option value="Supplier">Supplier</option>
                                </select>
                                {errors?.locationAddCountry && <span className="text-danger">This field is required</span>}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-secondary">Price Type</td>
                        <td >
                            <div>
                                <select class="btn border-bottom btn-block my-2 dropdown-toggle" name="locationAddCity" ref={register({ required: true})}>
                                    <option value="Members">Members</option>
                                </select>
                                {errors?.locationAddCountry && <span className="text-danger">This field is required</span>}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-secondary">Route</td>
                        <td>
                            <h6>Origin</h6>
                            <select class="btn border-bottom btn-block my-2 dropdown-toggle" name="locationAddCity" ref={register({ required: true})}>
                                <option value="UK">UK</option>
                            </select>
                            {errors?.locationAddCountry && <span className="text-danger">This field is required</span>}
                        </td>
                        <td>
                            <h6>Destination</h6>
                            <select class="btn border-bottom d-block my-2 dropdown-toggle" name="locationAddCity" ref={register({ required: true})}>
                                <option value="Kenya">Kenya</option>
                            </select>
                            {errors?.locationAddCountry && <span className="text-danger">This field is required</span>}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-secondary">Weight Range</td>
                        <td >
                            <select class="btn border-bottom d-block my-2 dropdown-toggle" name="locationAddCity" ref={register({ required: true})}>
                                <option value="Kenya">Kenya</option>
                            </select>
                            {errors?.locationAddCountry && <span className="text-danger">This field is required</span>}
                            KG
                        </td>
                        
                    </tr>
                    <tr>
                        <td className="text-secondary">Rate</td>
                        <td>
                            <input type="text" name="locationAddAddressLine3" ref={register({ required: true})} className="form-control" placeholder="Rate"/>
                            {errors?.locationAddAddressLine3 && <span className="text-danger">This field is required</span>}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-secondary">Markup</td>
                        <td>
                            <input type="number" name="locationAddAddressLine3" ref={register({ required: true})} className="form-control" placeholder="Markup" readOnly/>
                            {errors?.locationAddAddressLine3 && <span className="text-danger">This field is required</span>}
                        </td>
                        <td>
                        <select class="btn border-bottom d-block my-2 dropdown-toggle" name="locationAddCity" ref={register({ required: true})} disabled>
                                <option value="Kenya">Kenya</option>
                            </select>
                            {errors?.locationAddCountry && <span className="text-danger">This field is required</span>}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-secondary">Member Discount</td>
                        <td>
                            <input type="number" name="locationAddAddressLine3" ref={register({ required: true})} className="form-control" placeholder="Markup"/>
                            {errors?.locationAddAddressLine3 && <span className="text-danger">This field is required</span>}
                        </td>
                        <td>
                        <select class="btn border-bottom d-block my-2 dropdown-toggle" name="locationAddCity" ref={register({ required: true})} >
                                <option value="Percent">Percent</option>
                            </select>
                            {errors?.locationAddCountry && <span className="text-danger">This field is required</span>}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-secondary">Type of location</td>
                        <td >
                            <div>
                                <select class="btn border-bottom btn-block my-2 dropdown-toggle" name="locationAddTypeLocation" ref={register({ required: true})}>
                                    <option value="London">London</option>
                                    <option value="Nairobi">Nairobi</option>
                                    <option value="Dhaka">Dhaka</option>
                                </select>
                                {errors?.locationAddTypeLocation && <span className="text-danger">This field is required</span>}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-secondary">Our Price</td>
                        <td>
                            <input type="text" name="locationAddAddressLine3" ref={register({ required: true})} className="form-control" placeholder="Price"/>
                            {errors?.locationAddAddressLine3 && <span className="text-danger">This field is required</span>}
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
            </MainContentLayout>
        </div>
    );
};

export default AddNewPricing;