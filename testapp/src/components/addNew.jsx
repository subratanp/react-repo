import React, { Component } from 'react';
import Newcomp from "./newComp"

class Addnew extends Component {
    state = { 

       newcomp:[   ],
       

       

     }
   
     cont_style={

        

     }

     
     
     itm_style= {

          display:"grid"



     }

     btn_cont={
         paddingTop:"5px",
         paddingLeft:"5px"
     }

     btn_stl={
            width:"120px",
            height:"40px",
            color:"blue",
            fontSize:".8em",
            fontWeight:"bold"
            
            


     }


     incr=(z)=>{ var val=z;
           
           var oblt=[...this.state.newcomp];
           var dst=oblt.sort((x,y)=>{ return x.id - y.id });
           var get_itm=dst.find((x)=>{ return x.id==z })
           var itm_index=dst.indexOf(get_itm);
           console.log("Value : " + dst[itm_index].val);
           
           var tvalue= dst[itm_index].val;
           tvalue=tvalue+1;
           dst[itm_index].val=tvalue
           console.log("Index: " + itm_index) ;
           console.log("Value : "   + tvalue);
           console.log(dst)
           this.setState({newcomp:dst});


           
    
    }

   click_add=()=>{     
           var lt= this.state.newcomp.length;
           var dst=this.state.newcomp.sort((x,y)=>{ return x.id - y.id })
           
        if (lt==0){ 
             dst.push({id:0,key:0,val:0});
             this.setState({newcomp:dst})

           }
        if(lt>0){

             dst.push({ id:dst[lt-1].id+1,key:dst[lt-1].id+1,val:0    });
             this.setState({newcomp:dst});



        }

            //alert(this.state.newcomp.length)
          

   }

    render() { 
        return (  

         <div>
               <div style={this.btn_cont}>   <button style={this.btn_stl} onClick={this.click_add}> Add New </button>   <button style={this.btn_stl}> Reset All </button>  </div>
               
               <div style={this.itm_style}> {this.state.newcomp.map((x)=>{ return  <Newcomp itm_id={x.id} itm_key={x.key} itm_val={x.val} key={x.key} incr_call={this.incr}></Newcomp>})}     </div>        
            

         </div>


        );
    }
}
 
export default Addnew;