import React from 'react';
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
import won from '../assets/img/won.png';
import main from '../assets/img/main.png';
import mineRed from '../assets/img/mineRed.jpg';

//import mine from '../assets/img/mine.jpeg';
//import shock from '../assets/img/shock.png';

import { Switch, Route } from 'react-router-dom';

import BeginnerBoard from './BeginnerBoard';
import IntermediateBoard from './IntermediateBoard';
import ExpertBoard from './ExpertBoard';
import Home from './Home';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beginnerBoardMain: [],
      intermediateBoard: [],
      small: 64,
      medium: 256,
      large: 480,//576, 
      flagCount: 0,
      faceIcon: main,
      gameOver: false,
      restart: false,
      timer: 0,
      firstMove: true,
      arr: [one,two,three,four,five,six,seven,eight]
    }
    this.createBoard = this.createBoard.bind(this);
    this.bombs = this.bombs.bind(this);
    this.newBoard = this.newBoard.bind(this);
    this.boardWithBombs = this.boardWithBombs.bind(this);
    this.clickSquare = this.clickSquare.bind(this);
    this.restartSmallBoard = this.restartSmallBoard.bind(this);
    this.restartIntermediateBoard = this.restartIntermediateBoard.bind(this);
    this.restartExpertBoard = this.restartExpertBoard.bind(this);
    this.gameTimer = this.gameTimer.bind(this);
    this.genBoard = this.genBoard.bind(this);
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

  createBoard(bombArr,size,rowLength) {
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
      if (rowCount === rowLength) {
      finalBoard.push(row);
      row = [];
      rowCount = 0;
      }
    }
    return finalBoard;
  }

  componentWillMount(props){
    let currentPage = window.location.href.split('/');
    let page = currentPage[currentPage.length-1];
    if (page === "beginner") {
      this.restartSmallBoard();
    } else if (page === 'intermediate') {
      this.restartIntermediateBoard();
    } else if (page === 'expert'){
      this.restartExpertBoard();
    }
  }
  
  gameTimer(){
    let numb = 1;
    let t = setInterval(()=>{
      if (this.state.gameOver === true || this.state.restart === true) {
        clearInterval(t);
        return;
      }
      this.setState({timer: numb}); 
      numb += 1;
    }, 1000); 
  }

  restartSmallBoard(){
    this.setState({beginnerBoardMain: this.bombNumb(this.createBoard(this.boardWithBombs(this.bombs(this.newBoard(this.state.small),this.state.small,this.randomNumber,54),this.state.small,10),this.state.small,8),this.topRowBombs,this.middleRowBombs,this.bottomRowBombs), faceIcon:main,firstMove:true, gameOver:false,restart:true,flagCount:0,timer:0});
  }
  restartIntermediateBoard(){
    this.setState({beginnerBoardMain: this.bombNumb(this.createBoard(this.boardWithBombs(this.bombs(this.newBoard(this.state.medium),this.state.medium,this.randomNumber,216),this.state.medium,40),this.state.medium,16),this.topRowBombs,this.middleRowBombs,this.bottomRowBombs), faceIcon:main,firstMove:true, gameOver:false,restart:true,flagCount:0,timer:0});
  }
  restartExpertBoard(){
    this.setState({beginnerBoardMain: this.bombNumb(this.createBoard(this.boardWithBombs(this.bombs(this.newBoard(this.state.large),this.state.large,this.randomNumber,381),this.state.large,99),this.state.large,30),this.topRowBombs,this.middleRowBombs,this.bottomRowBombs), faceIcon:main,firstMove:true, gameOver:false,restart:true,flagCount:0,timer:0});
  }
  //24x24 477

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
    rightClick(){  
  }

  clickSquare(bomb,e){
    let beginnerBoardMain = this.state.beginnerBoardMain;
    let flagCount = this.state.flagCount;
    let arr =[one,two,three,four,five,six,seven,eight];

    if (this.state.firstMove === true) {
      this.setState({firstMove: false,restart:false})
      this.gameTimer();
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

  checkTopRightForNumber(b,pos,arr){
    let board = b.map(x => Object.assign({},x));
      if (board[pos[0]-1][pos[1]-1] && board[pos[0]-1][pos[1]-1].space !== " " && board[pos[0]-1][pos[1]-1].space !== "X") {
       board[pos[0]-1][pos[1]-1].image = arr[board[pos[0]-1][pos[1]-1].space-1];
      //arr[board[pos[0]-1][pos[1]-1].space-1]; //returns number image
      }
      return board;
  }
  checkTopForNumber(board,pos,arr){
    if (board[pos[0]-1][pos[1]] && board[pos[0]-1][pos[1]].space !== " " && board[pos[0]-1][pos[1]].space !== "X") {
    //  board[pos[0]-1][pos[1]].image = arr[board[pos[0]-1][pos[1]].space-1];
      return arr[board[pos[0]-1][pos[1]].space-1];
    } 
  }
  checkTopLeftForNumber(board,pos,arr){
    if (board[pos[0]-1][pos[1]+1] && board[pos[0]-1][pos[1]+1].space !== " " && board[pos[0]-1][pos[1]+1].space !== "X") {
      board[pos[0]-1][pos[1]+1].image = arr[board[pos[0]-1][pos[1]+1].space-1];
       return arr[board[pos[0]-1][pos[1]+1].space-1];
    }
  }


  clickOnEmpty(position, board){
    let arr = [one,two,three,four,five,six,seven,eight]; //images
    let spacesToSearchArray = [position];
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

    this.setState({beginnerBoardMain: board, searchSqaures: spacesToSearchArray});
  }

  topRowBombs(board,i,j){
    let count = 0;
    if (board[i][j-1] && board[i-1][j-1].space === "X") {
      count+=1;
    }
    if (board[i-1][j].space === "X") {
      count+=1;
    }
    if (board[i][j+1] && board[i-1][j+1].space === "X") {
      count+=1;
    }
    return count;
  }
  middleRowBombs(board,i,j){
    let count = 0;
    if (board[i][j-1] && board[i][j-1].space === "X") {
      count+=1;
    }
    if (board[i][j+1] && board[i][j+1].space === "X") {
      count+=1;
    }
    return count;
  }
  bottomRowBombs(board,i,j){
    let count = 0;
    if (board[i][j-1] && board[i+1][j-1].space === "X") {
      count+=1;
    }
    if (board[i+1][j].space === "X") {
      count+=1;
    }
    if (board[i][j+1] && board[i+1][j+1].space === "X") {
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
          {bombLocations.map((row,indexY)=>{  
            return <tr key={indexY}>
              {row.map((square,indexX)=>{
              let displayImage;
              if (square.image) {
                displayImage = <img className='square' src={square.image} alt="square"/>
              }
              return <td key={indexX} onMouseDown={(e)=>this.clickSquare([indexY,indexX],e)}>{displayImage}</td>
              })}
            </tr>
          })}
        </tbody>
      </table>
    );
    return board;
  }

  render(){
    return(
      <div>
      <Header
        restartSmallBoard={this.restartSmallBoard}
        restartIntermediateBoard={this.restartIntermediateBoard}
        restartExpertBoard={this.restartExpertBoard}/>
      <Switch>
        <Route exact path='/' render={()=><Home/>}/>
        <Route exact path='/beginner' render={()=><BeginnerBoard
        genBoard={this.genBoard}
        beginnerBoardMain={this.state.beginnerBoardMain}
        restartSmallBoard={this.restartSmallBoard}
        faceIcon={this.state.faceIcon}
        flagCount={this.state.flagCount}
        timer={this.state.timer}
        gameTimer={this.gameTimer}
      />}/>
        <Route exact path='/intermediate' render={()=><IntermediateBoard
        // createBoard={this.createBoard}
        genBoard={this.genBoard}
        beginnerBoardMain={this.state.beginnerBoardMain}
        // clickSquare={this.clickSquare}
        restartIntermediateBoard={this.restartIntermediateBoard}
        faceIcon={this.state.faceIcon}
        flagCount={this.state.flagCount}
        timer={this.state.timer}
        gameTimer={this.gameTimer}
        />}/>
        <Route exact path='/expert' render={()=><ExpertBoard
        genBoard={this.genBoard}
        beginnerBoardMain={this.state.beginnerBoardMain}
        restartExpertBoard={this.restartExpertBoard}
        faceIcon={this.state.faceIcon}
        flagCount={this.state.flagCount}
        timer={this.state.timer}
        gameTimer={this.gameTimer}
        />}/>
      </Switch>
      </div>
    );
  }
}

export default App;