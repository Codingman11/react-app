import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addSymbol} from './actions';
 import Game from './components/game';


function App() {

    
  

  return (
    <div className="App">
        <Game />
    </div>
  );
}

export default App;
