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
import background from '../assets/img/background.jpg';

import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';

//import mine from '../assets/img/mine.jpeg';
//import shock from '../assets/img/shock.png';

import { Switch, Route, HashRouter as Router } from 'react-router-dom';

import BeginnerBoard from './BeginnerBoard';
import IntermediateBoard from './IntermediateBoard';
import ExpertBoard from './ExpertBoard';
import Home from './Home';
import Header from './Header';
import EnterHighScore from './EnterHighScore'

let currentPage = window.location.href.split('/');
let page = currentPage[currentPage.length-1];

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
      playerName: "",
      arr: [one,two,three,four,five,six,seven,eight],
      openHighscoreModal: false,
      highscores: {
        beginner: [],
        intermediate: [],
        expert: []
      }
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
    this.submitScore = this.submitScore.bind(this);
    this.enterScore = this.enterScore.bind(this);
    this.checkForNewHighscore = this.checkForNewHighscore.bind(this);
    this.showHighscoreModal = this.showHighscoreModal.bind(this);
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

  sortHighScores(scores) {
    const highscores = {
      beginner: this.sortScores(this.creatArrayOfScores(scores.beginner)),
      intermediate: this.sortScores(this.creatArrayOfScores(scores.intermediate)),
      expert: this.sortScores(this.creatArrayOfScores(scores.expert))
    }
    return highscores;
  }
  creatArrayOfScores(scores){
    let scoresArray = [];
    for (let score in scores) {
      scoresArray.push(scores[score]);
    }
    return scoresArray;
  }
  sortScores(scores) {
    scores.sort((a,b) => 
      a.time - b.time
    );
    return scores;
  }

  addHighScoresFromFirebase(){
    let dbClick = firebase.database().ref('highscores');
    dbClick.on('value',(snapshot)=> {
      let test = snapshot.val();
      this.setState({highscores: this.sortHighScores(test)});
      console.log(this.state.highscores);
    });
  }
  addHighscore(){
    let currentPage = window.location.href.split('/'); 
    let page = currentPage[currentPage.length-1];
    const allScores = Object.assign({},this.state.highscores);
    let scoreArray;
    let scores;
    if (page === "beginner") {
      scores = firebase.database().ref('highscores/beginner');
      scoreArray = allScores.beginner
    } else if (page === "intermediate") {
      scores = firebase.database().ref('highscores/intermediate');
      scoreArray = allScores.intermediate;
    } else if (page === 'expert') {
      scores = firebase.database().ref('highscores/expert');
      scoreArray = allScores.expert;
    }
    scores.set({
      one: scoreArray[0],
      two: scoreArray[1],
      three: scoreArray[2],
      four: scoreArray[3],
      five: scoreArray[4]
    });
  }

  componentWillMount(props){  
    
    this.addHighScoresFromFirebase();
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

  isGameOver(){
    let board = this.state.beginnerBoardMain;
    for (let i=0; i < board.length; i++) {
      for (let j=0; j < board[0].length; j++) {
        if (board[i][j].space !== "X" && board[i][j].image === blank) {
          return;
        }
      }
    }
    this.setState({faceIcon:won,gameOver:true,openHighscoreModal:true});
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
     //  board[pos[0]-1][pos[1]-1].image = arr[board[pos[0]-1][pos[1]-1].space-1];
         return arr[board[pos[0]-1][pos[1]-1].space-1]; //returns number image
      }
    //  return board;
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
  checkForNewHighscore(name){
    const scores = Object.assign({},this.state.highscores);
    let newCurrentPage = window.location.href.split('/');
    const newPage = newCurrentPage[newCurrentPage.length-1];
    let newScores;
    if (newPage === "beginner") {
      newScores = scores.beginner;
    } else if (newPage === "intermediate"){
      newScores = scores.intermediate;
    } else if (newPage === "expert"){
      newScores = scores.expert;
    }
    const gameTime = this.state.timer;
    if (gameTime >= newScores[4].time) {
      return;
    }
    for (let i=0; i<newScores.length; i++) {
      if (gameTime > newScores[i].time) {
        continue;
      } else {
        newScores.splice(i,0,{name: name,time: gameTime});
        newScores.pop();
        this.addHighscore(newScores);
        this.setState({highscores: scores});
        break;
      }
    }
  }

  showHighscoreModal(){
    this.setState({openHighscoreModal: true});
  }
  
  enterScore(e){  
    if (e.target.value.length < 13) {
    this.setState({playerName: e.target.value});
    }
  }

  submitScore(e){
    e.preventDefault();
    // const newTime = this.state.timer;
    // const scores = Object.assign({},this.state.highscores);
    this.checkForNewHighscore(this.state.playerName);
    this.setState({playerName: "",openHighscoreModal: false});
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
    let main;
    if (window.screen.width < 450) {
       main = {
         zoom:'140%'
       }
    } else {
      main = null;
    }

    return(
      <div style={main}>
        <EnterHighScore
          enterScore={this.enterScore}
          submitScore={this.submitScore}
          playerName={this.state.playerName}
          openHighscoreModal={this.state.openHighscoreModal}
          timer={this.state.timer}
          />
      <Header
        restartSmallBoard={this.restartSmallBoard}
        restartIntermediateBoard={this.restartIntermediateBoard}
        restartExpertBoard={this.restartExpertBoard}/>
      <Router>
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
        highscores={this.state.highscores.beginner}
      />}/>
        <Route exact path='/intermediate' render={()=><IntermediateBoard
        genBoard={this.genBoard}
        beginnerBoardMain={this.state.beginnerBoardMain}
        restartIntermediateBoard={this.restartIntermediateBoard}
        faceIcon={this.state.faceIcon}
        flagCount={this.state.flagCount}
        timer={this.state.timer}
        gameTimer={this.gameTimer}
        highscores={this.state.highscores.intermediate}
        />}/>
        <Route exact path='/expert' render={()=><ExpertBoard
        genBoard={this.genBoard}
        beginnerBoardMain={this.state.beginnerBoardMain}
        restartExpertBoard={this.restartExpertBoard}
        faceIcon={this.state.faceIcon}
        flagCount={this.state.flagCount}
        timer={this.state.timer}
        gameTimer={this.gameTimer}
        highscores={this.state.highscores.expert}
        />}/>
      </Switch>
      </Router>
      </div>
    );
  }
}

export default App;