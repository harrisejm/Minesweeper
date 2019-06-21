import React from 'react';
import { Link, HashRouter as Router } from 'react-router-dom'

function Header(props){
return(
  <div>
    <h1 className="mainTitle">Minesweeper</h1>
    <div className="mainNavbar">
      <Router>
        <div>
          <Link to='/'><button className="mainButton">Home</button></Link>
          <Link to='/beginner' onClick={()=>props.restartSmallBoard()}><button className="mainButton">Beginner</button></Link>
          <Link to='/intermediate' onClick={()=>props.restartIntermediateBoard()}><button className="mainButton">Intermediate</button></Link>
          <Link to='/expert' onClick={()=>props.restartExpertBoard()}><button className="mainButton">Expert</button></Link>
        </div>
      </Router>
    </div>
  </div>
);
}

export default Header;

