import React from 'react';

function IntermediateBoard(props){

  document.oncontextmenu = function() {
    return false;
  }
    
return (
  <div>
    <div className="boardOutterIntermediateHeader">
      <div className="boardInnerIntermediateHeader">
        <div className="mineCounterIntermediate">
          <div className="mine">{props.flagCount}</div>
        </div>
        <div className="mainButtonIntermediate">
        <img className="mainButton" onMouseDown={(e)=>props.restartIntermediateBoard()} src={props.faceIcon}/>
        </div>
        <div className="timerIntermediate">
          <div className="mine">{props.timer}</div>
        </div>
      </div>
    </div>
    <div className="boardOutterIntermediate">
      <div className="boardInnerIntermediate">
        {props.genBoard(props.beginnerBoardMain)}
      </div>
    </div>
  </div>
);
}

export default IntermediateBoard;