import axios from 'axios';
import { URL } from './settings';

const getDeclarationById = async id => {
  const token = JSON.parse(localStorage.getItem('userInfo')).token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const { data } = await axios.get(`${URL}/api/decl/${id}`, config);

  return data;
};

const updateDeclaration = async (
  id,
  declNumber,
  declDateFrom,
  declDateTo,
  proformNumber,
  ammount,
) => {
  const token = JSON.parse(localStorage.getItem('userInfo')).token;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.put(
    `https://customs-brocker.herokuapp.com/api/decl/${id}`,
    { declNumber, declDateFrom, declDateTo, proformNumber, ammount },
    config,
  );

  return data;
};

const removeDecl = async id => {
  const token = JSON.parse(localStorage.getItem('userInfo')).token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.delete(`${URL}/api/decl/${id}`, config);

  return data;
};

export default { getDeclarationById, updateDeclaration, removeDecl };
