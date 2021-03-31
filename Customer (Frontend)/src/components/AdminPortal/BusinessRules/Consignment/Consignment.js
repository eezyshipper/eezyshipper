import React from 'react';
import { Button } from 'react-bootstrap';
import MainContentLayout from '../../../Layouts/MainContentLayout/MainContentLayout';

const Consignment = () => {
    return (
        <>
        <MainContentLayout title="Consignments">
        <table class="d-block">
            <tbody>
                <tr>
                    <td className="text-secondary">Starting Number</td>
                    <td colspan="2"><input type="number" /> <i>Cumulative</i></td>
                </tr>
                <tr>
                    <td className="text-secondary">Prefix</td>
                    <td colspan="2"><input type="text" /></td>
                </tr>
                <tr>
                    <td className="text-secondary">Consolidation Period</td>
                    <td>
                        <div className="border rounded p-2">
                            <p><strong>Opening</strong></p>
                            <select>
                                <option>Select Date</option>
                            </select> <br/>
                            <input type="time" />
                        </div>
                    </td>
                    <td className="text-secondary">
                    <div className="border rounded p-2">
                            <p><strong>Colsing</strong></p>
                            <select>
                                <option>Select Date</option>
                            </select> <br/>
                            <input type="time" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="text-secondary">Max Volume</td>
                    <td colspan="2"><input type="number" /> <i>Cumulative</i></td>
                </tr>
            </tbody>
        </table>
        <hr/>
        <div className="d-flex justify-content-end">
            <div>
                <Button className="rounded-pill" variant="secondary-pill">Cancel</Button>
                <Button className="rounded-pill" variant="info">Save</Button>
            </div>
        </div>
        </MainContentLayout>
        </>
    );
};

export default Consignment;