import React from 'react';
import { connect } from 'react-redux';
import './MainContentLayout.css';

const MainContentLayout = ({titleSize, customShadow, children, contentChanger, title}) => {
    return (
        <div className={`mainContent ${customShadow ? 'customShadow' : ''}`}>
            { title && 
            <>
            {
                titleSize === '6' ? 
                <h6 className="text-center">{title || contentChanger}</h6>
                :
                <h4>{title || contentChanger}</h4>
            }
                <hr/>
            </>}
            {children}
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        contentChanger: state.contentChanger
    }
}

export default connect(mapStateToProps)(MainContentLayout);