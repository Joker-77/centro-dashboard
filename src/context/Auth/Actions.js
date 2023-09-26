/* eslint-disable */
import AuthService from "../../services/AuthService";
import TokenService from "../../services/TokenService";

export async function loginUser(dispatch, email, password) {
  try {
    let payload = {
      loginName: email,
      password: password,
      fcmToken:
        "dbNldUTQRj68hFz0GVwn4u:APA91bFUVGlwyERx2NaXsX9bdiPyzODdDe5dGBasj_5heu5Lz5hQVh7zHlP5Xl14S9u8MfUIVmSVjw2lJ4ew6llIeG5URbO5Mdwp4ETvo-kXO2uI5CYDYTce0L8exvK9rOKgzCnL3jXN",
    };
    dispatch({
      type: "REQUEST_LOGIN",
    });
    let data = await AuthService.login(payload);
    console.log("REQUEST_LOGIN", data);
    if (data) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: data,
      });
      return data;
    }
    dispatch({
      type: "LOGIN_ERROR",
      error: data,
    });
    return;
  } catch (error) {
    dispatch({
      type: "LOGIN_ERROR",
      error: error,
    });
  }
}

export async function logout(dispatch) {
  dispatch({
    type: "LOGOUT",
  });
  TokenService.removecurrentUser();
}
