
import {API_KEY} from '../config.js'
import request from '../utils/request.js';

class AuthService {
    static signUp (data) {
        return request('POST', `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, data);
    };

    static signIn (data) {
        return request('POST', `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, data);
    };
}

 export default AuthService;