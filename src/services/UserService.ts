/* eslint-disable */
import api from "./Api";
import TokenService from "./TokenService";

class UserService {
  _usersUrl: string = "/Users";
  getUsers() {
    return api
      .get(`${this._usersUrl}/GetListUsers`)
      .then((response: any) => {
        if (response.data.succeeded) {
          return response.data.data;
        }
      })
      .catch((e) => {
        return e;
      });
  }
  createUser(form: any) {
    return api
      .post(`${this._usersUrl}/Register`, form, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response: any) => {
        if (response.data.status == "Succsess") {
          return response.data.message;
        }
      })
      .catch((e) => {
        return e;
      });
  }
}

export default new UserService();
