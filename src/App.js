import React from 'react';
import styled from 'styled-components';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
 } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


// componenets
import Header from './components/headerComponent/header';


import NavBar from './components/pages/nav';
import Footer from './components/pages/footer';
import Post3 from './components/pages/post3';
import Parsing from './components/pages/parsing';
import NewsAPI from './components/pages/newsAPI';
import Post1 from './components/pages/post1';
import Post2 from './components/pages/post2';


//import Parsing from './components/pages/parsing';

//assets






class App extends Component{

  
   render(){
    return(
      <Router>
      <Header />

        <Routes>
          <Route path = '/Post3' element = {<Post3 />} />
          <Route path = '/Post2' element = {<Post2 />} />
          <Route path = '/Post1' element = {<Post1 />} />

        </Routes>
      
          <NavBar />
          <div>
          
        </div>
          <Parsing/>
          <NewsAPI />
          <Footer/>

      </Router>
    );
  }

}
export default App;