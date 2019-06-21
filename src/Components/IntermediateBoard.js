import React from 'react';

function ranking(rank) {
  let attachRank;
  if (rank === 1) {
    attachRank = "st";
  } else if (rank === 2) {
    attachRank = "nd";
  } else if (rank === 3) {
    attachRank = "rd";
  } else {
    attachRank = "th";
  }
  return attachRank;
}


function IntermediateBoard(props){

  document.oncontextmenu = function() {
    return false;
  }
    
return (
  <div>
    <div className="gameDifficulty">
      <p>Intermediate</p>
    </div>
  <div className="mainMedium">
    <div className="boardOutterIntermediateHeader">
      <div className="boardInnerIntermediateHeader">
        <div className="mineCounterIntermediate">
          <div className="mine">{props.flagCount}</div>
        </div>
        <div className="mainButtonIntermediate">
        <img className="mainButton" onMouseDown={(e)=>props.restartIntermediateBoard()} src={props.faceIcon} alt="Main Button"/>
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
  <p className="scoreTitle">High Scores</p>
  <div className="highscoreSmall">
    {props.highscores.map((score,index) =>{
      return (<div key={index} className="scoreEntry">
                <span className="rank">{index+1}{ranking(index+1)}</span>
                <span className="name">{score.name}</span><span className="score">{score.time}</span>
              </div>)
    })}
    </div>
  </div>
);
}

export default IntermediateBoard;