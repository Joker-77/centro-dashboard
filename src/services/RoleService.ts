/* eslint-disable */
import api from "./Api";

class RoleService {
  _rolesUrl: string = "/Roles";
  getAll() {
    return api
      .get(`${this._rolesUrl}/GetAll`)
      .then((response: any) => {
        if (response.data.succeeded) {
          return response.data.data;
        }
      })
      .catch((e) => {
        return e;
      });
  }
}

export default new RoleService();
