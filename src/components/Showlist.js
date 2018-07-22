import React, { Component } from 'react';


class Showlist extends Component {
    
    Constructor(props){
        alert("sdfasdf");
        console.log("sdf" + props);
    }
    render() {
       
        return (
            
               <tr>
                   <td>{this.props.data.name}</td>
                   <td>{this.props.data.gender}</td>
                   <td>{this.props.data.country}</td>
                   <td>{this.props.data.lang}</td>
                   <td>
                     <button onClick={() => 
                         this.props.func(this.props.data.name)}>delete </button>
                    </td>
                   <td>{this.props.data.lang}</td>
               </tr>
            
        )
    }
}

export default Showlist;