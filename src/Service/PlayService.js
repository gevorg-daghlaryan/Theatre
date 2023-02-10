import request from '../utils/request';

class PlayService {
    static cretePlay(data) {
        return  request('POST','plays.json', data);
    };
    static getPlays() {
        return request('GET','plays.json');
    };
    static getPlay(id) {
        return request('GET',`plays/${id}.json`);
    };
    static editPlay(id, data) {
        return request('PUT',`plays/${id}.json`, data);
    };
    static deletePlay(id) {
        return request('DELETE', `plays/${id}.json`);
    };
}
export default PlayService;