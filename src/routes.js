import React from 'react';
import {Router,Route} from 'react-router';

import App from './Components/App';
import BeginnerBoard from './Components/BeginnerBoard';
import Board from './Components/Board';

const Routes = (props) => (
  <Router {...props}>
    <Route path='/' component={App}>

    
    </Route>
  </Router>

);

export default Routes;
