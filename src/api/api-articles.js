import axios from 'axios';
import { URL } from './settings';

export const getAllArticles = async () => {
  const token = JSON.parse(localStorage.getItem('userInfo')).token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const { data } = await axios.get(`${URL}/api/article`, config);

  return data;
};

const apiArticles = { getAllArticles };
export default apiArticles;
