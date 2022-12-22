
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Printing from '../Components/Printing';
import React from 'react';
import '../CSS/printing.css';


export default function Printing1(Pro) {
    const show=Pro.show;
    const handleClose=Pro.handleClose;
    const componentRef1=Pro.componentRef1;
    const componentRef=Pro.componentRef;
    const componentRef2=Pro.componentRef2;
    const [show1,setShow1]=React.useState(false);
    const [mainref,setMainref]=React.useState(false);
    const [mainref1,setMainref1]=React.useState(false);
    const [texter,setTexter]=React.useState('main');

    const handleClose1=()=>{setShow1(false)};
    const subhandle=(value)=>{
        setTexter(value)
        if(value==='All'){
            setTexter(value)
            setMainref1(true);   
        }
        else if (value==='Sub Tables'){
            setMainref(true);
            setMainref1(false);
        }
        else{
            setMainref(false);
            setMainref1(false);
            
        }
        setShow1(true);
        console.log(mainref1)
        
    }

    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className='modaltitle'>
                <Modal.Title >Download</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-body'>
                <Button onClick={()=>subhandle('All')} className='modal-buttons btn-lg' variant="secondary">Download All</Button><br></br>
                <Button onClick={()=>subhandle('Main Table')} className='modal-buttons btn-lg' variant="secondary">Download Main-Table</Button><br></br>
                <Button onClick={()=>subhandle('Sub Tables')} className='modal-buttons btn-lg' variant="secondary">Download Sub-Tables</Button>
            </Modal.Body>
            <Modal.Footer className='modaltitle'>
            <Button variant="light" onClick={handleClose} className='fotter-button'>Close</Button>
            <Button variant="light" onClick={handleClose}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
        <Printing show={show1} handleClose={handleClose1} componentRef1={mainref1?componentRef2:(mainref?componentRef1:componentRef)} vall={texter}/>
        </>
      );

}