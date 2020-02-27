import React, { Component } from 'react';



class Childform extends Component {
    state = { 
       count_t1:this.props.data,
       count_t2:this.props.data 

     }
    parent_style={
         display:"grid",
         "grid-template-columns":"180px"



    }

    child_style={

        display:"grid",
        "grid-template-columns":"120px 120px 120px 120px"
        

    }
    componentWillReceiveProps(nextProps){

       this.setState({count_t1:nextProps.data});
       this.setState({count_t2:nextProps.data});

    }
    valuechange_1=(x)=> { this.setState({count_t1:this.target.value})   }
    valuechange_2=(x)=> { this.setState({count_t2:this.target.value})   }

    incr_t1=()=>{ this.setState({count_t1:this.state.count_t1+1});  }
    incr_t2=()=>{ this.setState({count_t2:this.state.count_t2+1});  }
    
    render() { 
        return (  
            <div style={this.parent_style}>
                  <div style={this.child_style}> <span>Item1</span>   
                         <textarea cols="20"  style={{width:"100px"}} value={this.state.count_t1} onChange={this.valuechange_1}>  </textarea>
                         <button onClick={this.incr_t1}> Click Me</button>
                         <button onClick={()=>{this.props.val(this.props.itm)}}>Press Me</button>
        <span>{this.state.count_t1}</span>
                   </div>
                   <div style={this.child_style}> <span>Item2</span>   
                         <textarea cols="20" style={{width:"100px"}} value={this.state.count_t2} onChange={this.valuechange_2}>   </textarea>
                         <button onClick={this.incr_t2}> Click Me</button>
                         <button>Step Me</button>

                   </div>


            </div>



        );
    }
}
 
export default Childform;
