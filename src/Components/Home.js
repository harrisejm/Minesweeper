import React from 'react';
import "../Styles/board.css";
import github from '../assets/img/Github.png';
import linkedIn from '../assets/img/LinkedIn.png';
import email from '../assets/img/email.png';
import mainLogo from '../assets/img/mainLogo.png';


function Home(){

  return(
      <div className="home">

      <a href='http://www.minesweeper.info/wiki/Windows_Minesweeper' target="_blank" rel="noopener noreferrer"><button className="howToPlay">How to Play</button></a>
      <p>My name is Eddie Harris and I created this game in React as a side project.</p>
        <p> Feel free to check out my GitHub and LinkedIn profiles or reach out to me directly. Thank you for playing my game!</p>
        <br/>

        <div className="contactInfo">
          <div>
            <a href="https://github.com/harrisejm/Minesweeper" target="_blank" rel="noopener noreferrer">
              <div className="githubImage">
                <img className="icons" src={github} alt="github"/>
              </div>
              <p className="info">Github: Minesweeper</p>
           </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/edward-harris" target="_blank" rel="noopener noreferrer">
              <div className="linkedinImage">
                <img className="icons" src={linkedIn} alt="linkedin"/>
              </div>
              <p className="infoLinkedin">LinkedIn: Edward Harris</p>
            </a>
          </div>
          <div className="moveEmail">
            <a href="mailto:harrisejm@gmail.com">
            <div className="emailImage">
              <img className="icons" src={email} alt="linkedin"/>
            </div>
            <p className="infoEmail">Email: Edward Harris</p>
            </a>
          </div>
        </div>
        <p className="chessInfo">If you liked my version of minesweepr, also checkout my online chess game. Two players can play against each other on two different devices or locally on one screen.</p>
        <div className="chessGame">    
          <a href="https://chess-eddie-harris.web.app" target="_blank" rel="noopener noreferrer">
            <div className="mainLogoImage">
              <img className="logoWidth" src={mainLogo} alt="Chess Piece"/>
            </div>
            <p className="infoChess">Online Chess</p>
          </a>
        </div>

      </div> 
  )
}

export default Home;