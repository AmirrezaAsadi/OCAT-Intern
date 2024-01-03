import Axios from '../utils/http.config';

export class UserService {
  static submit(user) {
    try {

      return Axios.post(`/login/submit`, user)
        .then(response => response.data);
    }
    catch (err) {

      if (err.response) {
        throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
      } else {
        throw new Error(err.message);
      }
    }
  }
}
