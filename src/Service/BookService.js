import request from '../utils/request';
import store from 'store';

class BookService {
    static creteBook(data) {
        const userId = store.get('user').id;
        return  request('POST',`booking/${userId}.json`, data);
    };
    static getUserBook() {
        const userId = store.get('user').id;
        return  request('GET',`booking/${userId}.json`);
    };
    static getAdminBook() {
        return request('GET', 'booking.json')
    };
    static editBook(userId, bookId, data) {
        return request('PUT',`booking/${userId}/${bookId}.json`, data)
    };

}
export default BookService;