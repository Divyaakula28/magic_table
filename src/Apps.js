import logo from "./logo.svg";
import "./Apps.css";
import Secondpage from "./secondpage";
import React, { Component } from "react";
import Calendar from "react-calendar";
import { format } from 'date-fns'

import { useState } from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";



class Apps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date:new Date(),
      urlDate:'28-07-2000'
    };
  }
  datechange = (e) => {
    const y=e.target.value;
    const yy=y.slice(0,4);
    const mm=y.slice(5,7)
    const dd=y.slice(8,10)
    this.setState({ date: e.target.value,urlDate:dd+'-'+mm+'-'+yy});
  };
  render() {
    return (
      <div>
        <center>
          <input
            type="Date"
            value={this.state.date}
            onChange={this.datechange}
          />
          <button>
            <Link to={`/magic_table?DOB=${this.state.urlDate}`} state={this.state.date}>check here</Link>
          </button>
        </center>
      </div>
    );
  }
}

export default Apps;
/* 
to={`/blog?name=${name}`}*

return (
    <div className='App App1'>          
          <h2 className='subheading'>Select the DATE:</h2>

          
          <input  className='forinput'
            value={this.state.date.toLocaleDateString()}
            
            onFocus={() => this.setState({showCalendar:true,cond:false})}
          />
          <button onClick={this.clicked} className={this.state.for_button} ><Link to={`/magic_table?date=${this.name}&month=${this.hello}`} className={this.state.for_button}>
            hello
          </Link></button>
          
          <Calendar 
            className={this.state.showCalendar ? "show" : "hide" }
            value={this.state.date}
            onChange={this.handleChange}
            format="dd-MM-yyyy"
          />
          <br></br>
      </div>

  );*/
