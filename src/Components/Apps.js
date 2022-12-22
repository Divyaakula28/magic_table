import "../CSS/Apps.css";
import React, { Component } from "react";
import {Link} from "react-router-dom";
import Navfooter from '../Components/Nav_footer'
import '../App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePickerComponent from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";





class Apps extends Component {
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
    this.setState({showCalendar:!(this.state.showCalendar)});  
    const y=value.getDate()<10?'0'+value.getDate():value.getDate()
    const z=value.getMonth()+1<10?'0'+(value.getMonth()+1):value.getMonth()+1
    const k=y+'-'+z+'-'+value.getFullYear();
    const fortesting=z+' '+y+' '+value.getFullYear()
    const event = new Date(fortesting);
    console.log(event);
    this.setState({urlDate:k,date:event})
  };
  render() {
    
    return (
      <div>
        <center>
          <div  className="input-group mb-3 justify-content-sm-center">
          <div className='App1'>          
          <input  className='forinput' href='#calendar'
            value={this.state.date.toLocaleDateString()}
            onFocus={() => this.setState({showCalendar:true,cond:false})}
          />
          <Link to={`/magic_table?DOB=${this.state.urlDate}`} state={this.state.date}><button onClick={this.clicked} className='forbutton' >Check Here </button></Link>
          <Calendar  id='calendar'
            className={this.state.showCalendar ? "show" : "hide" } 
            value={this.state.date}
            onChange={this.handleChange}
            format="dd-MM-yyyy"
          />
          <br></br>
        </div>
          </div>

        </center>
      </div>
    );
  }
}

export default Apps;


/* 
import "../CSS/Apps.css";
import React, { Component } from "react";
import {Link} from "react-router-dom";
import Navfooter from '../Components/Nav_footer'



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
        <Navfooter/>
        <center>
          <div  className="input-group mb-3 justify-content-sm-center">
          <input type="Date" value={this.state.date} onChange={this.datechange}/>
          <div className="input-group-append">
            <Link to={`/magic_table?DOB=${this.state.urlDate}`} state={this.state.date}><button className="btn btn-outline-secondary btn-wdth" type="button">check here</button></Link>
            </div>
          </div>

        </center>
      </div>
    );
  }
}

export default Apps;*/
