import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService'
//import ContactDataService from '../service/ContactDataService'

 class RegisterUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'',
            gmail:'',
            password:''
        }
        this.onSubmit=this.onSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
        //this.onClear=this.onClear.bind(this)
    }





    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    onSubmit() {
            let User = {
                name:this.state.firstName,
                gmail:this.state.gmail,
                password:this.state.password
    
            }
            
            AuthenticationService.addNewUser(User)
                .then(() => this.props.history.push('/'))
        } 

    render() {
        return (
            <div>

                <h3 style={{backgroundColor:'orange' }}>Create New</h3><br/>
                <center class="container" style={{width:'30%' ,height:'100%' ,textAlign:"left",backgroundColor: 'gray'}}>
                    
                <div>
                <form><br/>
                    
                    <label> Name</label> 
                    <input type="text" name="name" id="name" class="form-control" value={this.state.name} onChange={this.handleChange} required placeholder="Enter Name"/>
                    <br/>
                             
                    <label>Gmail</label>
                    <input type="email" name="gmail" id="gmail" class="form-control" value={this.state.gmail} onChange={this.handleChange} required placeholder="abc@gmail.com"/>
                    <br/>
                    <label>Password</label>
                    <input type="password" name="password"  id="password" class="form-control" value={this.state.password}  onChange={this.handleChange} required placeholder="*******"/>      
                    <br/>
                    <button type="button" className="btn btn-success" onClick={this.onSubmit}>Save</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="reset" className="btn btn-info" onClick={()=>window.location.reload(false)} >Clear</button>
                <br/><br/>
                
                </form>
                
                </div>
                </center>
            </div>
        )
    }

}

export default RegisterUserComponent
