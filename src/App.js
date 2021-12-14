import React from 'react';
import './App.css';

import {Route, Routes} from 'react-router-dom';
import HomePage from './Page/homepage/Homepage.component';

const Agenre =(props)=> (
  <div>
    <h1>Hello to A genre</h1>
  </div>
)
function App() {
  return (
    <div>
      <Routes>
        <Route exact path= '/' element= {<HomePage/>}  /> {/*  this raouts to the the MainPage basically the homepage and its path is defined by the path parameter pased into the raout */}
        <Route path= '/firstItem' element= {<Agenre/>}  /> {/* this raouts to the the page called A genre and its path is defined by the path parameter pased into the raout*/}
      </Routes>
    </div>

    
    );
}

export default App;
