import React from 'react';
import mine from '../assets/img/mine.jpeg';

function BeginnerBoard(props){

  document.oncontextmenu = function() {
    return false;
}

function genBoard(bombLocations) {
  let space;
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
            return  <td key={indexX} onMouseDown={(e)=>props.clickSquare([indexY,indexX],e)}><img src={square.image}/></td>
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
{genBoard(props.beginnerBoardMain)}
</div>
);
}

export default BeginnerBoard;