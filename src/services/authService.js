import jwtDecode from 'jwt-decode';
import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/auth';
const tokenKey = 'token';

http.setJwt(getJwt());

export async function login(email, password) {
    const { data: jwt } = await http.post(apiEndpoint, {email, password});
    localStorage.setItem(tokenKey, jwt);
}

// for register form.
// after register, auto login with the jwt.
export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
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

export function getJwt(){
    return localStorage.getItem(tokenKey);
}

export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt,
}