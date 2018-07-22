import React, { Component } from 'react';
import {connect} from 'react-redux';

class AnOtherComponent extends Component {
    render() {
        return (
            <div>
                <h1>Anothr Component</h1>
                <p>name is: {this.props.data.name}</p>
            </div>
        )
    }
}
function mapStateToProps (data){
    return {
        data
    }
}

export default connect(mapStateToProps,null)(AnOtherComponent);