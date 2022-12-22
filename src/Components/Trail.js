import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../App.css';
import Calendar from 'react-calendar';
import React, { Component,useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import { Link } from "react-router-dom";
import '../CSS/trail1.css';
import 'react-calendar/dist/Calendar.css';
import * as Icon from 'react-bootstrap-icons';
import * as ion from "@react-icons/all-files/";
import { BsArrowDownCircleFill,BsArrowDown } from "react-icons/bs";
import { AiFillGithub,AiFillTwitterSquare,AiFillInstagram,AiOutlineMail} from "react-icons/ai";
export default class Trail extends Component{
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      showCalendar: false,
      cond:false,
      urlDate:'28-07-2000',
      for_button:'forbutton'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  

  handleChange = value => {
    this.setState({showCalendar:!(this.state.showCalendar)});  
    this.setState({for_button:'forbutton'})
    const y=value.getDate()<10?'0'+value.getDate():value.getDate()
    const z=value.getMonth()+1<10?'0'+(value.getMonth()+1):value.getMonth()+1
    const k=y+'-'+z+'-'+value.getFullYear();
    const fortesting=z+' '+y+' '+value.getFullYear()
    const event = new Date(fortesting);
    
    this.setState({urlDate:k,date:event})
  };

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
          <Link to={`/magic_table?DOB=${this.state.urlDate}`} state={this.state.date}><button onClick={this.clicked} className={this.state.for_button} >Check Here </button></Link>
          <Calendar 
            className={this.state.showCalendar ? "show" : "hide" } 
            value={this.state.date}
            onChange={this.handleChange}
            format="dd-MM-yyyy"
          />
          <br></br>
        </div>
        
        
        );
      }
      
      
  };

  /*
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      urlDate:'28-07-2000',
      showCalendar: false,
      cond:false,
      for_button:'forbutton'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  

  handleChange = value => {
    
    this.setState({date:value});
    console.log(value.getDate())
    this.setState({showCalendar:!(this.state.showCalendar)});  
    this.setState({for_button:'forbutton'})
    this.setState({urlDate:value.getDate()+'-'+(value.getMonth()+1)+'-'+value.getFullYear()})
    console.log(this.state.urlDate)
  };

  
  render(){
      return (
        <div className='App App1'>          
          <h2 className='subheading'>Select the DATE:</h2>
          <input  className='forinput'
            value={this.state.date.toLocaleDateString()}
            onFocus={() => this.setState({showCalendar:true,cond:false})}
          />
          <button onClick={this.clicked} className={this.state.for_button} ><Link to={`/magic_table?DOB=${this.state.urlDate}`} state={this.state.date}>check here</Link></button>
          <Calendar 
            className={this.state.showCalendar ? "show" : "hide" }
            value={this.state.date}
            onChange={this.handleChange}
            format="dd-MM-yyyy"
          />
          <br></br>
        </div>
        
        
        );}
        */
