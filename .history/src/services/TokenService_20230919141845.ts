/* eslint-disable prefer-const */
class TokenService {
  static getLocalRefreshToken = () => {
    let currentUser = JSON.parse(localStorage.getItem("currentUser")!);
    return currentUser?.refresh;
  };

  static getLocalAccessToken = () => {
    let currentUser = JSON.parse(localStorage.getItem("currentUser")!);
    return currentUser?.access;
  };

  static updateLocalAccessToken = (token: any) => {
    let currentUser = JSON.parse(localStorage.getItem("currentUser")!);
    currentUser.access = token;
    localStorage.setItem("x-user-token", JSON.stringify(token));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  };

  static setcurrentUser = (currentUser: object | any) => {
    localStorage.setItem("x-user-token", JSON.stringify(currentUser?.access));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  };

  static removecurrentUser() {
    localStorage.removeItem("x-user-token");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userDetails");
  }

  static getUser() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser")!);
    return currentUser;
  }
}

export default TokenService;
