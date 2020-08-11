import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            gmail : '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {

        AuthenticationService
            .executeBasicAuthenticationService(this.state.gmail, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLogin(response.data)
                this.props.history.push(`/contact`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
        
    }

    render() {
        return (
            <div>
                <h2 style={{backgroundColor:'orange' }}>Login</h2>
                <br/><br/>
                <div className="container" style={{width:'19%' ,height:'100%' ,textAlign:"left",backgroundColor:'#C0C0C0' }}>
                <br/>
                    <form>
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    User Name : <input type="text" name="gmail" value={this.state.gmail} onChange={this.handleChange} required placeholder='User Name / gmail' /><br></br><br></br>
                    Password  : <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required /><br></br><br></br>
                    <button type="button" className="btn btn-success" onClick={this.loginClicked} >Login</button>   
                    </form>
                    <br/>
                </div>
            </div>
        )
    }
}

export default LoginComponent