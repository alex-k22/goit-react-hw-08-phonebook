import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllContacts, addContact, deleteContact } from './fetch';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  (_, { rejectWithValue }) => {
    try {
      return getAllContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  (value, { rejectWithValue }) => {
    try {
      return addContact(value);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  (id, { rejectWithValue }) => {
    try {
      return deleteContact(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
