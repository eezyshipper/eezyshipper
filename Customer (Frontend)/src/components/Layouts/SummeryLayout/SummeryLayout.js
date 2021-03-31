import React from 'react';
import { Card } from 'react-bootstrap';

const SummeryLayout = ({title,value}) => {
    return (
        <div>
            <Card className="text-primary font-weight-bold shadow m-2 mt-3 p-1 -flex justify-content-center align-items-center" style={{ width: '16rem' }}>
                <Card.Body >
                    <Card.Title className="text-center" style={{fontSize : '40px'}}>{value}</Card.Title>
                    <Card.Text>
                    {title}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SummeryLayout;