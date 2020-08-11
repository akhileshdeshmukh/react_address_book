import React, { Component } from 'react';
import ListContactComponent from './ListContactsComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import MenuComponent from './MenuComponent';
//import AuthenticationService from '../service/AuthenticationService';
import AuthenticatedRoute from './AuthenticatedRoute';
import AddContactsComponent from './AddContactsComponent'
import ForgotPassword from './ForgotPasswordComponent';
import CheckOtpComponent from './CheckOtpComponent';
import ChangePasswordComponent from './ChangePasswordComponent';
import RegisterUserComponent from './RegisterUserComponent';

class InstructorApp extends Component {

    constructor(props) {
        super(props)    
        this.state = {
             color:true,
             val:''
        }
        this.changeColor=this.changeColor.bind(this)
    }
    
    onchange(newcolor)
    {
        this.setState({
            color:newcolor
        });
        //console.log(this.state.color)
        this.changeColor();
    }

    changeColor()
    {
        if( this.state.color)
        this.setState({val:'white'})
        else
        this.setState({val:'black'})
        //console.log(this.state.val)        
    }

    render() {
        return (
            <div  style={{backgroundColor:this.state.val ,width:'100%'}} >
            <>
                <Router>
                    <>
                        <MenuComponent color ={this.state.color} onchangeColor={this.onchange.bind(this)} />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <Route path="/registernewuser" exact component={RegisterUserComponent} />
                            <Route path="/ChangePassword" exact component={ChangePasswordComponent} />
                            <Route path="/CheckOtp" exact component={CheckOtpComponent} />
                            <Route path="/forgotpassword" exact component={ForgotPassword} />
                            <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                            <AuthenticatedRoute path="/contact" exact component={ListContactComponent} />
                            <AuthenticatedRoute path="/addcontact/:id" exact component={AddContactsComponent} />
                        </Switch>
                    </>
                </Router>
            </>
            <br/><br/>
            </div>
        )
    }
}

export default InstructorApp