import React, { Component } from 'react'

export default class QueueSystem extends Component {
    constructor(props){
         super(props);
        this.state={
            queue :[{
                  id:1,
                  username:"naveed",
                  address:"Uaf",
                 
            }],
            ID:1,
            name:"",
            buttondisabled:false
        }
        
        this.onSubmit = this.onSubmit.bind(this);
        this.sets = this.sets.bind(this);
        
        
    }
     
    sets() {
        console.log("all users" )
        console.log(this.state.queue);

        
    }
   componentWillMount(){
    
        setInterval(this.sets,1000);
    }
  

    onSubmit(e){
        e.preventDefault();
        let prevQueue = this.state.queue;
        let myid = this.state.ID;
        if (myid =9) {
            alert("coupon has been distributed!")
            this.setState({
                buttondisabled:true
            })
        }
        else{
        myid = myid + 1;
        let obj = {
            id:myid,
            username:this.refs.username.value,
            address:this.refs.address.value
        }
        prevQueue.push(obj);
        this.setState({
            queue:prevQueue,
            ID:myid
        })}
  this.myForm.reset();
       
    }
    
    render() {
        return (
            <div>
                <form action="" onSubmit={(e) => this.onSubmit(e)} 
                ref={(el) => this.myForm = el }
                >
                <label htmlFor="">ID:</label>
                <input type="number" value={this.state.ID + 1} ref="ID" readOnly/>
                <br/>
                <label>name:</label>
                <input type="text" name="name" defaultvalue={this.state.name} ref="username"/> <br/>
                <label htmlFor="">Contact Address</label>
                <input type="text" name="contact" defaultvalue={this.state.name} ref="address"/> <br/>
                <br/>
                {this.state.buttondisabled ? 
                      <p>coupon has been distrubted</p>
                     :
                     <input type="submit" value="submit"/>
                     }
                
               
                </form>
            </div>
        )       
    }
}
