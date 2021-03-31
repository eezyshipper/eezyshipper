import React from 'react';
import GuestFooter from '../../Shared/GuestFooter/GuestFooter';
import GuestTitlebar from '../../Shared/GuestTitlebar/GuestTitlebar';

const EmptyLayout = (props) => {
    return (
        <>
            <GuestTitlebar></GuestTitlebar>
            {props?.children}
            <GuestFooter></GuestFooter>
        </>
    );
};

export default EmptyLayout;