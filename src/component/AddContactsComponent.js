import React, { Component } from 'react'
import ContactDataService from '../service/ContactDataService'

class AddContactsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contactid: this.props.match.params.id,
            firstName:'',
            lastName:'',
            gmail:'',
            phoneNo:null
        }
        this.onSubmit=this.onSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.onClear=this.onClear.bind(this)
    }

    onClear()
    {
        // this.setState ={
        //         firstName:'',
        //         lastName:'',
        //         gmail:'',
        //         phoneNo:null
            
        // }

       // this.handleChange()
    }

    componentDidMount() {

        console.log(this.state.contactid)

        // eslint-disable-next-line
        if (this.state.contactid == -1) {
            return
        }

        ContactDataService.retrieveContact(this.state.contactid)
            .then(response => this.setState({
            firstName:response.data.firstName,
            lastName:response.data.lastName,
            gmail:response.data.gmail,
            phoneNo:response.data.phoneNo
            }))
            console.log(this.state.firstName)
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
        // eslint-disable-next-line
        if (this.state.contactid == -1) {
            let Contacts = {
                //contactid: this.state.contactid,
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                gmail:this.state.gmail,
                phoneNo:this.state.phoneNo
    
            }
            
            ContactDataService.addNewContact(Contacts)
                .then(() => this.props.history.push('/contact'))
        } else {
            let Contacts = {
                contactid: this.state.contactid,
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                gmail:this.state.gmail,
                phoneNo:this.state.phoneNo
    
            }
            ContactDataService.updateContact(Contacts)
                .then(() => this.props.history.push('/contact'))
        }
    }

    render() {
        return (
            <div>

                <h3 style={{backgroundColor:'orange' }}>Create New</h3><br/>
                <center class="container" style={{width:'30%' ,height:'100%' ,textAlign:"left",backgroundColor: 'gray'}}>
                    
                <div>
                <form><br/>
                    <label>Id</label>  
                    <input type="number" name="contactid" id="contactid" class="form-control" value={this.state.contactid} readOnly onChange={this.handleChange} required/>
                    <br/>
                    <label>First Name</label> 
                    <input type="text" name="firstName" id="firstName" class="form-control" value={this.state.firstName} onChange={this.handleChange} required placeholder="First Name"/>
                    <br/>
                             
                    <label>Last Name</label>
                    <input type="text" name="lastName" id="lastName" class="form-control" value={this.state.lastName} onChange={this.handleChange} required placeholder="last name"/>
                    <br/>
                    <label>Gmail</label>
                    <input type="email" name="gmail" id="gmail" class="form-control" value={this.state.gmail} onChange={this.handleChange} required placeholder="abc@gmail.com"/>
                    <br/>
                    <label>Phone Number</label>
                    <input type="number" name="phoneNo"  id="phoneNo" class="form-control" value={this.state.phoneNo}  min='999999999'  onChange={this.handleChange} required="required" placeholder="9730079743"/>      
                    <br/>
                    <button type="button" className="btn btn-success" onClick={this.onSubmit}>Save</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="reset" className="btn btn-info" onClick={()=>window.location.reload(false)}>Clear</button>
                </form>
                
                </div>
                </center>
            </div>
        )
    }

}

export default AddContactsComponent
