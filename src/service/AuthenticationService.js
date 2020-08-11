import axios from 'axios'

//const API_URL = 'http://192.168.43.79:8080'
const API_URL = 'http://localhost:8080'

export const USER_ID_SESSION_ATTRIBUTE_ID = 'authenticatedUser'

class AuthenticationService {

    addNewUser(user)
    {
        return axios.post(`${API_URL}/user/`,user);

    }

    executeBasicAuthenticationService(gmail, password) {
        console.log(gmail)
        return axios.post(`${API_URL}/user/validate`,{gmail,password})
    }

    verifyGmail(gmail)
    {
        console.log(gmail)
        return axios.get(`${API_URL}/user/forgotPassword/${gmail}`)   
    }

    verifyOtp(otp)
    {
        console.log(otp)
        return axios.get(`${API_URL}/user/conformOtp/${otp}`)   
    }
    ChangePassword(gmail,password)
    {
        console.log(gmail)
        console.log(password)
        return axios.post(`${API_URL}/user/setPassword`,{password,gmail});   
    }

    registerSuccessfulLogin(userId) {
        sessionStorage.setItem(USER_ID_SESSION_ATTRIBUTE_ID, userId)
    }



    logout() {
        sessionStorage.removeItem(USER_ID_SESSION_ATTRIBUTE_ID);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_ID_SESSION_ATTRIBUTE_ID)
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_ID_SESSION_ATTRIBUTE_ID)
        if (user === null) return ''
        return user
    }

    
}

export default new AuthenticationService()