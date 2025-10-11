const BASE_URL = (process.env.NEXT_PUBLIC_API_URL + "/experience") as string;
console.log(BASE_URL);

export const GET_ALL_EXPERIENCE = BASE_URL as string;
export const CREATE_EXPERIENCE = BASE_URL as string;
export const UPDATE_EXPERIENCE = (experienceId: string) =>
  `${BASE_URL}/${experienceId}` as string;
export const DELETE_EXPERIENCE = (experienceId: string) =>
  `${BASE_URL}/${experienceId}` as string;
