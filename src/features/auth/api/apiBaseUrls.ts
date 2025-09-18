const BASE_URL = (process.env.NEXT_PUBLIC_API_URL + "/user") as string;
console.log(BASE_URL);

export const REGISTER_USER = (BASE_URL + "/register") as string;
export const LOGIN_USER = (BASE_URL + "/login") as string;
export const FORGOT_PASSWORD = (BASE_URL + "/forgot-password") as string;
export const RESET_PASSWORD = (BASE_URL + "/reset-password") as string;
export const CHANGE_PASSWORD = (BASE_URL + "/change-password") as string;
export const UPDATE_ACCOUNT = (BASE_URL + "/update-account") as string;
export const LOG_OUT = (BASE_URL + "/logout") as string;

export const REFRESH_TOKEN = (BASE_URL + "/refresh-token") as string;
export const GET_USER_BY_ID = (BASE_URL + "/:id") as string;
