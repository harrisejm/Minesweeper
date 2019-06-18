import React from 'react';

function BeginnerBoard(props){
  console.log(props.highscores.beginner);
  document.oncontextmenu = function() {
    return false;
  }
    
return (
  <div>
  <div className="mainSmall">
    <div className="boardOutterSmallHeader">
      <div className="boardInnerSmallHeader">
        <div className="mineCounter">
          <div className="mine">{props.flagCount}</div>
        </div>
        <div className="mainButton">
        <img className="mainButton" onMouseDown={(e)=>props.restartSmallBoard()} src={props.faceIcon} alt="Main Button"/>
        </div>
        <div className="timer">
          <div className="mine">{props.timer}</div>
        </div>
      </div>
    </div>
    <div className="boardOutterSmall">
      <div className="boardInnerSmall">
        {props.genBoard(props.beginnerBoardMain,props)}
      </div>
    </div>
  </div>
  <div className="highscoreSmall">
  
  </div>
  </div>
);
}

export default BeginnerBoard;
