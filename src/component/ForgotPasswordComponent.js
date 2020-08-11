import React, { Component } from 'react'
//import ContactDataService from '../service/ContactDataService'
import AuthenticationService from '../service/AuthenticationService'

class ForgotPassword extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             gmail:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.verifyGmail=this.verifyGmail.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }
    verifyGmail()
    {
        AuthenticationService.verifyGmail(this.state.gmail)
                .then(response=> {
                    // eslint-disable-next-line
                    if(response.data=="success")
                    {   
                     this.props.history.push('/CheckOtp')
                    }
            })
    }

    

    render() {
        return (
            <div>
                <br/><br/>

            
            <div class="container" style={{backgroundColor:'#C0C0C0', width:'20%' ,height:'100%' ,textAlign:"left" }}>
            <br/>
            <form>
                <label>Gmail</label>
                <input type="email" name="gmail" class="form-control" value={this.state.gmail} onChange={this.handleChange} required="required" title="gmail"/>
                <br></br>
                <button type="button" class="btn btn-large btn-block btn-success" onClick={this.verifyGmail} >Get OTP</button>
                </form>
                <br/>    
            </div>
            
            </div>
        )
    }
}

export default ForgotPassword
