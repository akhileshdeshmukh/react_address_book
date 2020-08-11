import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';

class MenuComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             color:this.props.color
        }
    }
    

    onChange()
    {
        if(this.props.color)
        this.props.onchangeColor(false)
        else
        this.props.onchangeColor(true)
    }
    

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                    {isUserLoggedIn && <li><Link className="nav-link text-white" to="/contact">Home</Link></li>}
                    </ul>
                    <ul className="navbar-nav">
                    {isUserLoggedIn && <li><Link className="nav-link text-white" to="/addcontact/-1">Create New</Link></li>}
                    </ul>

                    <ul className="navbar-nav">
                    {!isUserLoggedIn && <li><Link className="nav-link text-white" to="/registernewuser">Register new user</Link></li>}
                    </ul>

                    <ul className="navbar-nav">
                    {!isUserLoggedIn && <li><Link className="nav-link text-white" to="/forgotpassword">forgot Password</Link></li>}
                    </ul>


                    <ul className="navbar-nav" style={{ textAlign:"right" }}>                        
                         <li> <input type="button" onClick={this.onChange.bind(this)} value="Day/Night"/> </li>
                    </ul>
                    

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link text-white" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link text-white" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(MenuComponent)