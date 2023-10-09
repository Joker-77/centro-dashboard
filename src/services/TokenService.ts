/* eslint-disable prefer-const */
class TokenService {
  static getLocalRefreshToken = () => {
    let currentUser = JSON.parse(localStorage.getItem("currentUser")!);
    return currentUser?.refresh;
  };

  static getLocalAccessToken = () => {
    let currentUser = JSON.parse(localStorage.getItem("currentUser")!);
    return currentUser?.token;
  };

  static updateLocalAccessToken = (token: any) => {
    let currentUser = JSON.parse(localStorage.getItem("currentUser")!);
    currentUser.token = token;
    localStorage.setItem("x-user-token", JSON.stringify(token));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  };

  static setcurrentUser = (currentUser: object | any) => {
    currentUser.isLoggedIn = true;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem("x-user-token", JSON.stringify(currentUser?.token));
  };

  static removecurrentUser() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("x-user-token");
    localStorage.removeItem("userDetails");
  }

  static getUser() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser")!);
    return currentUser;
  }
}

export default TokenService;
