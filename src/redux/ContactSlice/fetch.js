import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getAllContacts = async () => {
  const { data } = await axios.get('/contacts');

  return data;
};

export const addContact = async value => {
  const { data } = await axios.post('/contacts', value);

  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};