import React from 'react';
import 'react-calendar/dist/Calendar.css';
import './App.css';





export  const Table=(pro)=>{
    const a=parseInt(pro.dd);
    const b=parseInt(pro.mm);
    const x=pro.yyyy;
    const y=x.toString()
    const c=Number(y[0]+y[1])
    const d=Number(y[2]+y[3])
    

    const cases1=(cc)=>{
        const find1=(values,dd)=>{
            for(var i=0;i<4;i++){
                if (((~dd.indexOf(values[i]))<0) || (values[i]<0)){
                    return(false)
                }
                else{
                }      
        }
        return(true)
        }
        const looping1=((dd)=>{
            for(var i=0;i<15;i++){
                if ( dd[i]<0){
                    return(false)
                }
                else{
                }      
            }
            return(true)

        })
        const looping=(values,values1,values2,dd)=>{
            const status1=find1(values,dd)
            if (status1===true){
                dd.concat([values])
                const status2=find1(values1,dd)
                //console.log(dd)
                if (status2===true){
                    dd.concat([values2])
                    const status3=find1(values2,dd)
                    //console.log(dd)
                    if(status3===true){
                        return(true)
                    }
                    else{
                        return(false)
                    }
                }
                else{
                    return(false)
                }
            }
            else{
                return(false)
            }
        }

        if (cc===0){
            const dd=[a,a+1,a+2,a+3];
            const values=[b-3,b-2,b-1,b]
            const values1=[c+1,c,c-1,c-2]
            const values2=[d+2,d+1,d,d-1] 
            return(looping(values,values1,values2,dd))
        }
        if(cc===1){
            const dd=[a-3,a-2,a-1,a];
            const values=[b,b+1,b+2,b+3]
            const values1=[c-1,c,c+1,c+2]
            const values2=[d-2,d-1,d,d+1] 
            return(looping(values,values1,values2,dd))
        }
        if(cc===2){
            const dd=[a-2,a-1,a,a+1];
            const values=[b-1,b,b+1,b+2]
            const values1=[c,c+1,c+2,c+3]
            const values2=[d-3,d-2,d-1,d] 
            return(looping(values,values1,values2,dd))
        }
        if(cc===3){
            const dd=[a-1,a,a+1,a+2];
            const values=[b-2,b-1,b,b+1]
            const values1=[c,c-1,c-2,c-3]
            const values2=[d,d+1,d+2,d+3] 
            return(looping(values,values1,values2,dd))
        }
        if (cc===4){
            const dd=[a-1,a,a+1,a+2,b-2,b-1,b,b+1,c,c-1,c-2,c-3,d,d+1,d+2,d+3];
            return(looping1(dd))
        }
        if(cc===5){
            const dd=[a,a+1,a+2,a+3,b-3,b-2,b-1,b,c+1,c,c-1,c-2,d+2,d+1,d,d-1];
            return(looping1(dd))
        }
    }
    const colorlooping=(ind,lst,lst1,lst2)=>{
        

        if ((~[0,1,2,3,4,5,6,7].indexOf(diffcases))<0){
            if ((~lst.indexOf(ind))<0){
                return(selectyours[0])
            }
            else{
                return(selectyours[1])
            }
        }
        if ((~[8].indexOf(diffcases))<0){
            if ((~lst.indexOf(ind))<0){
                return(selectyours[1])
            }
            else if((~lst1.indexOf(ind))<0){
                return(selectyours[2])
            }
            else{
                return(selectyours[0])
            }
        }
        if ((~[9,10].indexOf(diffcases))<0){
            if ((~lst.indexOf(ind))<0){
                return(selectyours[1])
            }
            else if((~lst1.indexOf(ind))<0){
                return(selectyours[4])
            }
            else if((~lst2.indexOf(ind))<0){
                return(selectyours[2])
            }
            else{
                return(selectyours[0])
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
    const researchTitles=[0,1,2,3,4,5,6,7,8,9,10]
    const xx=[0,1,2,3]
    const colorselector=['#6495ED','#CCCCFF','#00FF00','#FF00FF','#C0C0C0','#FFEFD5 ','#66BB55','#CCFF33','#666699','#99FFCC','#6699FF','#FFCC66','#666666','#db7093','#bc8f8f','#f4a460']

    const selectyours=xx.map((item)=>{
        const rand=colorselector[Math.floor(Math.random() * colorselector.length).toFixed()];
        var index = colorselector.indexOf(rand);
            if (index > -1) { 
            colorselector.splice(index, 1);
            }
            return( rand)
        })
    
    const diffcases=researchTitles[Math.floor(Math.random() * researchTitles.length.toFixed())]
    const sumofvalues=a+b+c+d;
    const helloo=()=>{
        console.log(diffcases)
        const lst=['corners','center','top-left','top-right','bottom-left','bottom-right','top-bottom middle value','left-right middle value','cross-count','each row','each coloumn']
        return(lst[diffcases])
    }
 
    const mainfn=(a,b,c,d,e)=>{   
        return( 
            <div>        
        <table  className='GFG'>
            <tr  className='GFG'>
                <td style={{backgroundColor:selectcolor(1),color:'black'}}>{a[0]}</td>
                <td style={{backgroundColor:selectcolor(2),color:'black'}}>{a[1]}</td>
                <td style={{backgroundColor:selectcolor(3),color:'black'}}>{a[2]}</td>
                <td style={{backgroundColor:selectcolor(4),color:'black'}}>{a[3]}</td>
            </tr>
            <tr>
                <td style={{backgroundColor:selectcolor(5),color:'white'}}>{b[0]}</td>
                <td style={{backgroundColor:selectcolor(6),color:'white'}} >{b[1]}</td>
                <td style={{backgroundColor:selectcolor(7),color:'white'}}>{b[2]}</td>
                <td style={{backgroundColor:selectcolor(8),color:'white'}}>{b[3]}</td>
            </tr>
            <tr>
                <td style={{backgroundColor:selectcolor(9),color:'white'}}>{c[0]}</td>
                <td style={{backgroundColor:selectcolor(10),color:'white'}}>{c[1]}</td>
                <td style={{backgroundColor:selectcolor(11),color:'white'}}>{c[2]}</td>
                <td style={{backgroundColor:selectcolor(12),color:'white'}}>{c[3]}</td>
            </tr>
            <tr>
                <td style={{backgroundColor:selectcolor(13),color:'white'}}>{d[0]}</td>
                <td style={{backgroundColor:selectcolor(14),color:'white'}}>{d[1]}</td>
                <td style={{backgroundColor:selectcolor(15),color:'white'}}>{d[2]}</td>
                <td style={{backgroundColor:selectcolor(16),color:'white'}}>{d[3]}</td>
            </tr>
            </table>
            <h1>sum of<span> {helloo()} </span>values is <span>{sumofvalues} </span></h1>
            </div>
        
        )

    }

    const common=()=>{
        const cc=4;
        if (cases1(cc)){
            return(mainfn([a,b,c,d],[d+3,c-3,b-1,a+1],[b-2,a+2,d+2,c-2],[c-1,d+1,a-1,b+1]))
        }
        else{
            const cc=5
            if(cases1(cc)){
                return(
                    mainfn([a,b,c,d],[d+1,c-1,b-3,a+3],[b-2,a+2,d+2,c-2],[c+1,d-1,a+1,b-1])
                )
            }
            else{
                return(<h1>csnot able to create</h1>)
            }
        }

    }
    if ((a!==b) && (a!==c) && (a!==d) && (b!==c) && (b !==d) && (c!==d)){
        const cc=0
        if (cases1(cc)){
            return(
               mainfn([a,b,c,d],[d+1,c-1,b-3,a+3],[b-2,a+2,d+2,c-2],[c+1,d-1,a+1,b-1]) 
            ) 
        }
        else{
            const cc=1;
            if (cases1(cc)){
                return(mainfn([a,b,c,d],[d-1,c+1,b+3,a-3],[b+2,a-2,d-2,c+2],[c-1,d+1,a-1,b+1]))
            }
            else{
                const cc=2;
                if (cases1(cc)){
                    return(mainfn([a,b,c,d],[d-3,c+3,b+1,a-1],[b+2,a-2,d-2,c+2],[c+1,d-1,a+1,b-1]))
                }
                else{
                    const cc=3;
                    if (cases1(cc)){
                        return(mainfn([a,b,c,d],[d+3,c-3,b-1,a+1],[b-2,a+2,d+2,c-2],[c-1,d+1,a-1,b+1]))
                    }
                    return(common())
                    
                }

            }
            }    
    }
    else{
        return(common())}


/*
      const colorselector=['#6495ED','#CCCCFF','#00FF00','#FF00FF','#C0C0C0','#FFEFD5 ','#66BB55','#CCFF33','#666699','#99FFCC','#6699FF','#FFCC66','#666666','#db7093','#bc8f8f','#f4a460']
        const selectyours=xx.map((item)=>{
            return(colorselector[Math.floor(Math.random() * researchTitles.length)] )
        })
style={{backgroundColor:selectcolor(2,diffcases)}}
return(

                <div>
                    <h1 className='bondr'>= = = = = = = =  =</h1>
                    <h1><span> || </span>{a}<span> | </span> {b} <span> | </span>{c}<span> | </span>{d}<span> || </span></h1>
                    <span className='init'>__ __ __ __  __</span>
                    <h1><span> || </span>{d-3}<span> | </span>{c+3}<span> | </span>{b+1}<span> | </span>{a-1}<span> || </span></h1>
                    <h1><span> || </span>{b+2}<span> | </span>{a-2}<span> | </span>{d-2} <span> | </span>{c+2}<span> || </span></h1>
                    <h1><span> || </span>{c+1}<span> | </span>{d-1}<span> | </span>{a+1}<span> | </span>{b-1}<span> || </span></h1>
                    <h1 className='bondr1'>= = = = = = = =  =</h1>
                    
                </div>
                )
*/   
    
    
}

