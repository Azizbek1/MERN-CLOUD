import axios from 'axios'
// import {useNavigate} from "react-router-dom";
import {setUser} from "../reducers/userReducer";
import {API_URL} from "../config";

export const login =  (name, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/users/login`, {
                name,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
           
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/users/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            window.location = '/'
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}



