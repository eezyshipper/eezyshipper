import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Table } from 'rsuite';
import MainContentLayout from '../../../../Layouts/MainContentLayout/MainContentLayout';

const PricingList = () => {
    const { Column, HeaderCell, Cell } = Table;
    const fakeData = {}
    return (
        <>
            <MainContentLayout title="Pricing">
                <div className="d-flex justify-content-between align-items-center">
                    <p>Pricing List</p>
                    <div>
                        <Button as={Link} to={`/dashboard/addNewPricing`} variant="info" className="rounded-pill">ADD NEW PRICING</Button>
                    </div>
                </div>
                <Table
                height={350}
                data={fakeData}
                onRowClick={data => {
                    console.log(data);
                }}
                >
                <Column width={70} align="center" fixed>
                    <HeaderCell>Id</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={200} >
                    <HeaderCell>Date</HeaderCell>
                    <Cell dataKey="pricingDate" />
                </Column>

                <Column width={200}>
                    <HeaderCell>Weight Range</HeaderCell>
                    <Cell dataKey="pricingWeightRange" />
                </Column>

                <Column width={200}>
                    <HeaderCell>Supplier</HeaderCell>
                    <Cell dataKey="pricingSupplier" />
                </Column>

                <Column width={200}>
                    <HeaderCell>Rate</HeaderCell>
                    <Cell dataKey="pricingRate" />
                </Column>

                <Column width={300}>
                    <HeaderCell>Markup</HeaderCell>
                    <Cell dataKey="pricingMarkup" />
                </Column>

                <Column width={300}>
                    <HeaderCell>Our Price</HeaderCell>
                    <Cell dataKey="pricingOurPrice" />
                </Column>

                <Column width={300}>
                    <HeaderCell>Price Type</HeaderCell>
                    <Cell dataKey="pricingPriceType" />
                </Column>

                <Column width={300}>
                    <HeaderCell>Route</HeaderCell>
                    <Cell dataKey="pricingRoute" />
                </Column>

                <Column width={300}>
                    <HeaderCell>Status</HeaderCell>
                    <Cell dataKey="pricingStatus" />
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
                            <a onClick={handleAction}> Edit </a> |{' '}
                            <a onClick={handleAction}> Remove </a>
                        </span>
                        );
                    }}
                    </Cell>
                </Column>
                </Table>
            </MainContentLayout>
        </>
    );
};

export default PricingList;