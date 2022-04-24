import React from 'react';
import styled from 'styled-components';
import { Component } from 'react';
import {
 Link
} from 'react-router-dom';
import '../../App.css';

class NavBar extends Component{
  render(){
    return(
      <header >

            
        <div className='NAVP'>
          <p> Return home</p>
          
            <nav >
                
                        <button><Link to = "/">Home</Link></button>
                    
                   

            </nav>
        </div>
      </header>
    );
  }

}
export default NavBar;