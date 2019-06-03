import React from 'react';
import "../Styles/board.css";
import BeginnerBoard from './BeginnerBoard.js'

function Board(props){

  return(
    <div>
      <BeginnerBoard 
        small={props.small}
        genBoard={props.genBoard}
        beginnerBoardMain={props.beginnerBoardMain}
        clickSquare={props.clickSquare}/>
    </div>
  );
}

export default Board;