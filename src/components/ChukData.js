import React, { Component } from 'react';
import {connect} from 'react-redux';
import {dataPicker} from './redux/action';

class ChukData extends Component {
    render() {
        return (
            <div> 
             <form onSubmit={
                  (e) =>{
                     e.preventDefault();
                     alert("alert from onsubmit");
                     let obj = {
                      name:this.refs.name.value,
                      lang:this.refs.lang.value,
                      gender:this.refs.genders.value,
                      country:this.refs.country.value
                     }
                     console.log("data"+obj)
                     this.props.dataPicker(obj);
                  } 

             }>
                 <label>enter name</label>
                 <input type="text" ref="name" />
                 
                 <input type="checkbox" check="check" value="urdu" ref="lang"/> urdu
                  <input type="checkbox" name="check" value="eng"/> english
                  <br/>
                 <input type="radio" name="gender" value="M" ref="genders"/>Male
                 <input type="radio" name="gender" value="F" ref="genders"/>Female

                 <select name="countries" id="" ref="country">
                 <option value="pak">pakistan</option>
                 <option value="ind">india</option>
                 </select>

                 <input type="submit" value="submit" />
               
            </form>   
            </div>
        )
    }
}

export default connect(null,{dataPicker})(ChukData);