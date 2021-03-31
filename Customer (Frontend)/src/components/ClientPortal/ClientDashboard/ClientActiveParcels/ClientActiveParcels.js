import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import MainContentLayout from '../../../Layouts/MainContentLayout/MainContentLayout';
import tower from '../../../../images/tower.png';

const ClientActiveParcels = () => {
    const [activeParcels, setActiveParcels] = useState([]);
    return (
        <>
            <MainContentLayout title="Active Parcels" customShadow>
                {
                    activeParcels &&  
                    <div className="text-center mt-5 mb-3">
                        <Image style={{width : '450px'}} className="img-fluid p-5" src={tower}/>
                        <p className="text-secondary text-center">Currently no active parcels.</p>
                    </div>
                }
            </MainContentLayout>
        </>
    );
};

export default ClientActiveParcels;