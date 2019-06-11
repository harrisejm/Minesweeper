import React from 'react';
import main from '../assets/img/main.png';

function BeginnerBoard(props){

  document.oncontextmenu = function() {
    return false;
  }

function genBoard(bombLocations) {
  const board = (
    <table>
      <tbody>
        {bombLocations.map((row,indexY)=>{
          let y = -1;
          let x = -1;
          y+=1;       
          return <tr key={indexY}>
            {row.map((square,indexX)=>{
            x+=1;
            let displayImage;
            if (square.image) {
              displayImage = <img className='square' src={square.image}/>
            }
            return <td key={indexX} onMouseDown={(e)=>props.clickSquare([indexY,indexX],e)}>{displayImage}</td>
            })}
          </tr>
        })}

      </tbody>
    </table>
  );

  return board;
}
    
return (
  <div>
    <div className="boardOutterHeader">
      <div className="boardInnerHeader">
        <div className="mineCounter">
          <div className="mine">{props.flagCount}</div>
        </div>
        <div className="mainButton">
        <img className="mainButton" onMouseDown={(e)=>props.restartSmallBoard()} src={props.faceIcon}/>
        </div>
        <div className="timer">
          <div className="mine">{props.timer}</div>
        </div>
      </div>
    </div>
    <div className="boardOutterSmall">
      <div className="boardInnerSmall">
        {genBoard(props.beginnerBoardMain)}
      </div>
    </div>
  </div>
);
}

export default BeginnerBoard;