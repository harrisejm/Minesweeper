import React from 'react';

function BeginnerBoard(props){

function genBoard(bombLocations) {
  const board = (
    <table>
      <tbody>
        {bombLocations.map((row,indexY)=>{
          let y = -1;
          let x =-1;
          y+=1;       
          return <tr key={indexY}>
            {row.map((square,indexX)=>{
            x+=1;
            return  <td key={indexX} onClick={()=>props.clickSquare([indexY,indexX])}>{square}</td>
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