import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'rsuite';
import TablePagination from 'rsuite/lib/Table/TablePagination';
import { fakeLocations } from '../../../../../fakeData/fakeLocationList';
import { fakeSuppliersList } from '../../../../../fakeData/fakeSuppliers';
import { setDeleteConfirmationState } from '../../../../../redux/Actions/eeztshipperActions';
import DeleteConfirmationLayout from '../../../../Layouts/DeleteConfirmationLayout/DeleteConfirmationLayout';
import MainContentLayout from '../../../../Layouts/MainContentLayout/MainContentLayout';
import SupplierDetailsModal from '../SupplierDetailsModal/SupplierDetailsModal';

const SupplierList = ({deleteConfirmationState, setDeleteConfirmationState}) => {
    const [allSupplier, setAllSupplier] = useState([]);
    const [page, setPage] = useState(1);
    const [displayLength, setDisplayLength] = useState(7);
    const [displaySupplierDetails, setDisplaySupplierDetails] = useState(false);
    const [selectedSupplier, setSelectedSupplier] = useState('');

    useEffect(() => {
        const fakeData = [...fakeSuppliersList];
        const filteredData = fakeData.filter((v, i) => {
            const start = displayLength * (page - 1);
            const end = start + displayLength;
            return i >= start && i < end;
        });
        setAllSupplier(filteredData);
    }, [displayLength, page])

    
    const { Column, HeaderCell, Cell } = Table;

    const handleChangePage = datakey =>{
        setPage(datakey);
    }

    const handleChangeLength = datakey =>{
        setPage(1);
        setDisplayLength(datakey);
    }
    return (
        <>
        <MainContentLayout title="Suppliers">
            <div className="d-flex justify-content-between align-items-center">
                <p>List of current suppliers</p>
                <div>
                    <Button as={Link} to={`/dashboard/addNewSupplier`} variant="info" className="rounded-pill">ADD NEW SUPPLIER</Button>
                </div>
            </div>
            <div className="mt-3">
            <Table
                height={380}
                data={allSupplier}
                >
                <Column width={70} align="center">
                    <HeaderCell>Supplier ID</HeaderCell>
                    <Cell>
                        {
                            rowdata => {
                                const handleSnClick = (id) => {
                                    setDisplaySupplierDetails(true);
                                    setSelectedSupplier(id);
                                }
                                return(
                                    <>
                                        <strong style={{borderBottom : '3px solid #29CAF8', cursor: 'pointer'}} className="" onClick={() => handleSnClick(rowdata.id)}>{rowdata.id}</strong>
                                    </>
                                )
                            }
                        }
                    </Cell>
                </Column>

                <Column width={120}>
                    <HeaderCell>Supplier Name</HeaderCell>
                    <Cell dataKey="supplierCompanyName" />
                </Column>

                <Column width={120}>
                    <HeaderCell>Address</HeaderCell>
                    <Cell dataKey="supplierAddress" />
                </Column>

                <Column width={120}>
                    <HeaderCell>Telephone</HeaderCell>
                    <Cell dataKey="supplierTelephone" />
                </Column>

                <Column width={100}>
                    <HeaderCell>Email</HeaderCell>
                    <Cell dataKey="supplierEmail" />
                </Column>

                <Column width={120}>
                    <HeaderCell>Supplier Type</HeaderCell>
                    <Cell dataKey="supplierType" />
                </Column>

                <Column width={120} fixed="right">
                    <HeaderCell>Action</HeaderCell>

                    <Cell>
                    {rowData => {
                        function handleAction() {
                        alert(`id:${rowData.id}`);
                        }
                        return (
                        <span>
                            <strong style={{cursor: 'pointer'}} className="text-warning" onClick={handleAction}> EDIT </strong> |{' '}
                            <strong style={{cursor: 'pointer'}} className="text-danger" onClick={() => setDeleteConfirmationState(true)}> DELETE </strong>
                        </span>
                        );
                    }}
                    </Cell>
                </Column>
                </Table>
                <TablePagination
                    lengthMenu={[
                        {
                        value: 7,
                        label: 'Seven'
                        },
                        {
                        value: 10,
                        label: 'Ten'
                        }
                    ]}
                    activePage={page}
                    displayLength={displayLength}
                    total={fakeSuppliersList.length}
                    onChangePage={handleChangePage}
                    onChangeLength={handleChangeLength}
                />
            </div>
        </MainContentLayout>
        <DeleteConfirmationLayout></DeleteConfirmationLayout>
        <SupplierDetailsModal style={{backgroundColor: 'black'}} data={selectedSupplier} show={displaySupplierDetails} setShow={setDisplaySupplierDetails}></SupplierDetailsModal>
            
        </>
    );
};

const mapStateToProps = state => {
    return{
        deleteConfirmationState: state.deleteConfirmationState
    }
}

const mapDispatchToProps = {
    setDeleteConfirmationState: setDeleteConfirmationState
}

export default connect(mapStateToProps, mapDispatchToProps)(SupplierList);