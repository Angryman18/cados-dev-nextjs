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