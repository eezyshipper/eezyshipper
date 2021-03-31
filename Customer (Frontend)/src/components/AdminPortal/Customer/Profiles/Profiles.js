import React, { useEffect, useState } from 'react';
import { Icon, Input, InputGroup, Table } from 'rsuite';
import TablePagination from 'rsuite/lib/Table/TablePagination';
import { fakeCustomerList } from '../../../../fakeData/fakeCustomer';
import MainContentLayout from '../../../Layouts/MainContentLayout/MainContentLayout';

const Profiles = () => {
    const [userProfilers, setUserProfiles] = useState([]);
    const [page, setPage] = useState(1);
    const [displayLength, setDisplayLength] = useState(7);
    useEffect(() => {
        const fakeData = [...fakeCustomerList];
        const filteredData = fakeData.filter((v, i) => {
            const start = displayLength * (page - 1);
            const end = start + displayLength;
            return i >= start && i < end;
        });
        setUserProfiles(filteredData);
    }, [displayLength, page])

    const handleChangePage = datakey =>{
        setPage(datakey);
    }

    const handleChangeLength = datakey =>{
        setPage(1);
        setDisplayLength(datakey);
    }

    const { Column, HeaderCell, Cell } = Table;

    return (
        <>
        <MainContentLayout title="Customers">
            <div className="d-flex justify-content-between align-items-center">
                <p>Profiles</p>
                <div>
                    <InputGroup size="sm" inside>
                        <Input placeholder="Search" />
                        <InputGroup.Button>
                            <Icon icon="search" />
                        </InputGroup.Button>
                    </InputGroup>
                </div>
            </div>
            <div>
                <Table
                    virtualized
                    height={400}
                    data={userProfilers}
                    onRowClick={data => {
                        console.log(data);
                    }}
                    >
                    <Column width={70} align="center" fixed>
                        <HeaderCell>ES No</HeaderCell>
                        <Cell>
                            {
                                rowdata => {
                                    const handleSnClick = (id) => {
                                        // setDisplaySupplierDetails(true);
                                        // setSelectedSupplier(id);
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

                    <Column width={130}>
                        <HeaderCell>Full Name</HeaderCell>
                        <Cell dataKey="customerFullName" />
                    </Column>

                    <Column width={130}>
                        <HeaderCell>Email</HeaderCell>
                        <Cell dataKey="customerEmail" />
                    </Column>

                    <Column width={130}>
                        <HeaderCell>Country</HeaderCell>
                        <Cell dataKey="customerCountry" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>City</HeaderCell>
                        <Cell dataKey="customerCity" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Gender</HeaderCell>
                        <Cell dataKey="customerGender" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>DOB</HeaderCell>
                        <Cell dataKey="customerDOB" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Nationality</HeaderCell>
                        <Cell dataKey="customerNationality" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Subscription</HeaderCell>
                        <Cell dataKey="customerSubscription" />
                    </Column>

                    <Column width={200}>
                        <HeaderCell>Status</HeaderCell>
                        <Cell dataKey="customerStatus" />
                    </Column>
                </Table>
                <TablePagination
                    lengthMenu={[
                        {
                        value: 10,
                        label: 10
                        },
                        {
                        value: 20,
                        label: 20
                        }
                    ]}
                    activePage={page}
                    displayLength={displayLength}
                    total={fakeCustomerList.length}
                    onChangePage={handleChangePage}
                    onChangeLength={handleChangeLength}
                />
            </div>
            </MainContentLayout>
        </>
    );
};

export default Profiles;