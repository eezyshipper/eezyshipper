import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import bannerImage1 from '../../../images/banner1.jpg';
import './TopBanner.css';

const TopBanner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="img-fluid d-block w-100"
                src={bannerImage1}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="font-weight-bold">Get Your <br/>Free International Address</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="img-fluid d-block w-100"
                src={bannerImage1}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className="font-weight-bold">Get Your <br/>Free International Address</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="img-fluid d-block w-100"
                src={bannerImage1}
                alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="font-weight-bold">Get Your <br/>Free International Address</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default TopBanner;