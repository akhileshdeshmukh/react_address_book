import axios from 'axios'


//const CONTACT_API_URL = 'http://192.168.43.79:8080'
const CONTACT_API_URL = 'http://localhost:8080'
export const USER_ID_SESSION_ATTRIBUTE_ID = 'authenticatedUser'


class ContactDataService {

    retrieveAllContact() {
        let userid = sessionStorage.getItem(USER_ID_SESSION_ATTRIBUTE_ID)
        console.log('userid'+userid)
        return axios.get(`${CONTACT_API_URL}/contact/${userid}`);
    }

    
    sortAllContactByName(val) {
        let userid = sessionStorage.getItem(USER_ID_SESSION_ATTRIBUTE_ID)
        console.log('userid'+userid)
        //let last='lastName'
        return axios.get(`${CONTACT_API_URL}/contact/${userid}/${val}`);
    }

    searchAllContactByName(val,name) {
        let userid = sessionStorage.getItem(USER_ID_SESSION_ATTRIBUTE_ID)
        console.log(val+"   "+name)
        //let last='lastName'
        return axios.get(`${CONTACT_API_URL}/contact/${userid}/${val}/${name}`);
    }


    
    deletecontact(id)
    {
        return axios.delete(`${CONTACT_API_URL}/contact/${id}`);
    }

    addNewContact(Contacts)
    {
        let userid = sessionStorage.getItem(USER_ID_SESSION_ATTRIBUTE_ID)
        console.log(Contacts)
        return axios.put(`${CONTACT_API_URL}/contact/${userid}`,Contacts);

    }

    updateContact(Contacts)
    {
        let userid = sessionStorage.getItem(USER_ID_SESSION_ATTRIBUTE_ID)
        console.log('userid'+userid)
        return axios.put(`${CONTACT_API_URL}/contact/update/${userid}`,Contacts);

    }

    retrieveContact(cid)
    {
        return axios.get(`${CONTACT_API_URL}/contact/update/${cid}`);
    }
}

export default new ContactDataService()
