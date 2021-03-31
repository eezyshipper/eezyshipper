import React from 'react';
import { Container } from 'react-bootstrap';
import './ExtraPageLayout.css';

const ExtraPagesLayout = ({title, children}) => {
    return (
        <>
        <div className="terms">
            <Container>
                <h1>{title || 'send title as props'}</h1>
            </Container>
        </div>
        {
            children
        }
        </>
    );
};

export default ExtraPagesLayout;