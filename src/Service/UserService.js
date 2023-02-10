//Utils
import request from '../utils/request.js';

class UserService {

    static async createUser(id, data) {
        return  request('PUT', `users/${id}.json`, data);
    };
    static async  getUser(id) {
        return request('GET', `users/${id}.json`);
    };
}
export default UserService;