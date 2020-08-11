import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService'

 class CheckOtpComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             OTP:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.verifyOtp=this.verifyOtp.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }
    verifyOtp()
    {
        AuthenticationService.verifyOtp(this.state.OTP)
                .then(response=> {
                    // eslint-disable-next-line
                    if(response.data==1)
                    {   
                     this.props.history.push('/ChangePassword')
                    }
            })
    }

    

    render() {
        return (
            <div>
                
                <h3 style={{backgroundColor:'orange'}}>Otp verification</h3>
                <br/>
            <div class="container" style={{ width:'20%' ,height:'100%' ,textAlign:"left",backgroundColor:'#C0C0C0'}}> 
                <br></br>
                <form>
                <label>Enter OTP</label>
                <input type="number" name="OTP" class="form-control" value={this.state.OTP} onChange={this.handleChange} required title="Otp"/>
                <br/>
                <button type="button" class="btn btn-large btn-block btn-success" onClick={this.verifyOtp} >Conform OTP</button>
                </form>
                <br/>
            </div>
        </div>
        )
    }
 }

export default CheckOtpComponent
