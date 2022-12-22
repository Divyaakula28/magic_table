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
     const yy=value.getFullYear()
     const mm=value.getMonth()+1
     const dd=value.getDate()
     console.log(yy,mm,dd)
     console.log(this.state.nochnge,'beforeclick')
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
                <div className='forinput'>
                  <DatePickerComponent selected={this.state.fisrtone} className="example-custom-input" onChange={this.datechange} dateFormat="dd-MM-yyyy"/>
                </div>
                <Link to={`/magic_table?DOB=${this.state.urlDate}`} state={this.state.date}><button onClick={this.updating} className='forbutton' >Check Here</button></Link>   
              </div>
              {this.state.nochnge?this.CallTable():undefined}
            </center>
          </div>
        );
      }
    }
    
  }