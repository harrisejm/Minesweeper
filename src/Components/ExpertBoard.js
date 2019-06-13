import React from 'react';

function ExpertBoard(props){

  document.oncontextmenu = function() {
    return false;
  }
    
return (
  <div className='mainLarge'>
    <div className="boardOutterExpertHeader">
      <div className="boardInnerExpertHeader">
        <div className="mineCounterExpert">
          <div className="mine">{props.flagCount}</div>
        </div>
        <div className="mainButtonExpert">
        <img className="mainButton" onMouseDown={(e)=>props.restartExpertBoard()} src={props.faceIcon}/>
        </div>
        <div className="timerExpert">
          <div className="mine">{props.timer}</div>
        </div>
      </div>
    </div>
    <div className="boardOutterExpert">
      <div className="boardInnerExpert">
        {props.genBoard(props.beginnerBoardMain)}
      </div>
    </div>
  </div>
);
}

export default ExpertBoard;