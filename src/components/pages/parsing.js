import React, { useState } from 'react';
import styled from 'styled-components';
import { Component } from 'react';
import axios from 'axios';
import blogInfo from '../../assets/blogInfo.xml';
import {
 
  Link,

 } from 'react-router-dom';

class Parsing extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isLoaded: false,
          items: [],
      }
  }


  componentDidMount() {
  this.get();

  }

  get = () => {
         axios.get(blogInfo,{
           "Content-Type": "application/xml; charset=utf-8"
         }).then((response) => {
            var XMLParser = require('react-xml-parser');
            var xml = new XMLParser().parseFromString(response.data)
            console.log(xml)
             this.setState({
               isLoaded: true,
               items: xml.getElementsByTagName('title')
             })
       })  
  }

  render() {

      var { isLoaded, items } = this.state;
      
      if (!isLoaded) {
          return <div>Loading</div>
      }
      else {
        console.log(items)
          return (
            <ul>
               {items.map(item => (
                                <li key={item.value}><button className='blogButton'>
                                    {item.value}</button>
                                </li>
                            ))}
           </ul>  
          );
      }
  }

}

export default Parsing;

