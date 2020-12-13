import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://sleepy-waters-05131.herokuapp.com/';

class MessagesService {

  getMessageById(id) {
    return axios.post(API_URL + `messages/messages/?contact_id=${id}`, {headers: authHeader() })
  }

}

export default new MessagesService();