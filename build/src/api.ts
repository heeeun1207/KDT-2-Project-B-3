import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // NestJS 서버의 URL에 맞게 변경해주세요.
});

export const getHello = async () => {
  const response = await apiClient.get<string>('/');
  return response.data;
};
