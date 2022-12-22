import React, { Component } from "react";
/*import {Row, Col, Container, Button,ButtonGroup,Card,CardImg,CardBody} from "react-bootstrap";*/
import {Container,Collapse } from 'reactstrap';
import Navfooter from "./Nav_footer";
import center from '../Images/Center.png';
import column from '../Images/Column.png';
import diagonal1 from '../Images/Diagonal1.png';
import diagonal2 from '../Images/Diagonal2.png';
import corner from '../Images/corner.png';
import row from '../Images/Row.png';
import Apps from '../Components/Apps';
import '../CSS/content.css';
import { Helmet } from 'react-helmet'


class Content extends Component{
    constructor(props) {
        super(props)
        this.state = {
          card1:true,
          card2:false,
          card3:false,
          arrow:true
        }
    }
    fn1=(value)=>{
        if (value==='card1'){
            this.setState({card1:!this.state.card1,card2:false,card3:false})
        }
        if (value==='card2'){
            this.setState({card1:false,card2:!this.state.card2,card3:false})
        }
        if (value==='card3'){
            this.setState({card1:false,card2:false,card3:!this.state.card3})
        }
    }
    render(){
        return(
            <>
            <Helmet><title>Magic Table</title></Helmet>
            <Navfooter/>
            <Container className="maincontainer">
                    <div className="card" >
                        <button onClick={()=>this.fn1('card1')} className='Cardheading'>
                            <div className="card-header headerstyle" id="About">
                                <h3 className="mb-0 headtext">About</h3>
                            </div>
                        </button>
                        <Collapse isOpen={this.state.card1} className='mainbody'>
                            <div className="card-body ">
                                <p className="d-sm-block d-block">
                                    <p className="textstyling">A magic square is an NxN matrix in which every row, column, and diagonal sums up to the <i className="highlight">same number</i>. The sum is called the <i className="highlight">magic constant or magic sum</i> of the magic square. <br></br></p>
                                    <h4 className="history">History :</h4>
                                   <p className="textstyling">Mathematician, Ramanujan created a Magic Square: one of its kind fascinating mathematical objects that has a deep and mysterious history that has been so far unmanageable for researchers and mathematicians to decipher. Knowing and learning about this magic square can be helpful and rewarding for students. While math, as a subject might be strenuous and arduous, its wonders never fail to leave us flabbergasted. One such magical math square was created by Srinivasa Ramanujan, who was an Indian mathematician. This magical square is a matrix of numbers in which every row, column and diagonal add up to the same number. </p> 
                                   <button className="knowmore">know more</button>
                                </p>
                            </div>
                        </Collapse>
                    </div>
                    <div className="card">
                        <button onClick={()=>this.fn1('card2')} className='Cardheading'>
                            <div className="card-header" role="tab" id="Example">
                                <h3 class="mb-0 headtext">Example</h3>
                            </div>
                        </button>
                        <Collapse isOpen={this.state.card2} className='mainbody'>
                            <div className="card-body">
                                <p className="d-sm-block d-block">
                                    <p className="textstyling"><em>Srinivasa Ramanujan</em> created this magic table or magic Square with his Date Of Birth which is on <mark>22-12-1887</mark>.</p>
                                    <p className="textstyling">The <cite>magic constant</cite> for his DOB is <mark>139</mark>.</p>
                                    <p className="textstyling">The sum of  <dfn>👇</dfn> equals to same number. ie <mark>139</mark></p>
                                        <img src={row} alt='row' className="offset-md-0 offset-sm-2"></img>
                                        <img src={column} alt='column' className="offset-md-0 offset-sm-2"></img>
                                        <img src={diagonal1} alt='diagoal1' className="offset-md-0 offset-sm-2"></img>
                                        <img src={diagonal2} alt='diagoal2' className="offset-md-0 offset-sm-2"></img>
                                        <img src={center} alt='center' className="offset-md-0 offset-sm-2"></img>
                                        <img src={corner} alt='corner' className="offset-md-0 offset-sm-2"></img>
                                    </p>
                            </div>
                        </Collapse>
                    </div>
                    <div className="card" >
                        <button onClick={()=>this.fn1('card3')} className='Cardheading'>
                            <div className="card-header" role="tab" id="Try Your's">
                                <h3 class="mb-0 headtext">Try Your's</h3>
                            </div>
                        </button>
                        <Collapse isOpen={this.state.card3} className='mainbody'>
                            <div className="card-body">
                                <p className="d-sm-block d-block">
                                    <p className="textstyling">As like Ramanujan, would you like to see <strong className="highlight">Magic square for your special magic date..??</strong> </p>
                                    <p className="textstyling ">So,What's late  !!!</p>
                                    <p className="textstyling">Create Magic by selecting DATE</p>
                                    <Apps/>
                                    
                                </p>
                            </div>
                        </Collapse>
                    </div>
          
            </Container>
            
            </>
        )
    }
}
export default Content

/*

<Tabs
      defaultActiveKey="about"
      transition={false}
      id="noanim-tab-example"
      classNameName="mb-3"
    >
      <Tab eventKey="about" title="About" classNameName="tabcontent">
      <p>
        A magic square is an NxN matrix in which every row, column, and diagonal sums up to the same number. The sum is called the magic constant or magic sum of the magic square. <br></br>
        <h5>History</h5>
        Mathematician, Ramanujan created a Magic Square: one of its kind fascinating mathematical objects that has a deep and mysterious history that has been so far unmanageable for researchers and mathematicians to decipher. Knowing and learning about this magic square can be helpful and rewarding for students. While math, as a subject might be strenuous and arduous, its wonders never fail to leave us flabbergasted. One such magical math square was created by Srinivasa Ramanujan, who was an Indian mathematician. This magical square is a matrix of numbers in which every row, column and diagonal add up to the same number. 
    </p>
      </Tab>
      <Tab eventKey="example" title="Example">
        <h2>Example</h2>
        <p>Srinivasa Ramanujan created this magic table or magic Square with his Date Of Birth which is on 22-12-1887.</p>
        <p>The magic constant  for his DOB is 139.</p>
        <p>The sum of </p>
        <img src={diagonal1} alt='diagoal1'></img>
      </Tab>
      <Tab eventKey="check your's" title="Check your's">
        <h2>Check Your's Date</h2>
      </Tab>
    </Tabs>



<Container classNameName='content-container'>
            <Row>
                <Col md='3'>
                    <ButtonGroup>
                        <Button>About</Button><br></br>
                        <Button>Example</Button><br></br>
                        <Button>Check Your's</Button>
                    </ButtonGroup>
                </Col>
                <Col md='7' classNameName="subcontainer">
                <h2>About</h2>
                    <p>
                    A magic square is an NxN matrix in which every row, column, and diagonal sums up to the same number. The sum is called the magic constant or magic sum of the magic square. <br></br>
                    <h5>History</h5>
                    Mathematician, Ramanujan created a Magic Square: one of its kind fascinating mathematical objects that has a deep and mysterious history that has been so far unmanageable for researchers and mathematicians to decipher. Knowing and learning about this magic square can be helpful and rewarding for students. While math, as a subject might be strenuous and arduous, its wonders never fail to leave us flabbergasted. One such magical math square was created by Srinivasa Ramanujan, who was an Indian mathematician. This magical square is a matrix of numbers in which every row, column and diagonal add up to the same number. 
                    </p>
                    <Row>
                <h2>Example</h2>
                <p>Srinivasa Ramanujan created this magic table or magic Square with his Date Of Birth which is on 22-12-1887.</p>
                <p>The magic constant  for his DOB is 139.</p>
                <p>The sum of </p>
                <Row>
                    <img src={diagonal1} alt='diagoal1'></img>
                </Row>
                <Card>
                </Card>
            </Row>

            <Row>
                <h2>Check Your's Date</h2>
            </Row>
                </Col>
            </Row>

            
        </Container>*/