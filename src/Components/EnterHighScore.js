import React from 'react';

function EnterHighScore(props){
  console.log("name",props.playerName);
  return(
    <div>
      <form onSubmit={props.submitScore}>
        <label>
          <input type="text" value={props.playerName} onChange={props.enterScore} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default EnterHighScore;