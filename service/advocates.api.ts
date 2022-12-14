import axios from "axios";
const backendURL: string = "https://cados.up.railway.app/advocates/";

export const getAdvocates = async (page: number): Promise<any> => {
  try {
    const response: any = await axios.get(`${backendURL}?page=${page}`);
    return response.data;
  } catch (err: unknown) {
    return Promise.reject(err);
  }
};

export const getAdvocate = async (username: string): Promise<any> => {
  try {
    const response: any = await axios.get(`${backendURL}${username}`);
    return response.data;
  } catch (err: any) {
    return Promise.reject(err.response.data);
  }
};
