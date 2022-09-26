import React from 'react'

import './App.css';
import Menu from './Menu';



//function App() { // équivalent
const App= () => { // fonction fléchée

  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
      </header>
      <Meal meal={meal}/>
    </div>
  );
}

export default App;
