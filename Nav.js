import React from 'react';
import{Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div style={{paddingLeft:"1100px",backgroundColor:"grey"
    ,height:"50px"}}>
      <h1><center> MY Book</center> </h1>
      
      <Link to={'/Home'} >Home</Link>&nbsp;&nbsp;
      <Link to={'/Test'}>Sign In</Link>&nbsp;&nbsp;

      <Link to={'/New'}>About</Link>

    </div>
  )
};

export default Nav;