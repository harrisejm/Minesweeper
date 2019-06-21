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

function BeginnerBoard(props){
  console.log("BEGINNER",props.highscores);
  document.oncontextmenu = function() {
    return false;
  }


    
return (
  <div>
    <div className="gameDifficulty">
      <p>Beginner</p>
    </div>
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
  <p className="scoreTitle">High Scores</p>
  <p className="scoreType">Beginner</p>
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

export default BeginnerBoard;
