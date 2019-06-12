import React from 'react';
//import "../Styles/board.css";
import BeginnerBoard from './BeginnerBoard.js'

function Board(props){

  return(
    <div>
      <BeginnerBoard 
        genBoard={props.genBoard}
        beginnerBoardMain={props.beginnerBoardMain}
        clickSquare={props.clickSquare}
        restartSmallBoard={props.restartSmallBoard}
        faceIcon={props.faceIcon}
        flagCount={props.flagCount}
        timer={props.timer}
        gameTimer={props.gameTimer}
      />
    </div>
  );
}

export default Board;