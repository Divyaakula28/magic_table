import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import React, { Component, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import {Cretable} from './template';
import {Footing} from './Footing';
import SocialFollow from "./SocialFollow";
import * as Icon from 'react-bootstrap-icons';
import * as ion from "@react-icons/all-files/";
import { BsArrowDownCircleFill,BsArrowDown } from "react-icons/bs";
import { AiFillGithub,AiFillTwitterSquare,AiFillInstagram,AiOutlineMail} from "react-icons/ai";



export class Maintwo extends Component{
    constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      showCalendar: false,
      cond:false,
      for_button:'forbutton'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  

  handleChange = value => {
    this.setState({date:value});
    this.setState({showCalendar:!(this.state.showCalendar)});
    //console.log(this.state.date.getFullYear())  
    this.setState({for_button:'forbutton'})
  };

  hello=((pos)=>{
      //<Cretable x={this.y}/>
      if (this.state.cond){
        
        return(
          //console.log(this.state.date.getFullYear(),this.state.date.getMonth() + 1,this.state.date.getDate())
          <Cretable  dd={this.state.date.getDate()} mm={this.state.date.getMonth()+1} yyyy={this.state.date.getFullYear()}/>
        )}

      else{
        //console.log('hii');
      }  
    })
  clicked=()=>{
    this.setState({cond:true})
    this.setState({showCalendar:false})
    this.setState({for_button:'forbutton1'})
  }
  
  render(){
      return (
        <div className='App App1'>          
          <h2 className='subheading'>Select the DATE:</h2>
          <input  className='forinput'
            value={this.state.date.toLocaleDateString()}
            inputmode='none'
            readonly="readonly"
            onFocus={() => this.setState({showCalendar:true,cond:false})}
          />
          <button onClick={this.clicked} className={this.state.for_button} >OK</button>
          <Calendar 
            className={this.state.showCalendar ? "show" : "hide" }
            value={this.state.date}
            onChange={this.handleChange}
            format="dd-MM-yyyy"
          />
          <br></br>
          {this.hello()}
        </div>
        
        
        );
      }
      
  };
