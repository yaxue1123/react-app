import jwtDecode from 'jwt-decode';
import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/auth';

export async function login(email, password) {
    const { data: jwt } = await http.post(apiEndpoint, {email, password});
    localStorage.setItem('token', jwt);
}

// for register form.
// after register, auto login with the jwt.
export function loginWithJwt(jwt) {
    localStorage.setItem("token", jwt);
}

export function logout() {
    localStorage.removeItem('token');
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem("token");
        // return the user.
        return  jwtDecode(jwt);
      }
      catch (ex) {
        // for situation of anonymous users.
        // avoid app crush.
        // do nothing.
        return null;
      }
}

export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
}