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

function ExpertBoard(props){

  document.oncontextmenu = function() {
    return false;
  }
    
return (
  <div>
     <div className="gameDifficulty">
      <p>Expert</p>
    </div>
  <div className='mainLarge'>
    <div className="boardOutterExpertHeader">
      <div className="boardInnerExpertHeader">
        <div className="mineCounterExpert">
          <div className="mine">{props.flagCount}</div>
        </div>
        <div className="mainButtonExpert">
        <img className="mainButton" onMouseDown={(e)=>props.restartExpertBoard()} src={props.faceIcon} alt="Main Button"/>
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

export default ExpertBoard;