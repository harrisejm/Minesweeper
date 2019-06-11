import React from 'react';
import Board from './Board'
import mine from '../assets/img/mine.jpeg';
import one from '../assets/img/one.png';
import two from '../assets/img/two.png';
import three from '../assets/img/three.png';
import four from '../assets/img/four.png';
import five from '../assets/img/five.png';
import six from '../assets/img/six.png';
import seven from '../assets/img/seven.png';
import eight from '../assets/img/eight.png';
import blank from '../assets/img/blank.png';
import flag from '../assets/img/flag.png';
import question from '../assets/img/question.png';
import dead from '../assets/img/dead.png';
import shock from '../assets/img/shock.png';
import won from '../assets/img/won.png';
import main from '../assets/img/main.png';
import mineRed from '../assets/img/mineRed.jpg';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beginnerBoardMain: [],
      small: 64,
      medium: 256,
      large: 576,
      flagCount: 0,
      faceIcon: main,
      gameOver: false,
      restart: false,
      timer: 0,
      firstMove: true
    }
    this.createBoard = this.createBoard.bind(this);
    this.bombs = this.bombs.bind(this);
    this.newBoard = this.newBoard.bind(this);
    this.boardWithBombs = this.boardWithBombs.bind(this);
    this.clickSquare = this.clickSquare.bind(this);
    this.restartSmallBoard = this.restartSmallBoard.bind(this);
    this.pressMainButton = this.pressMainButton.bind(this);
    this.gameTimer = this.gameTimer.bind(this);
  }

  newBoard(size) {
    let board = [];
    for (let i=0; i<size;i++) {
      board[i] = i;
    }
    return board;
  }

  randomNumber(mineNumb){
    return Math.floor(Math.random()*mineNumb);
  }
  
  ///array of bomb locations
  bombs(newBoard,mineNumb,randomNumber,minimumBombCount){
    let tempNewBoard = newBoard.slice();
    let arrayOfBombLocations = [];
    while (mineNumb > minimumBombCount) {
       let selection = tempNewBoard[randomNumber(mineNumb)];
       arrayOfBombLocations.push(selection);
       let remove = tempNewBoard.indexOf(selection);
       tempNewBoard.splice(remove, 1);
       mineNumb--;
    }
      return arrayOfBombLocations
  }

  boardWithBombs(bombPosition,size,numberOfBombs){
    let boardArr = [];
    boardArr.length = size;
    for (let i=0; i<numberOfBombs; i++) {
      boardArr[bombPosition[i]] = bombPosition[i];
    }
    return boardArr;
  }

  createBoard(bombArr,size) {
    let finalBoard = [];
    let row = [];
    let rowCount = 0;
    for (let i=0; i<size; i++) {
      if (bombArr[i]) {
        row.push({
          space: "X",
          image: blank
        });
      } else {
        row.push({
          space: " ",
          image: blank
        });
      }
      rowCount += 1;
      if (rowCount === 8) {
      finalBoard.push(row);
      row = [];
      rowCount = 0;
      }
    }
    //console.log(finalBoard);
    return finalBoard;
  }
  componentWillMount(){
    this.setState({beginnerBoardMain: this.bombNumb(this.createBoard(this.boardWithBombs(this.bombs(this.newBoard(this.state.small),this.state.small,this.randomNumber,54),this.state.small,10),this.state.small),this.topRowBombs,this.middleRowBombs,this.bottomRowBombs)});
  }

  pressMainButton(){
    
  }
  


  gameTimer(){
   // let time = this.state.timer;
    let numb = 1;
    let t = setInterval(()=>{
      if (this.state.gameOver === true || this.state.restart === true) {
        clearInterval(t);
        return;
      }
      this.setState({timer: numb}); 
      numb += 1;
      console.log(numb);
    }, 1000);
    
  }




  restartSmallBoard(){
    this.setState({beginnerBoardMain: this.bombNumb(this.createBoard(this.boardWithBombs(this.bombs(this.newBoard(this.state.small),this.state.small,this.randomNumber,54),this.state.small,10),this.state.small),this.topRowBombs,this.middleRowBombs,this.bottomRowBombs), faceIcon:main,firstMove:true, gameOver:false,restart:true,flagCount:0,timer:0});
  }

  isGameOver(){
    let board = this.state.beginnerBoardMain;
    for (let i=0; i < board.length; i++) {
      for (let j=0; j < board[0].length; j++) {
        if (board[i][j].space !== "X" && board[i][j].image === blank) {
          return;
        }
      }
    }
    this.setState({faceIcon:won,gameOver:true});
  }

  clickSquare(bomb,e){
    let beginnerBoardMain = this.state.beginnerBoardMain;
    let flagCount = this.state.flagCount;
    let arr =[one,two,three,four,five,six,seven,eight];

    if (this.state.firstMove === true) {
      this.setState({firstMove: false,restart:false})
      this.gameTimer();
   //   setInterval(this.gameTimer, 1000);
    }

    if (this.state.gameOver === true) {
      return;
    }

    if (e.button === 2) {
      if (beginnerBoardMain[bomb[0]][bomb[1]].image === blank) {
        beginnerBoardMain[bomb[0]][bomb[1]].image = flag;
        this.setState({beginnerBoardMain: beginnerBoardMain,flagCount:flagCount+1});
        return;
      } else if (beginnerBoardMain[bomb[0]][bomb[1]].image === flag) {
        beginnerBoardMain[bomb[0]][bomb[1]].image = question;
        this.setState({beginnerBoardMain: beginnerBoardMain,flagCount:flagCount-1});
        return;
      } else if (beginnerBoardMain[bomb[0]][bomb[1]].image === question) {
        beginnerBoardMain[bomb[0]][bomb[1]].image = blank;
        this.setState({beginnerBoardMain: beginnerBoardMain});
        return;
      }
    }

    if (beginnerBoardMain[bomb[0]][bomb[1]].image === flag || beginnerBoardMain[bomb[0]][bomb[1]].image === question) {
      return;
    }

    if (beginnerBoardMain[bomb[0]][bomb[1]].space === 'X') {
      beginnerBoardMain[bomb[0]][bomb[1]].image = mineRed;
    //  clearInterval(this.gameTimer);
      this.setState({faceIcon: dead,gameOver:true});
    } else if (beginnerBoardMain[bomb[0]][bomb[1]].space > 0) {
      beginnerBoardMain[bomb[0]][bomb[1]].image = arr[beginnerBoardMain[bomb[0]][bomb[1]].space-1];
    } else {
      beginnerBoardMain[bomb[0]][bomb[1]].image = null;
      this.clickOnEmpty(bomb,beginnerBoardMain);
    }
    this.setState({beginnerBoardMain: beginnerBoardMain});
    this.isGameOver();
  }


  clickOnEmpty(position, board){
    let arr =[one,two,three,four,five,six,seven,eight];
    let spacesToSearchArray = [position];
    console.log(spacesToSearchArray.length);
    let spacesToSearchDictionary = {};

    while (spacesToSearchArray.length > 0){
      let pos = spacesToSearchArray[0];
      if (board[pos[0]-1]) {
        if (board[pos[0]-1][pos[1]-1] && board[pos[0]-1][pos[1]-1].space !== " " && board[pos[0]-1][pos[1]-1].space !== "X") {
          board[pos[0]-1][pos[1]-1].image = arr[board[pos[0]-1][pos[1]-1].space-1];
        } else if (board[pos[0]-1][pos[1]-1] && board[pos[0]-1][pos[1]-1].space === " ") {
          board[pos[0]-1][pos[1]-1].image = null;
          if (!spacesToSearchDictionary[[pos[0]-1,pos[1]-1]]) {
            spacesToSearchArray.push([pos[0]-1,pos[1]-1]);
            spacesToSearchDictionary[[pos[0]-1,pos[1]-1]] = true;
          }
        }
        if (board[pos[0]-1][pos[1]] && board[pos[0]-1][pos[1]].space !== " " && board[pos[0]-1][pos[1]].space !== "X") {
          board[pos[0]-1][pos[1]].image = arr[board[pos[0]-1][pos[1]].space-1];
        } else if (board[pos[0]-1][pos[1]].space === " ") {
          board[pos[0]-1][pos[1]].image = null;
          if (!spacesToSearchDictionary[[pos[0]-1,pos[1]]]) {
            spacesToSearchArray.push([pos[0]-1,pos[1]]);
            spacesToSearchDictionary[[pos[0]-1,pos[1]]] = true;
          }
        }
        if (board[pos[0]-1][pos[1]+1] && board[pos[0]-1][pos[1]+1].space !== " " && board[pos[0]-1][pos[1]+1].space !== "X") {
          board[pos[0]-1][pos[1]+1].image = arr[board[pos[0]-1][pos[1]+1].space-1];
        } else if (board[pos[0]-1][pos[1]+1] && board[pos[0]-1][pos[1]+1].space === " ") {
          board[pos[0]-1][pos[1]+1].image = null;
          if (!spacesToSearchDictionary[[pos[0]-1,pos[1]+1]]) {
            spacesToSearchArray.push([pos[0]-1,pos[1]+1]);
            spacesToSearchDictionary[[pos[0]-1,pos[1]+1]] = true;
          }
        }
      }
      //mid row
      if (board[pos[0]][pos[1]-1] && board[pos[0]][pos[1]-1].space !== " " && board[pos[0]][pos[1]-1].space !== "X") {
        board[pos[0]][pos[1]-1].image = arr[board[pos[0]][pos[1]-1].space-1];
      } else if (board[pos[0]][pos[1]-1] && board[pos[0]][pos[1]-1].space === " ") {
        board[pos[0]][pos[1]-1].image = null;
        if (!spacesToSearchDictionary[[pos[0],pos[1]-1]]){
          spacesToSearchArray.push([pos[0],pos[1]-1]);
          spacesToSearchDictionary[[pos[0],pos[1]-1]] = true;
        }
      }
      if (board[pos[0]][pos[1]+1] && board[pos[0]][pos[1]+1].space !== " " && board[pos[0]][pos[1]+1].space !== "X") {
        board[pos[0]][pos[1]+1].image = arr[board[pos[0]][pos[1]+1].space-1];
      } else if (board[pos[0]][pos[1]+1] && board[pos[0]][pos[1]+1].space === " ") {
        board[pos[0]][pos[1]+1].image = null;
        if (!spacesToSearchDictionary[[pos[0],pos[1]+1]]){
          spacesToSearchArray.push([pos[0],pos[1]+1]);
          spacesToSearchDictionary[[pos[0],pos[1]+1]] = true;
        }
      }
      //bottom row
      if (board[pos[0]+1]) {
        if (board[pos[0]+1][pos[1]-1] && board[pos[0]+1][pos[1]-1].space !== " " && board[pos[0]+1][pos[1]-1].space !== "X") {
          board[pos[0]+1][pos[1]-1].image = arr[board[pos[0]+1][pos[1]-1].space-1];
        } else if (board[pos[0]+1][pos[1]-1] && board[pos[0]+1][pos[1]-1].space === " ") {
          board[pos[0]+1][pos[1]-1].image = null;
          if (!spacesToSearchDictionary[[pos[0]+1,pos[1]-1]]) {
            spacesToSearchArray.push([pos[0]+1,pos[1]-1]);
            spacesToSearchDictionary[[pos[0]+1,pos[1]-1]] = true;
          }
        }
        if (board[pos[0]+1][pos[1]] && board[pos[0]+1][pos[1]].space !== " " && board[pos[0]+1][pos[1]].space !== "X") {
          board[pos[0]+1][pos[1]].image = arr[board[pos[0]+1][pos[1]].space-1];
        } else if (board[pos[0]+1][pos[1]].space === " ") {
          board[pos[0]+1][pos[1]].image = null;
          if (!spacesToSearchDictionary[[pos[0]+1,pos[1]]]) {
            spacesToSearchArray.push([pos[0]+1,pos[1]]);
            spacesToSearchDictionary[[pos[0]+1,pos[1]]] = true;
          }
         
        }
        if (board[pos[0]+1][pos[1]+1] && board[pos[0]+1][pos[1]+1].space !== " " && board[pos[0]+1][pos[1]+1].space !== "X") {
          board[pos[0]+1][pos[1]+1].image = arr[board[pos[0]+1][pos[1]+1].space-1];
        } else if (board[pos[0]+1][pos[1]+1] && board[pos[0]+1][pos[1]+1].space === " ") {
          board[pos[0]+1][pos[1]+1].image = null;
          if (!spacesToSearchDictionary[[pos[0]+1][pos[1]+1]]) {
            spacesToSearchArray.push([pos[0]+1,pos[1]+1]);
            spacesToSearchDictionary[[pos[0]+1,pos[1]+1]] = true;
          }
        }
      }

      spacesToSearchArray.shift();
    }

    this.setState({beginnerBoardMain: board, searchSqaures: spacesToSearchArray},console.log(spacesToSearchArray));
  }

  topRowBombs(board,i,j){
    let count = 0;
    if (board[j-1] && board[i-1][j-1].space === "X") {
      count+=1;
    }
    if (board[i-1][j].space === "X") {
      count+=1;
    }
    if (board[j+1] && board[i-1][j+1].space === "X") {
      count+=1;
    }
    return count;
  }
  middleRowBombs(board,i,j){
    let count = 0;
    if (board[j-1] && board[i][j-1].space === "X") {
      count+=1;
    }
    if (board[j+1] && board[i][j+1].space === "X") {
      count+=1;
    }
    return count;
  }
  bottomRowBombs(board,i,j){
    let count = 0;
    if (board[j-1] && board[i+1][j-1].space === "X") {
      count+=1;
    }
    if (board[i+1][j].space === "X") {
      count+=1;
    }
    if (board[j+1] && board[i+1][j+1].space === "X") {
      count+=1;
    }
    return count;
  }

  bombNumb(board,topRowBombs,middleRowBombs,bottomRowBombs){
    for (let i=0; i<board.length; i++) {
      for (let j=0; j<board[0].length; j++) {
        if (board[i][j].space === "X") {
          continue;
        }
        let count = 0;
        if(board[i-1]) {
          count += topRowBombs(board,i,j);
        }
        ////
        count += middleRowBombs(board,i,j);
        ////
        if (board[i+1]) {
          count += bottomRowBombs(board,i,j);
        }
        if (count > 0) {
        board[i][j].space = count;
        }
      }
    }
    return board;
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
        createBoard={this.createBoard}
        genBoard={this.genBoard}
        beginnerBoardMain={this.state.beginnerBoardMain}
        clickSquare={this.clickSquare}
        restartSmallBoard={this.restartSmallBoard}
        faceIcon={this.state.faceIcon}
        flagCount={this.state.flagCount}
        timer={this.state.timer}
        gameTimer={this.gameTimer}
      />
      <img src={dead}/>
      <img src={shock}/>
      <img src={won}/>
      <img src={main}/>
      </div>
    );
  }
}

export default App;