import React, { Component } from 'react';
import {connect} from 'react-redux';
import Showlist from './Showlist';
import {mydataedit} from './redux/action';
class ShowData extends Component {
    constructor(props){
        super();
        console.log("props is",props);
    }
    
    render() {
        return (
            <div>
                <table>
                    
                <tbody>
                    <tr>
                        <th>name:</th>
                        <th>gender:</th>
                        <th>contry:</th>
                        <th>language</th>
                        <th>update:</th>
                        <th>delete:</th>
                    </tr>
                   
                {
                    this.props.data.mydata.map((myarray,index)=>
                     <Showlist key={index} data={myarray} func={this.props.mydataedit} />
                    )
                }
                </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps (data){
            console.log(data);
             return {
                 data:data
             }
}
export default connect(mapStateToProps,{
    mydataedit
})(ShowData);