import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/';

class UserService {
  getUserData() {
    return axios.get(API_URL + 'users/current-user/', { headers: authHeader() });
  }

  getUserContacts() {
    return axios.get(API_URL + 'users/contacts/', { headers: authHeader() });
  }

  getAllUsers() {
    return axios.get(API_URL + 'users/users/', { headers: authHeader() });
  }
}

export default new UserService();