import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Table } from 'rsuite';
import TablePagination from 'rsuite/lib/Table/TablePagination';
import { fakeLocations } from '../../../../../fakeData/fakeLocationList';
import MainContentLayout from '../../../../Layouts/MainContentLayout/MainContentLayout';

const LocationList = () => {
    const [allLocation, setAllLocation] = useState([]);
    const [page, setPage] = useState(1);
    const [displayLength, setDisplayLength] = useState(7);

    useEffect(() => {
        const fakeData = [...fakeLocations];
        const filteredData = fakeData.filter((v, i) => {
            const start = displayLength * (page - 1);
            const end = start + displayLength;
            return i >= start && i < end;
        });
        console.log(filteredData);
        setAllLocation(filteredData);
    }, [displayLength, page])

    
    const { Column, HeaderCell, Cell } = Table;

    const handleChangePage = datakey =>{
        console.log(datakey);
        setPage(datakey);
    }

    const handleChangeLength = datakey =>{
        setPage(1);
        setDisplayLength(datakey);
    }
    return (
        <MainContentLayout title="Location">
            <div className="d-flex justify-content-between align-items-center">
                <p>List of current locations</p>
                <div>
                    <Button as={Link} to={'/dashboard/addNewLocation'} variant="info" className="rounded-pill">ADD NEW LOCATION</Button>
                </div>
            </div>
            <div className="mt-3">
            <Table
                height={380}
                data={allLocation}
                onRowClick={data => {
                    console.log(data);
                }}
                >
                <Column width={70} align="center" fixed>
                    <HeaderCell>Id</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={120}>
                    <HeaderCell>Country</HeaderCell>
                    <Cell dataKey="locationCountry" />
                </Column>

                <Column width={120}>
                    <HeaderCell>City</HeaderCell>
                    <Cell dataKey="locationCity" />
                </Column>

                <Column width={120}>
                    <HeaderCell>Address</HeaderCell>
                    <Cell dataKey="locationAddress" />
                </Column>

                <Column width={100}>
                    <HeaderCell>Type</HeaderCell>
                    <Cell dataKey="locationType" />
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
                            <a className="text-warning cursor-pointer" onClick={handleAction}> EDIT </a> |{' '}
                            <a className="text-danger cursor-pointer" onClick={handleAction}> DELETE </a>
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
                        value: 20,
                        label: 20
                        }
                    ]}
                    activePage={page}
                    displayLength={displayLength}
                    total={fakeLocations.length}
                    onChangePage={handleChangePage}
                    onChangeLength={handleChangeLength}
                />
            </div>
        </MainContentLayout>
    );
};

export default LocationList;