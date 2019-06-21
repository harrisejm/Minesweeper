import React from 'react';

function gameType(){
  let newCurrentPage = window.location.href.split('/');
  const newPage = newCurrentPage[newCurrentPage.length-1];
  let cap = newPage.split("");
  cap[0] = cap[0].toUpperCase();
  return cap.join("");
}

function EnterHighScore(props){
  console.log("name",props.playerName);

  if (!props.openHighscoreModal) {
      return null;
  }
  return(
    <div className="backdropStyle">
      <div className="modalStyle">
      <div className="title">
        <p className="newScore">{props.timer} Seconds</p>
        <p>New High Score ({gameType()})</p>
      </div>
      <p>Enter Name - 12 Characters Max</p>

      <form onSubmit={props.submitScore}>
        <input className="input" type="text" value={props.playerName} onChange={props.enterScore} />
        <button className="submitButton" type="submit">Enter</button>
      </form>
      </div>
    </div>
  );
}

export default EnterHighScore;