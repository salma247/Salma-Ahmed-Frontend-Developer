import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchCapsules : (limit: number, page: number) => Promise<CapsuleResponse> = async (limit: number = 10, page: number = 1) => {
  const response = await api.post(`/capsules/query` , {
      options: {
        limit,
        page
      }
  });
  console.log(response.data);
  
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