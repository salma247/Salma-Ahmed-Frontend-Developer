import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchCapsules : (limit: number, offset: number) => Promise<Capsule[]> = async (limit: number = 10, offset: number = 1) => {
  const response = await api.get(`/capsules?limit=${limit}&offset=${offset}`);
  console.log(api.defaults.baseURL);
  
  return response.data;
}

export const fetchCapsule : (id: string) => Promise<Capsule> = async (id: string) => {
  const response = await api.get(`/capsules/${id}`);
  return response.data;
}

axios.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);