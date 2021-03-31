import React from 'react';
import { useForm } from 'react-hook-form';
import { Toggle } from 'rsuite';
import MainContentLayout from '../../../../Layouts/MainContentLayout/MainContentLayout';

const AddNewLocation = () => {
    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:8000/api/location/add', {
            mode: 'no-cors',
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="d-block">
            <MainContentLayout title="ADD NEW LOCATION">
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
                        <td className="text-secondary">Set as</td>
                        <td>
                            <strong>Default</strong>
                            <Toggle name="locationAddSetDeafult" className="mx-2" ref={register({ required: true})}></Toggle>
                            {errors?.locationAddSetDeafult && <span className="text-danger">This field is required</span>}
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

export default AddNewLocation;