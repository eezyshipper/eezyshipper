import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'rsuite';
import { fakeSuppliersList } from '../../../../../fakeData/fakeSuppliers';

const SupplierDetailsModal = ({data, show, setShow}) => {
    const [supplierDeatils, setSupplierDeatils] = useState([]);
    useEffect(() =>{
        const [filteredData] = fakeSuppliersList.filter(loc => loc.id === data);
        setSupplierDeatils(filteredData);
    }, [data]);
    return (
        <Modal show={show} onHide={() => setShow(false)} backdrop={true} size="sm">
            <Modal.Header>
            <Modal.Title>{supplierDeatils?.locationCountry}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className="d-block">
                    <tbody>
                        <tr className="border-bottom">
                            <td>Suppiler ID</td>
                            <td>{supplierDeatils?.id}</td>
                        </tr>

                        <tr className="border-bottom">
                            <td>Suppiler Name</td>
                            <td>{supplierDeatils?.supplierCompanyName}</td>
                        </tr>
                        <tr className="border-bottom">
                            <td>Address</td>
                            <td>{supplierDeatils?.supplierAddress}</td>
                        </tr>
                        <tr className="border-bottom">
                            <td>Email</td>
                            <td>{supplierDeatils?.supplierEmail}</td>
                        </tr>
                        <tr className="border-bottom">
                            <td>Telephone</td>
                            <td>{supplierDeatils?.supplierTelephone}</td>
                        </tr>
                        <tr className="border-bottom">
                            <td>Supplier Type</td>
                            <td>
                                <select>
                                    <option value={supplierDeatils?.supplierType}>{supplierDeatils?.supplierType}</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={() => setShow(false)} appearance="primary">
                Edit
            </Button>
            <Button onClick={() => setShow(false)} appearance="subtle">
                Back
            </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SupplierDetailsModal;