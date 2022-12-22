import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "./Table";
import Calendar from "react-calendar";
import Navfooter from "../Components/Nav_footer";
import '../CSS/Apps.css';



class Secondpage extends Component {
  
  searchParams = new URLSearchParams(document.location.search);

  constructor(props) {
    super(props);
    this.state = {
      Date:(this.searchParams.get("DOB").slice(6,10)+'-'+this.searchParams.get("DOB").slice(3,5)+'-'+this.searchParams.get("DOB").slice(0,2)),
      urlDate:this.searchParams.get("DOB"),
      Dates:this.searchParams.get("DOB").slice(0,2),
      Months:this.searchParams.get("DOB").slice(3,5),
      Years:this.searchParams.get("DOB").slice(6,10),
      fisrtone:(new Date(this.searchParams.get("DOB").slice(3,5)+' '+this.searchParams.get("DOB").slice(0,2)+' '+this.searchParams.get("DOB").slice(6,10))),
      nochnge:true,
      cnt:1
    }; 
  }
  CallTable = () => {
    return (
      <Table
        yyyy={this.state.Years}
        mm={this.state.Months}
        dd={this.state.Dates}

      />
    );
  };
  /*
  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState(prevState => {
        console.log((this.searchParams.get("DOB").slice(6,10)+'-'+this.searchParams.get("DOB").slice(3,5)+'-'+this.searchParams.get("DOB").slice(0,2)))
        return {
          Date: (this.searchParams.get("DOB").slice(6,10)+'-'+this.searchParams.get("DOB").slice(3,5)+'-'+this.searchParams.get("DOB").slice(0,2)),
        };
      });
    }, 3000);
  }
  */
  datechange = value => {
  /*for auto url chnage
    this.searchParams.set('DOB',e.target.value)
    window.location.search=this.searchParams.toString();
    */
  this.setState({showCalendar:!(this.state.showCalendar)}); 
  this.setState({for_button:'forbutton'})
   const yy=value.getFullYear()
   const mm=value.getMonth()+1<10?'0'+(value.getMonth()+1):value.getMonth()+1
   const dd=value.getDate()<10?'0'+value.getDate():value.getDate()
  this.setState({fisrtone:value,urlDate:dd+'-'+mm+'-'+yy,Dates:dd,Months:mm,Years:yy,nochnge:false });
  };
  
  updating=()=>{
    console.log(this.state.nochnge,'onclick')
    if (this.state.nochnge===false){
      this.setState({nochnge:true})
    }

    this.setState({jj:true});}

  render() {
    if (this.state.Date.length!==10 || !isNaN(this.state.Dates) === false || !isNaN(this.state.Months) === false || !isNaN(this.state.Years) === false || this.searchParams.get("DOB").slice(2,3)!=='-' || this.searchParams.get("DOB").slice(5,6)!=='-') {
      return <h1>error</h1>;
    } 
    else{
      return (
        <div>
          <Navfooter/>
          <center>
            <div  className="input-group mb-3 justify-content-sm-center">
              <div className="App1">
            <input  className='forinput'
            value={this.state.fisrtone.toLocaleDateString()}
            onFocus={() => this.setState({showCalendar:true,cond:false})}
          />
          <Link to={`/magic_table?DOB=${this.state.urlDate}`}><button onClick={this.updating} className='forbutton' >Check Here </button></Link>
          <Calendar 
            className={this.state.showCalendar ? "show" : "hide" } 
            value={this.state.fisrtone}
            onChange={this.datechange}
            format="dd-MM-yyyy"
          />
            </div>
            </div>
            {this.state.nochnge?this.CallTable():undefined}
          </center>
        </div>
      );
    }
  }
  
}

export default Secondpage;

/*


componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState(prevState => {
        return {
          Date: this.searchParams.get("DOB"),
        };
      });
    }, 3000);
  }
  
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
------------------------------------
const [searchParams, setSearchParams] = useSearchParams();
  const DOB = searchParams.get("DOB");
  const yy = DOB.slice(0, 4);
  const mm = DOB.slice(5, 7);
  const dd = DOB.slice(8, 10);
  setSearchParams('2023-12-22')
  if (
    DOB.length !== 10 ||
    !isNaN(yy) === false ||
    !isNaN(mm) === false ||
    !isNaN(dd) === false
  ) {
    return <h1>error</h1>;
  } else
    return (
      <div>
        <h1>{DOB ? mm : "go to hello"}</h1>
      </div>
      
    );
  let query = useQuery();
  const DOB = query.get("DOB");
  const yy = DOB.slice(0, 4);
  const mm = DOB.slice(5, 7);
  const dd = DOB.slice(8, 10);
  if (
    DOB.length !== 10 ||
    !isNaN(yy) === false ||
    !isNaN(mm) === false ||
    !isNaN(dd) === false
  ) {
    return <h1>error</h1>;
  } else
    return (
      <div>
        <h1>{query ? mm : "go to hello"}</h1>
      </div>

    );
    */
