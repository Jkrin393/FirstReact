import React from 'react';
import styled from 'styled-components';
import { Component } from 'react';
import {
 Link
} from 'react-router-dom';
import '../../assets/selfie.png'

class Header extends Component{
  render(){
    return(
      <header >
        <h3>Just Joshing with Josh</h3>
            
        <div>
        <img src='../../assets/selfie.png' />
          
          </div>
      </header>
    );
  }

}
export default Header;