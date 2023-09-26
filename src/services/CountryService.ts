/* eslint-disable */
import api from "./Api";
import TokenService from "./TokenService";

class CountryService {
  _countriesUrl: string = "/CountryLookup";
  getAll() {
    return api
      .get(`${this._countriesUrl}/GetAll`)
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

export default new CountryService();
