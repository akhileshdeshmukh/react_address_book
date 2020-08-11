import React, { Component } from 'react'
import ContactDataService from '../service/ContactDataService.js';


class ListContactComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            message: null,
            search:'',
            enable:true
        }
        this.deleteContactClicked = this.deleteContactClicked.bind(this)
        this.updateContactClicked = this.updateContactClicked.bind(this)
        //this.addContactClicked = this.addContactClicked.bind(this)
        this.refreshContacts = this.refreshContacts.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.searchByFirstName=this.searchByFirstName.bind(this)
        this.searchByLastName=this.searchByLastName.bind(this)
       // this.sortByName=this.sortByName.bind(this)
    }

    componentDidMount() {
        this.refreshContacts();
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
        if(this.state.search!=null)
        {
            this.setState({ enable:false })
        }
    }


    refreshContacts() {
        ContactDataService.retrieveAllContact()//HARDCODED
            .then(
                response => {
                    //console.log(response);
                    this.setState({ contacts: response.data })
                }
            )
    }

    deleteContactClicked(id) {
        ContactDataService.deletecontact(id)
            .then(
                response => {
                    this.setState({ message: `Delete of contact ${id} Successful` })
                    this.refreshContacts()
                }
            )

    }

    updateContactClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/addcontact/${id}`)
    }

    searchByFirstName()
    {
        ContactDataService.searchAllContactByName(this.state.search,'first')//HARDCODED
            .then(
                response => {
                    //console.log(response);
                    this.setState({ contacts: response.data })
                }
            )
    }

    searchByLastName()
    {
        ContactDataService.searchAllContactByName(this.state.search,'last')//HARDCODED
            .then(
                response => {
                    //console.log(response);
                    this.setState({ contacts: response.data })
                }
            )
    }

    sortByName(val)
    {
        ContactDataService.sortAllContactByName(val)//HARDCODED
            .then(
                response => {
                    //console.log(response);
                    this.setState({ contacts: response.data })
                }
            )
    }

    render() {
        return (
            <div className="container">
                <br/>
                <h3 style={{backgroundColor: 'orange'}}>All Contacts</h3>
                <br/>
                <input  type="search" name="search" id="search" placeholder="Search..." onChange={this.handleChange}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" class=" btn-info " disabled={this.state.enable} onClick={this.searchByFirstName} >First Name</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" class=" btn-info " disabled={this.state.enable} onClick={this.searchByLastName} >Last Name</button>
                <br/><br/>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container" style={{backgroundColor: '#C0C0C0'}}>
                    <table className="table">
                        <thead style={{backgroundColor:'#66CC00'}}>
                            <tr>
                                <th onClick={()=>this.sortByName('firstName')}>First Name</th>
                                <th onClick={()=>this.sortByName('lastName')} >Last Name</th>
                                <th>Gmail</th>
                                <th>Phone</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contacts.map(
                                    contacts =>
                                        <tr key={contacts.contactid}>
                                            <td>{contacts.firstName}</td>
                                            <td>{contacts.lastName}</td>
                                            <td>{contacts.gmail}</td>
                                            <td>{contacts.phoneNo}</td>
                                            <td><button className="btn btn-info" onClick={() => this.updateContactClicked(contacts.contactid)}>Correct</button></td>
                                            <td><button className="btn btn-danger" onClick={() => this.deleteContactClicked(contacts.contactid)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    
                </div>
            </div>
        )
    }
}

export default ListContactComponent
