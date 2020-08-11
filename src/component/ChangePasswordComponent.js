import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService'

class ChangePasswordComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             gmail:'',
             password:''
        }

        this.handleChange=this.handleChange.bind(this)
        this.ChangePassword=this.ChangePassword.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }
    ChangePassword()
    {
        AuthenticationService.ChangePassword(this.state.gmail,this.state.password)
                .then(response=> {
                    // eslint-disable-next-line
                    if(response.data=='password changed')
                    {   
                     this.props.history.push('/')
                    }
            })
    }

    

    render() {
        return (
            <div >
                <h3 style={{backgroundColor:'orange'}}>Change Password</h3>
                <br/>

            <div class="container"  style={{backgroundColor:'#C0C0C0', width:'20%' ,height:'100%' ,textAlign:"left"}}>
                <br></br>
                <form>
                <label>Gmail</label>
                <input type="text" name="gmail" class="form-control" value={this.state.gmail} onChange={this.handleChange} required="required" title="gmail"/>
                <br/>
                <label>Password</label>
                <input type="text" name="password" class="form-control" value={this.state.password} onChange={this.handleChange} required="required" title="gmail"/>
                <button type="button" class="btn btn-large btn-block btn-success" onClick={this.ChangePassword} >change password</button>
                </form>
                <br/>
            </div>
            </div>
        )
    }

}

export default ChangePasswordComponent
