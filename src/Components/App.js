import React from 'react';
import '../Styles/App.css';
import Board from './Board'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "hello0",
      beginnerBoardMain: [
       [" "," "," "," "," "," "," "," "," "],
       [" "," "," "," "," "," "," "," "," "],
       [" "," "," "," "," "," "," "," "," "],
       [" "," "," "," "," "," "," "," "," "],
       [" "," "," "," "," "," "," "," "," "],
       [" "," "," "," "," "," "," "," "," "],
       [" "," "," "," "," "," "," "," "," "],
       [" "," "," "," "," "," "," "," "," "],
       [" "," "," "," "," "," "," "," "," "]
      ]
      
    }
    this.small = this.small.bind(this);
    this.bombs = this.bombs.bind(this);
    this.newBoard = this.newBoard.bind(this);
    this.smallBoard = this.smallBoard.bind(this);
  }

  newBoard() {
    let board = [];
    for (let i=0; i<81;i++) {
      board[i] = i;
    }
    return board;
  }

  bombs(arr, mineNumb){
    let tempArr = arr.slice();
    let arr1 = [];
    while (mineNumb > 71) {
       let selection = tempArr[Math.floor(Math.random()*mineNumb)];
       arr1.push(selection);
       let remove = tempArr.indexOf(selection);
       tempArr.splice(remove, 1);
       mineNumb--;
    }
      return arr1
  }

  smallBoard(){
    const bombPosition = this.bombs(this.newBoard(),81);
    let boardArr = [];
    boardArr.length = 81;
    for (let i=0; i<10; i++) {
      boardArr[bombPosition[i]] = bombPosition[i];
    }
    return boardArr;
  }

  small() {
    const bombArr = this.smallBoard();
    let finalBoard = [];
    let row = [];
    let rowCount = 0;
    for (let i=0; i<81; i++) {
      if (bombArr[i]) {
        row.push('X');
      } else {
        row.push(" ");
      }
      rowCount += 1;
      if (rowCount === 9) {
      finalBoard.push(row);
      row = [];
      rowCount = 0;
      }
    }
    console.log(finalBoard);
   // this.setState({beginnerBoardMain: finalBoard});
    return finalBoard;
  }
  componentWillMount(){
   // this.small();
    this.bombNumb(this.small());
  }

  clickSquare(bomb){
    
  }

  bombNumb(board){
    for (let i=0; i<board.length; i++) {
      for (let j=0; j<board[0].length; j++) {
        if (board[i][j] === "X") {
          continue;
        }
        let count = 0;
        if(board[i-1]) {
          if (board[j-1] && board[i-1][j-1] === "X") {
            count+=1;
          }
          if (board[i-1][j] === "X") {
            count+=1;
          }
          if (board[j+1] && board[i-1][j+1] === "X") {
            count+=1;
          }
        }
        ////
        if (board[j-1] && board[i][j-1] === "X") {
          count+=1;
        }
        if (board[j+1] && board[i][j+1] === "X") {
          count+=1;
        }
        ////
        if (board[i+1]) {
          if (board[j-1] && board[i+1][j-1] === "X") {
            count+=1;
          }
          if (board[i+1][j] === "X") {
            count+=1;
          }
          if (board[j+1] && board[i+1][j+1] === "X") {
            count+=1;
          }
        }
        if (count > 0) {
        board[i][j] = count;
        }
      }
    }
    this.setState({beginnerBoardMain: board})
  }



  genBoard(bombLocations) {
    const board = (
      <table>
        <tbody>
          {bombLocations.map((row,index)=>
            <tr key={index}>
              {row.map((square,index)=>
                <td key={index}>{square}</td>
              )}
            </tr>
          )}
  
        </tbody>
      </table>
    );
    this.setState(board);
    return board;
  }



  render(){
    return(
      <div>
      <Board
        hello={this.state.hello}
        small={this.small}
        genBoard={this.genBoard}
        beginnerBoardMain={this.state.beginnerBoardMain}
        clickSquare={this.clickSquare}
      />
      </div>
    );
  }
}

export default App;