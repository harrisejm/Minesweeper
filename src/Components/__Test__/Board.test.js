import React from 'react';
import ReactDOM from 'react-dom';
import Board from '../Board';
import App from '../App';

const newBoard = new App;

it('renders Board without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Board 
    createBoard={newBoard.createBoard}
    genBoard={newBoard.genBoard}
    beginnerBoardMain={newBoard.state.beginnerBoardMain}
    clickSquare={newBoard.clickSquare}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});