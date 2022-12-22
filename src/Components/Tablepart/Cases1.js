 import React,{useRef} from 'react';

 
 export const Cases1=(Pro)=>{
    const a=Pro.a
    const y=Pro.style_type
    const componentRef1 = React.createRef();
    const diffcases=Pro.index
    const colorlooping=(ind,lst,lst1,lst2)=>{
        if ((~[0,1,2,3,4,5,6,7,8,9].indexOf(diffcases))<0){
            if ((~lst.indexOf(ind))<0){
                return['#FFF0F5','#000000','solid black 2px']
            }
            else{
                return['#B0E0E6','#DAA520','none']
            }
        }
        if ((~[10,11].indexOf(diffcases))<0){
            if ((~lst.indexOf(ind))<0){
                return['#FFF0F5','#000000','solid black 2px']
            }
            else if((~lst1.indexOf(ind))<0){
                return['#B0E0E6','#000000','solid black 2px']
            }
            else if((~lst2.indexOf(ind))<0){
                return['#FFF0F5','#000000','solid black 2px']
            }
            else{
                return['#B0E0E6','#000000','solid black 2px']
            }
        }
        
    }
    const selectcolor=(ind)=>{
        //console.log(diffcases)
        if (diffcases===0){return(colorlooping(ind,[1,4,13,16]))   }
        if (diffcases===1){return(colorlooping(ind,[6,7,10,11]))}
        if (diffcases===2){return(colorlooping(ind,[1,2,5,6]))}
        if (diffcases===3){return(colorlooping(ind,[3,4,7,8]))}
        if (diffcases===4){return(colorlooping(ind,[9,10,13,14]))}
        if (diffcases===5){return(colorlooping(ind,[11,12,15,16]))}
        if (diffcases===6){return(colorlooping(ind,[2,3,14,15]))}
        if (diffcases===7){return(colorlooping(ind,[5,9,8,12]))}
        if (diffcases===8){return(colorlooping(ind,[4,7,10,13]))}
        if (diffcases===9){return(colorlooping(ind,[1,6,11,16]))}
        if (diffcases===10){return(colorlooping(ind,[1,2,3,4],[5,6,7,8],[9,10,11,12]))}
        if (diffcases===11){return(colorlooping(ind,[1,5,9,13],[2,6,10,14],[3,7,11,15]))}

    }
    return(
        
        <div  className="col-md-4 col-lg-3 col-sm-5 offset-sm-1 offset-lg-0 offset-md-0 cellstyle" ref={componentRef1}>
        <table  className='col-md-10 col-sm-12 col-lg-8 cellstyle tablegrp'>
            <th colSpan={4} className='Tableheading'>{y}</th>
            <tr>
                <td className="tdgrp" style={{backgroundColor:selectcolor(1)[0],color:selectcolor(1)[1],border:selectcolor(1)[2]}}>{a[0]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(2)[0],color:selectcolor(2)[1],border:selectcolor(2)[2]}}>{a[1]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(3)[0],color:selectcolor(3)[1],border:selectcolor(3)[2]}}>{a[2]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(4)[0],color:selectcolor(4)[1],border:selectcolor(4)[2]}}>{a[3]}</td>
            </tr>
            <tr>
                <td className="tdgrp" style={{backgroundColor:selectcolor(5)[0],color:selectcolor(5)[1],border:selectcolor(5)[2]}}>{a[4]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(6)[0],color:selectcolor(6)[1],border:selectcolor(6)[2]}}>{a[5]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(7)[0],color:selectcolor(7)[1],border:selectcolor(7)[2]}}>{a[6]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(8)[0],color:selectcolor(8)[1],border:selectcolor(8)[2]}}>{a[7]}</td>
            </tr>
            <tr>
                <td className="tdgrp" style={{backgroundColor:selectcolor(9)[0],color:selectcolor(9)[1],border:selectcolor(9)[2]}}>{a[8]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(10)[0],color:selectcolor(10)[1],border:selectcolor(10)[2]}}>{a[9]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(11)[0],color:selectcolor(11)[1],border:selectcolor(11)[2]}}>{a[10]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(12)[0],color:selectcolor(12)[1],border:selectcolor(12)[2]}}>{a[11]}</td>
            </tr>
            <tr>
                <td className="tdgrp" style={{backgroundColor:selectcolor(13)[0],color:selectcolor(13)[1],border:selectcolor(13)[2]}}>{a[12]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(14)[0],color:selectcolor(14)[1],border:selectcolor(14)[2]}}>{a[13]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(15)[0],color:selectcolor(15)[1],border:selectcolor(15)[2]}}>{a[14]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(16)[0],color:selectcolor(16)[1],border:selectcolor(16)[2]}}>{a[15]}</td>
            </tr>                
        </table>
        </div>
        )
    
}

/*
 export const Cases1=(Pro)=>{
    const a=Pro.a
    const y=Pro.style_type
    const diffcases=Pro.index
    const colorlooping=(ind,lst,lst1,lst2)=>{
        if ((~[0,1,2,3,4,5,6,7].indexOf(diffcases))<0){
            if ((~lst.indexOf(ind))<0){
                return['#FFF0F5','#000000','solid black 2px']
            }
            else{
                return['#B0E0E6','#DAA520','none']
            }
        }
        if ((~[8].indexOf(diffcases))<0){
            if ((~lst.indexOf(ind))<0){
                return['#FFF0F5','#000000','solid black 2px']
            }
            else if((~lst1.indexOf(ind))<0){
                return['#B0E0E6','#000000','solid black 2px']
            }
            else{
                return['#98FB98','#DAA520','none']
            }
        }
        if ((~[9,10].indexOf(diffcases))<0){
            if ((~lst.indexOf(ind))<0){
                return['#FFF0F5','#000000','solid black 2px']
            }
            else if((~lst1.indexOf(ind))<0){
                return['#B0E0E6','#000000','solid black 2px']
            }
            else if((~lst2.indexOf(ind))<0){
                return['#98FB98','#000000','solid black 2px']
            }
            else{
                return['#6495ED','#000000','solid black 2px']
            }
        }
        
    }
    const selectcolor=(ind)=>{
        //console.log(diffcases)
        if (diffcases===0){return(colorlooping(ind,[1,4,13,16]))   }
        if (diffcases===1){return(colorlooping(ind,[6,7,10,11]))}
        if (diffcases===2){return(colorlooping(ind,[1,2,5,6]))}
        if (diffcases===3){return(colorlooping(ind,[3,4,7,8]))}
        if (diffcases===4){return(colorlooping(ind,[9,10,13,14]))}
        if (diffcases===5){return(colorlooping(ind,[11,12,15,16]))}
        if (diffcases===6){return(colorlooping(ind,[2,3,14,15]))}
        if (diffcases===7){return(colorlooping(ind,[5,9,8,12]))}
        if (diffcases===8){return(colorlooping(ind,[1,6,11,16],[4,7,10,13]))}
        if (diffcases===9){return(colorlooping(ind,[1,2,3,4],[5,6,7,8],[9,10,11,12]))}
        if (diffcases===10){return(colorlooping(ind,[1,5,9,13],[2,6,10,14],[3,7,11,15]))}

    }


        return(
        <table  className='col-sm-4 col-md-3 col-lg-3 offset-1 col-10 cellstyle tablegrp'>
            <th colSpan={4} className='Tableheading'>{y}</th>
            <tr>
                <td className="tdgrp" style={{backgroundColor:selectcolor(1)[0],color:selectcolor(1)[1],border:selectcolor(1)[2]}}>{a[0]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(2)[0],color:selectcolor(2)[1],border:selectcolor(2)[2]}}>{a[1]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(3)[0],color:selectcolor(3)[1],border:selectcolor(3)[2]}}>{a[2]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(4)[0],color:selectcolor(4)[1],border:selectcolor(4)[2]}}>{a[3]}</td>
            </tr>
            <tr>
                <td className="tdgrp" style={{backgroundColor:selectcolor(5)[0],color:selectcolor(5)[1],border:selectcolor(5)[2]}}>{a[4]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(6)[0],color:selectcolor(6)[1],border:selectcolor(6)[2]}}>{a[5]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(7)[0],color:selectcolor(7)[1],border:selectcolor(7)[2]}}>{a[6]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(8)[0],color:selectcolor(8)[1],border:selectcolor(8)[2]}}>{a[7]}</td>
            </tr>
            <tr>
                <td className="tdgrp" style={{backgroundColor:selectcolor(9)[0],color:selectcolor(9)[1],border:selectcolor(9)[2]}}>{a[8]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(10)[0],color:selectcolor(10)[1],border:selectcolor(10)[2]}}>{a[9]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(11)[0],color:selectcolor(11)[1],border:selectcolor(11)[2]}}>{a[10]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(12)[0],color:selectcolor(12)[1],border:selectcolor(12)[2]}}>{a[11]}</td>
            </tr>
            <tr>
                <td className="tdgrp" style={{backgroundColor:selectcolor(13)[0],color:selectcolor(13)[1],border:selectcolor(13)[2]}}>{a[12]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(14)[0],color:selectcolor(14)[1],border:selectcolor(14)[2]}}>{a[13]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(15)[0],color:selectcolor(15)[1],border:selectcolor(15)[2]}}>{a[14]}</td>
                <td className="tdgrp" style={{backgroundColor:selectcolor(16)[0],color:selectcolor(16)[1],border:selectcolor(16)[2]}}>{a[15]}</td>
            </tr>                
        </table>
        )
    
}*/