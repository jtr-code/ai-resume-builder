const BASE_URL = (process.env.NEXT_PUBLIC_API_URL + "/contact") as string;
console.log(BASE_URL);

export const GET_CONTACT = BASE_URL as string;
export const CREATE_CONTACT = BASE_URL as string;
export const DELETE_CONTACT = BASE_URL as string;
export const UPLOAD_AVATAR = (process.env.NEXT_PUBLIC_API_URL +
  "/user" +
  "/upload-avatar") as string;
