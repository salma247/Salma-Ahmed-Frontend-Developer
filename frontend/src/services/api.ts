import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchCapsules : (limit: number, page: number) => Promise<CapsuleResponse> = async (limit: number = 10, page: number = 1) => {
  const response = await api.post(`/capsules.php` , {
      options: {
        limit,
        page
      }
  });
  return response.data;
}

export const fetchCapsule : (id: string) => Promise<Capsule> = async (id: string) => {
  const response = await api.get(`/capsules.php?id=${id}`);
  return response.data;
}

export const searchCapsules : (type: string, status: string, serial: string, limit: number, page: number) => Promise<CapsuleResponse> = async (type: string, status: string, serial: string, limit: number = 10, page: number = 1) => {
  const response = await api.post(`/search.php` , {
      options: {
        limit,
        page
      },
      status,
      serial,
      type
  });
 
  return response.data;
}

export const login : (username: string, password: string) => Promise<any> = async (username: string, password: string) => {
  const response = await api.post(`/login.php` , {
      username,
      password
  });
  return response.data;
}

axios.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);