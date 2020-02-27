import React, { Component } from 'react';
import Childform from "./childComp" ;



class Addform extends Component {
    state = { 
        comps:[
              {id:1 ,key:1,val:0  },
              {id:2 ,key:2,val:0   },
              { id:3 ,key:3,val:0  },
              { id:4 ,key:4,val:0  } 
            
            
            ]

     }
     
       
    clickplus=()=>{ var lt=this.state.comps.sort((x,y)=>{ return x.id - y.id;  }); 
                var st= {  
                        id: lt[lt.length-1].id+1,
                        key:lt[lt.length-1].id+1,  
                        val:0


                }

                   //var nrt=this.state.comps.push((st);
                   lt.push(st);
                   this.setState({comps:lt});



}

clickreset =()=> {  var curstate=this.state.comps;  var newstate=curstate.map((x)=>{x.val=0;  return x;}) ;   this.setState({comps:[{id:1 ,key:1,val:10  }]})    }

clicktest=()=>{    }


    
    resp=(x)=>{ var nstate=this.state.comps.filter( (n)=>{ return n!==x;}); this.setState({comps:nstate})  } ;

    render (){ 
        return (  
            <div> 
                <div style={{paddingTop:"10px",paddingLeft:"10px"}}>  
                   <button style={{width:"100px",height:"40px"}} onClick={this.clickplus}> Plus Me   </button>
                   <button style={{width:"100px",height:"40px"}} onClick={this.clickreset}> Reset Me   </button>


                </div>
                <br>
                </br>
                <br></br>

             <div>
                {this.state.comps.map( (x)=>{ return <Childform val={this.resp} key={x.key} itm={x.id} data={x.val}></Childform>   }  )}
             
          </div>


             </div>
        

        )

        ;
        }
}
 
export default Addform;





