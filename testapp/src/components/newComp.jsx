import React, { Component } from 'react';

class Newcomp extends Component {
    state = {  }

    screen_parent={
      paddingTop:"100px",
      marginTop:"100px"


    }
    parent_style= {  
          display:"grid",
          gridTemplateColumns:"140px 90px 90px",
          paddingTop:"5px",
          paddingLeft: "5px"
      


    }

    btn_style={
         
         width:"80px",
         height:"40px",
         
              


    }
    txt_style={
       width:"120px",
    


    }
    render() { 
        return (  
           <div> 
                <div style={this.parent_style}>
                   <textarea style={this.txt_style} value={this.props.itm_val}>   </textarea>
                   <button style={this.btn_style} onClick={()=>{this.props.incr_call(this.props.itm_id)}}>Increment</button>
                   <button style={this.btn_style}>Delete</button>

                </div>


           </div>



        );
    }
}
 
export default Newcomp;