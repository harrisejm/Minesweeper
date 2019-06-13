import React from 'react';
import { Link } from 'react-router-dom'
function Header(props){
return(
    <div className="mainNavbar">
      <Link to='/'><button>Home</button></Link>
      <Link to='/small' onClick={()=>props.restartSmallBoard()}><button>Beginner</button></Link>
      <Link to='/intermediate' onClick={()=>props.restartIntermediateBoard()}><button>Intermediate</button></Link>
      <Link to='/expert' onClick={()=>props.restartExpertBoard()}><button>Expert</button></Link>
    </div>
);
}

export default Header;

