import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import mainLogo from '../../../images/logo.png';
import './GuestTitlebar.css';

const GuestTitlebar = () => {
    const history = useHistory();
    
    return (
      <>
      <header>
        <div className="top-bar">
          <img className="logo-img" src={mainLogo} alt="Main Logo" />
          <div>
            <button className="btn titlebar-btn mr-3" onClick={() => history.push(`/dashboard/summery`)}>LOGIN</button>
            <button className="btn titlebar-btn"onClick={() => history.push(`/register`)}>REGISTER</button>
          </div>
        </div>
      </header>
      </>
    );
};

export default GuestTitlebar;