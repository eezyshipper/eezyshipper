import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fakeCustomerList } from '../../../../fakeData/fakeCustomer';
import MainContentLayout from '../../../Layouts/MainContentLayout/MainContentLayout';

const AddParcelToClient = () => {
    const {userId} = useParams();
    const history = useHistory();
    const [selectedUser, setSelectedUser] = useState([]);
    const [parcelList, setParcelList] = useState([]);
    const { register, handleSubmit, errors } = useForm()

    useEffect(() => {
        const fakeUser = [...fakeCustomerList];
        const [filteredData] = fakeUser.filter(user => user.id === userId);
        setSelectedUser(filteredData);
    }, [userId]);


    const onSubmit = data => {
        data.parcelId = Math.floor((Math.random() * 100) + 1);;
        setParcelList([...parcelList, data]);
    }

    const deleteItemFromParcelList = (productId) => {
        const filteredProducts = parcelList.filter(parcel => {
            return parcel?.parcelId !== productId;
        });
        setParcelList(filteredProducts);
    }

    const handleParcelListComplition = () => {
        history.push(`/dashboard/bookInParcel/awaitingPayment`)
    }
    
    return (
        <Row>
            <Col md={12}>
                <MainContentLayout title="Book In Parcel">
                    <table style={{fontSize: '.8rem'}}>
                        <tbody>
                            <tr>
                                <td>ES Number</td>
                                <td colspan="3">
                                    <input type="text" defaultValue={selectedUser?.id} readOnly/>
                                </td>
                            </tr>
                            <tr>
                                <td>Customer Name</td>
                                <td>
                                    <input type="text" defaultValue={selectedUser?.customerFullName} readOnly/>
                                </td>
                                <td>Location</td>
                                <td>
                                    <input type="text" defaultValue={`${selectedUser?.customerCity} warehouse`} readOnly/>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Destination</td>
                                <td>
                                    <input type="text" defaultValue={`${selectedUser?.customerCity} warehouse`} readOnly/>
                                </td>
                            </tr>
                            {
                                parcelList.length > 0 &&
                                <tr>
                                    <td>Parcel Details</td>
                                    <td colspan="3">
                                        <table>
                                            <thead className="bg-secondary rounded p-1">
                                                <tr className="border-top">
                                                    <th>No.</th>
                                                    <th>Description</th>
                                                    <th>Category</th>
                                                    <th>Value</th>
                                                    <th>L(cm) x W(cm) x H(cm)</th>
                                                    <th>Weight</th>
                                                    <th>Volumetric weight</th>
                                                    <th>Total Volumne</th>
                                                    <th>Chargeable Weight</th>
                                                    <th>Qty</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    parcelList.map((parcel, index) => (
                                                        <tr key={index} className="border-bottom">
                                                            <td>{index+1}</td>
                                                            <td>{parcel?.parcelDescription}</td>
                                                            <td>{parcel?.parcelCategory}</td>
                                                            <td>{parcel?.parcelValue}</td>
                                                            <td>{parcel?.parcelLength} x {parcel?.parcelwidth} x {parcel?.parcelHeight}</td>
                                                            <td>{parcel?.parcelWeight}</td>
                                                            <td>{parcel?.parcelVolumetricWeight}</td>
                                                            <td>{parcel?.parcelTotalVolume}</td>
                                                            <td>{parcel?.parcelChargeableWeight}</td>
                                                            <td>{parcel?.parcelQty}</td>
                                                            <td>
                                                                <span>
                                                                    <strong style={{cursor: 'pointer'}} className="text-warning" > EDIT </strong> |{' '}
                                                                    <strong style={{cursor: 'pointer'}} className="text-danger" onClick={() => deleteItemFromParcelList(parcel?.parcelId)}> REMOVE </strong>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            }
                            <tr style={{borderTop: '2px solid gray'}} className="pt-3">
                                <td></td>
                                <td colspan="3">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <input type="text" name="parcelWeight" ref={register({ required: true})} className="form-control" placeholder="Weight"/>
                                                        {errors?.parcelWeight && <span className="text-danger">This field is required</span>}
                                                    </td>
                                                    <td>
                                                        <input type="text" name="parcelLength" ref={register({ required: true})} className="form-control" placeholder="L"/>
                                                        {errors?.parcelLength && <span className="text-danger">This field is required</span>}
                                                    </td>
                                                    <td>
                                                        <input type="text" name="parcelWidth" ref={register({ required: true})} className="form-control" placeholder="W"/>
                                                        {errors?.parcelWidth && <span className="text-danger">This field is required</span>}
                                                    </td>
                                                    <td>
                                                        <input type="text" name="parcelHeight" ref={register({ required: true})} className="form-control" placeholder="H"/>
                                                        {errors?.parcelHeight && <span className="text-danger">This field is required</span>}
                                                    </td>
                                                    <td >
                                                        <input type="number" name="parcelQty" ref={register({ required: true})} className="form-control" placeholder="Qty"/>
                                                        {errors?.parcelQty && <span className="text-danger">This field is required</span>}
                                                    </td>
                                                    <td >
                                                        <input type="text" name="parcelVolumetricWeight" ref={register({ required: true})} className="form-control bg-white" placeholder="Volumetric Weight"/>
                                                        {errors?.parcelVolumetricWeight && <span className="text-danger">This field is required</span>}
                                                    </td>
                                                    <td >
                                                        <input type="text" name="parcelTotalVolume" ref={register({ required: true})} className="form-control bg-white" placeholder="Total Volume"/>
                                                        {errors?.parcelTotalVolume && <span className="text-danger">This field is required</span>}
                                                    </td>
                                                    <td >
                                                        <input type="text" name="parcelChargeableWeight" ref={register({ required: true})} className="form-control bg-white" placeholder="Chargeable Weight"/>
                                                        {errors?.parcelChargeableWeight && <span className="text-danger">This field is required</span>}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="text" name="parcelDescription" ref={register({ required: true})} className="form-control" placeholder="Description"/>
                                                        {errors?.parcelDescription && <span className="text-danger">This field is required</span>}
                                                    </td>
                                                    <td >
                                                        <div>
                                                            <select class="btn border-bottom btn-block my-2 dropdown-toggle bg-light" name="parcelCategory" ref={register({ required: true})}>
                                                                <option value="Fashion">Fashion</option>
                                                                <option value="Accessory">Accessory</option>
                                                            </select>
                                                            {errors?.parcelCategory && <span className="text-danger">This field is required</span>}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <input type="number" name="parcelValue" ref={register({ required: true})} className="form-control" placeholder="Description"/>
                                                        {errors?.parcelValue && <span className="text-danger">This field is required</span>}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div>
                                            <input className="btn bg-primary rounded mx-1" type="submit" value="ADD PARCEL" />
                                        </div>
                                    </form>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>
                    {
                        parcelList.length> 0 ?
                        <div className="d-flex justify-content-end">
                            <input className="btn bg-primary rounded mx-1" onClick={() => handleParcelListComplition()} type="button" value="Complete" />
                        </div>
                        :
                        <div className="d-flex justify-content-end">
                            <input className="btn bg-secondary rounded" type="button" value="Complete" disabled/>
                        </div>
                    }
                </MainContentLayout>
            </Col>
        </Row>
    );
};

export default AddParcelToClient;