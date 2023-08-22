import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/keepnoteslogo.png';

const Header = ()=>{
  return ( 
  <>
    <div className="header">
      <img src={logo} alt="logo" height='80'/>
      <h1>Keep Note</h1>
    </div>
  </>
  );

};

export default Header;
