import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://sleepy-waters-05131.herokuapp.com/";

class AuthService {
  
  login(username, password) {
    return axios
      .post(API_URL + "token-auth/", {
        headers: authHeader(),
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  // logout() {
  //   localStorage.removeItem("user");
  // }

  // register(username, password) {
  //   return axios.post(API_URL + "users/users/", {
  //     headers: authHeader(),
  //     username,
  //     password
  //   });
  // }
}

export default new AuthService();