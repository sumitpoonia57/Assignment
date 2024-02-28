import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="website">
        <span className="icon" style={{ backgroundColor: 'white', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid red' }}>
        <FontAwesomeIcon icon={faPhone} style={{ color: 'red' }} />
        </span>
        <span style={{margin:'5px', color: '#ffffff', textDecoration: 'none', verticalAlign: 'sub' }}>Toll free: 1800 200 1234</span>
      </div>
      <div className = "website" >
        <span style={{ backgroundColor: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid red' }}>
          <FontAwesomeIcon icon={faFacebook} style={{  width:'20px',height:'20px',backgroundColor:'red' ,color: 'white' }} />
        </span>
        <a href="https://www.facebook.com/cripumps" target="_blank" rel="noopener noreferrer" style = {{margin: '5px'}}>www.facebook/cripumps</a>
      </div>
      <div className="website">
        <span className="icon" style={{ backgroundColor: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid red' }}>
          <img src="globe.png" alt="Website" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
        </span>
        <a href="https://www.crigroups.com" target="_blank" rel="noopener noreferrer" style={{ margin: '5px' ,color: '#ffffff', textDecoration: 'none', verticalAlign: 'sub' }}>www.crigroups.com</a>
      </div>
    </footer>
  );
}

export default Footer;
