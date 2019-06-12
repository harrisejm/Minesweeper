import React from 'react';
import ReactDOM from 'react-dom';
import BeginnerBoard from '../BeginnerBoard';
import {genBoard} from '../BeginnerBoard';
import {click} from '../BeginnerBoard';
import App from '../App';

const newBoard = new App;

it('renders Board without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BeginnerBoard 
    genBoard={newBoard.genBoard}
    beginnerBoardMain={newBoard.state.beginnerBoardMain}
    clickSquare={newBoard.clickSquare}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

const gameBoard = (
  <table>
    <tbody>
      <tr key={0}>
        <td key={0} onMouseDown={(e)=>newBoard.clickSquare([0,0],e)}><img src='blank.png'/></td>
        <td key={1} onMouseDown={(e)=>newBoard.clickSquare([0,1],e)}><img src='blank.png'/></td>
        <td key={2} onMouseDown={(e)=>newBoard.clickSquare([0,2],e)}><img src='blank.png'/></td>
        <td key={3} onMouseDown={(e)=>newBoard.clickSquare([0,3],e)}><img src='blank.png'/></td>
        <td key={4} onMouseDown={(e)=>newBoard.clickSquare([0,4],e)}><img src='blank.png'/></td>
        <td key={5} onMouseDown={(e)=>newBoard.clickSquare([0,5],e)}><img src='blank.png'/></td>
        <td key={6} onMouseDown={(e)=>newBoard.clickSquare([0,6],e)}><img src='blank.png'/></td>
        <td key={7} onMouseDown={(e)=>newBoard.clickSquare([0,7],e)}><img src='blank.png'/></td>
        <td key={8} onMouseDown={(e)=>newBoard.clickSquare([0,8],e)}><img src='blank.png'/></td>
        <td key={9} onMouseDown={(e)=>newBoard.clickSquare([0,9],e)}><img src='blank.png'/></td>
      </tr>
      <tr key={1}>
        <td key={0} onMouseDown={(e)=>newBoard.clickSquare([1,0],e)}><img src='blank.png'/></td>
        <td key={1} onMouseDown={(e)=>newBoard.clickSquare([1,1],e)}><img src='blank.png'/></td>
        <td key={2} onMouseDown={(e)=>newBoard.clickSquare([1,2],e)}><img src='blank.png'/></td>
        <td key={3} onMouseDown={(e)=>newBoard.clickSquare([1,3],e)}><img src='blank.png'/></td>
        <td key={4} onMouseDown={(e)=>newBoard.clickSquare([1,4],e)}><img src='blank.png'/></td>
        <td key={5} onMouseDown={(e)=>newBoard.clickSquare([1,5],e)}><img src='blank.png'/></td>
        <td key={6} onMouseDown={(e)=>newBoard.clickSquare([1,6],e)}><img src='blank.png'/></td>
        <td key={7} onMouseDown={(e)=>newBoard.clickSquare([1,7],e)}><img src='blank.png'/></td>
        <td key={8} onMouseDown={(e)=>newBoard.clickSquare([1,8],e)}><img src='blank.png'/></td>
        <td key={9} onMouseDown={(e)=>newBoard.clickSquare([1,9],e)}><img src='blank.png'/></td>
      </tr>
      <tr key={2}>
        <td key={2} onMouseDown={(e)=>newBoard.clickSquare([2,0],e)}><img src='blank.png'/></td>
        <td key={2} onMouseDown={(e)=>newBoard.clickSquare([2,1],e)}><img src='blank.png'/></td>
        <td key={2} onMouseDown={(e)=>newBoard.clickSquare([2,2],e)}><img src='blank.png'/></td>
        <td key={2} onMouseDown={(e)=>newBoard.clickSquare([2,3],e)}><img src='blank.png'/></td>
        <td key={2} onMouseDown={(e)=>newBoard.clickSquare([2,4],e)}><img src='blank.png'/></td>
        <td key={2} onMouseDown={(e)=>newBoard.clickSquare([2,5],e)}><img src='blank.png'/></td>
        <td key={2} onMouseDown={(e)=>newBoard.clickSquare([2,6],e)}><img src='blank.png'/></td>
        <td key={2} onMouseDown={(e)=>newBoard.clickSquare([2,7],e)}><img src='blank.png'/></td>
        <td key={2} onMouseDown={(e)=>newBoard.clickSquare([2,8],e)}><img src='blank.png'/></td>
        <td key={2} onMouseDown={(e)=>newBoard.clickSquare([2,9],e)}><img src='blank.png'/></td>
      </tr>
      <tr key={3}>
        <td key={3} onMouseDown={(e)=>newBoard.clickSquare([3,0],e)}><img src='blank.png'/></td>
        <td key={3} onMouseDown={(e)=>newBoard.clickSquare([3,1],e)}><img src='blank.png'/></td>
        <td key={3} onMouseDown={(e)=>newBoard.clickSquare([3,2],e)}><img src='blank.png'/></td>
        <td key={3} onMouseDown={(e)=>newBoard.clickSquare([3,3],e)}><img src='blank.png'/></td>
        <td key={3} onMouseDown={(e)=>newBoard.clickSquare([3,4],e)}><img src='blank.png'/></td>
        <td key={3} onMouseDown={(e)=>newBoard.clickSquare([3,5],e)}><img src='blank.png'/></td>
        <td key={3} onMouseDown={(e)=>newBoard.clickSquare([3,6],e)}><img src='blank.png'/></td>
        <td key={3} onMouseDown={(e)=>newBoard.clickSquare([3,7],e)}><img src='blank.png'/></td>
        <td key={3} onMouseDown={(e)=>newBoard.clickSquare([3,8],e)}><img src='blank.png'/></td>
        <td key={3} onMouseDown={(e)=>newBoard.clickSquare([3,9],e)}><img src='blank.png'/></td>
      </tr>
      <tr key={4}>
        <td key={4} onMouseDown={(e)=>newBoard.clickSquare([4,0],e)}><img src='blank.png'/></td>
        <td key={4} onMouseDown={(e)=>newBoard.clickSquare([4,1],e)}><img src='blank.png'/></td>
        <td key={4} onMouseDown={(e)=>newBoard.clickSquare([4,2],e)}><img src='blank.png'/></td>
        <td key={4} onMouseDown={(e)=>newBoard.clickSquare([4,3],e)}><img src='blank.png'/></td>
        <td key={4} onMouseDown={(e)=>newBoard.clickSquare([4,4],e)}><img src='blank.png'/></td>
        <td key={4} onMouseDown={(e)=>newBoard.clickSquare([4,5],e)}><img src='blank.png'/></td>
        <td key={4} onMouseDown={(e)=>newBoard.clickSquare([4,6],e)}><img src='blank.png'/></td>
        <td key={4} onMouseDown={(e)=>newBoard.clickSquare([4,7],e)}><img src='blank.png'/></td>
        <td key={4} onMouseDown={(e)=>newBoard.clickSquare([4,8],e)}><img src='blank.png'/></td>
        <td key={4} onMouseDown={(e)=>newBoard.clickSquare([4,9],e)}><img src='blank.png'/></td>
      </tr>
      <tr key={5}>
        <td key={5} onMouseDown={(e)=>newBoard.clickSquare([5,0],e)}><img src='blank.png'/></td>
        <td key={5} onMouseDown={(e)=>newBoard.clickSquare([5,1],e)}><img src='blank.png'/></td>
        <td key={5} onMouseDown={(e)=>newBoard.clickSquare([5,2],e)}><img src='blank.png'/></td>
        <td key={5} onMouseDown={(e)=>newBoard.clickSquare([5,3],e)}><img src='blank.png'/></td>
        <td key={5} onMouseDown={(e)=>newBoard.clickSquare([5,4],e)}><img src='blank.png'/></td>
        <td key={5} onMouseDown={(e)=>newBoard.clickSquare([5,5],e)}><img src='blank.png'/></td>
        <td key={5} onMouseDown={(e)=>newBoard.clickSquare([5,6],e)}><img src='blank.png'/></td>
        <td key={5} onMouseDown={(e)=>newBoard.clickSquare([5,7],e)}><img src='blank.png'/></td>
        <td key={5} onMouseDown={(e)=>newBoard.clickSquare([5,8],e)}><img src='blank.png'/></td>
        <td key={5} onMouseDown={(e)=>newBoard.clickSquare([5,9],e)}><img src='blank.png'/></td>
      </tr>
      <tr key={6}>
        <td key={6} onMouseDown={(e)=>newBoard.clickSquare([6,0],e)}><img src='blank.png'/></td>
        <td key={6} onMouseDown={(e)=>newBoard.clickSquare([6,1],e)}><img src='blank.png'/></td>
        <td key={6} onMouseDown={(e)=>newBoard.clickSquare([6,2],e)}><img src='blank.png'/></td>
        <td key={6} onMouseDown={(e)=>newBoard.clickSquare([6,3],e)}><img src='blank.png'/></td>
        <td key={6} onMouseDown={(e)=>newBoard.clickSquare([6,4],e)}><img src='blank.png'/></td>
        <td key={6} onMouseDown={(e)=>newBoard.clickSquare([6,5],e)}><img src='blank.png'/></td>
        <td key={6} onMouseDown={(e)=>newBoard.clickSquare([6,6],e)}><img src='blank.png'/></td>
        <td key={6} onMouseDown={(e)=>newBoard.clickSquare([6,7],e)}><img src='blank.png'/></td>
        <td key={6} onMouseDown={(e)=>newBoard.clickSquare([6,8],e)}><img src='blank.png'/></td>
        <td key={6} onMouseDown={(e)=>newBoard.clickSquare([6,9],e)}><img src='blank.png'/></td>
      </tr>
      <tr key={7}>
        <td key={7} onMouseDown={(e)=>newBoard.clickSquare([7,0],e)}><img src='blank.png'/></td>
        <td key={7} onMouseDown={(e)=>newBoard.clickSquare([7,1],e)}><img src='blank.png'/></td>
        <td key={7} onMouseDown={(e)=>newBoard.clickSquare([7,2],e)}><img src='blank.png'/></td>
        <td key={7} onMouseDown={(e)=>newBoard.clickSquare([7,3],e)}><img src='blank.png'/></td>
        <td key={7} onMouseDown={(e)=>newBoard.clickSquare([7,4],e)}><img src='blank.png'/></td>
        <td key={7} onMouseDown={(e)=>newBoard.clickSquare([7,5],e)}><img src='blank.png'/></td>
        <td key={7} onMouseDown={(e)=>newBoard.clickSquare([7,6],e)}><img src='blank.png'/></td>
        <td key={7} onMouseDown={(e)=>newBoard.clickSquare([7,7],e)}><img src='blank.png'/></td>
        <td key={7} onMouseDown={(e)=>newBoard.clickSquare([7,8],e)}><img src='blank.png'/></td>
        <td key={7} onMouseDown={(e)=>newBoard.clickSquare([7,9],e)}><img src='blank.png'/></td>
      </tr>
      <tr key={8}>
        <td key={8} onMouseDown={(e)=>newBoard.clickSquare([8,0],e)}><img src='blank.png'/></td>
        <td key={8} onMouseDown={(e)=>newBoard.clickSquare([8,1],e)}><img src='blank.png'/></td>
        <td key={8} onMouseDown={(e)=>newBoard.clickSquare([8,2],e)}><img src='blank.png'/></td>
        <td key={8} onMouseDown={(e)=>newBoard.clickSquare([8,3],e)}><img src='blank.png'/></td>
        <td key={8} onMouseDown={(e)=>newBoard.clickSquare([8,4],e)}><img src='blank.png'/></td>
        <td key={8} onMouseDown={(e)=>newBoard.clickSquare([8,5],e)}><img src='blank.png'/></td>
        <td key={8} onMouseDown={(e)=>newBoard.clickSquare([8,6],e)}><img src='blank.png'/></td>
        <td key={8} onMouseDown={(e)=>newBoard.clickSquare([8,7],e)}><img src='blank.png'/></td>
        <td key={8} onMouseDown={(e)=>newBoard.clickSquare([8,8],e)}><img src='blank.png'/></td>
        <td key={8} onMouseDown={(e)=>newBoard.clickSquare([8,9],e)}><img src='blank.png'/></td>
      </tr>
      <tr key={9}>
        <td key={9} onMouseDown={(e)=>newBoard.clickSquare([9,0],e)}><img src='blank.png'/></td>
        <td key={9} onMouseDown={(e)=>newBoard.clickSquare([9,1],e)}><img src='blank.png'/></td>
        <td key={9} onMouseDown={(e)=>newBoard.clickSquare([9,2],e)}><img src='blank.png'/></td>
        <td key={9} onMouseDown={(e)=>newBoard.clickSquare([9,3],e)}><img src='blank.png'/></td>
        <td key={9} onMouseDown={(e)=>newBoard.clickSquare([9,4],e)}><img src='blank.png'/></td>
        <td key={9} onMouseDown={(e)=>newBoard.clickSquare([9,5],e)}><img src='blank.png'/></td>
        <td key={9} onMouseDown={(e)=>newBoard.clickSquare([9,6],e)}><img src='blank.png'/></td>
        <td key={9} onMouseDown={(e)=>newBoard.clickSquare([9,7],e)}><img src='blank.png'/></td>
        <td key={9} onMouseDown={(e)=>newBoard.clickSquare([9,8],e)}><img src='blank.png'/></td>
        <td key={9} onMouseDown={(e)=>newBoard.clickSquare([9,9],e)}><img src='blank.png'/></td>
      </tr>
    </tbody>
  </table>
);

let mockSmallBoard = [ [ { space: ' ', image: 'blank.png' },
{ space: 'X', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: 'X', image: 'blank.png' } ],
[ { space: ' ', image: 'blank.png' }, 
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' } ],
[ { space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' } ],
[ { space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' } ],
[ { space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' } ],
[ { space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' } ],
[ { space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' } ],
[ { space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' } ],
[ { space: ' ', image: 'blank.png' },
{ space: 'X', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: ' ', image: 'blank.png' },
{ space: 'X', image: 'blank.png' } ] ];


it("Generates the board",()=>{
//  expect(genBoard(mockSmallBoard)).toEqual(gameBoard);
});