import React from 'react';
import './App.css';

import {Route, Routes} from 'react-router-dom';
import SignInAndSignUpPage from './Page/sign-in-sign-up/sign-in-sign-up';
import HomePage from './Page/homepage/Homepage.component';
import ShopPage  from './Page/shop/shop.component';
import Header from './Componenet/header/header.componrnt';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path= '/' element= {<HomePage/>}  /> {/*  this raouts to the the MainPage basically the homepage and its path is defined by the path parameter pased into the raout */}
        <Route path= '/Shop' element= {<ShopPage/>}  /> {/* this raouts to the the page called A genre and its path is defined by the path parameter pased into the raout*/}
        <Route path = '/signin' element= {<SignInAndSignUpPage/>} />
      </Routes>
    </div> 

    
    );
}

export default App;
