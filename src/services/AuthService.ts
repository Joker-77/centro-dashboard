/* eslint-disable */
import api from "./Api";
import TokenService from "./TokenService";

class AuthService {
  login(payload: any) {
    return api
      .post("/Users/Login", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response: any) => {
        if (response && response.data) {
          let resp = response.data.data;
          let user = resp;
          TokenService.setcurrentUser(user);
          return user;
        }
      });
  }

  logout() {
    TokenService.removecurrentUser();
  }

  getCurrentUser() {
    return TokenService.getUser();
  }
}
export default new AuthService();
