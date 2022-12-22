import {Button, Row } from 'reactstrap';
import {Cases1} from './Cases1';
import React from 'react';


 export const Cases2=(Pro)=>{
    const lst=Pro.style_type;
    const a=Pro.a;
    const Allstyles=lst.map((pro,Index)=>{
        return(
            <Cases1 a={a} style_type={pro} index={Index}/>
        )

    })
    return(
        <div>  
        <Row className='showcontainer'>
            {Allstyles}
        </Row>
        </div>
    )
 }