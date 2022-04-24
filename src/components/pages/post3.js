import React, { useState } from 'react';
import styled from 'styled-components';
import { Component } from 'react';
import axios from 'axios';
import blogInfo from '../../assets/blogInfo.xml';

class Post1 extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			items: [],
		}
	}
  
  
	componentDidMount() {
	this.get();
	setInterval(this.get, 60000); // runs every 5 seconds.
	}
  
	get = () => {
		   axios.get(blogInfo,{
			 "Content-Type": "application/xml; charset=utf-8"
		   }).then((response) => {
			  var XMLParser = require('react-xml-parser');
			  var xml = new XMLParser().parseFromString(response.data)
			  console.log('----------------------')
			  console.log(xml.getElementsByTagName('body')[2])
			   this.setState({
				 isLoaded: true,
				 items: xml.getElementsByTagName('body')[2]
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
			  <div>
				 {items.value}
			 </div>  
			);
		}
	}
  
  }
export default Post1;