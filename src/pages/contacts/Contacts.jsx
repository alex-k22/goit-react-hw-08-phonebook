import Form from 'components/Form/Form';
import ContactsList from 'components/ContactsList/ContactsList';
import FilterContacts from 'components/FilterContacts/FilterContacts';
import css from './contacts.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/ContactSlice/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  return (
    <>
      {/* <h2 className={css.title}>Phonebook</h2> */}
      <Form />
      <h2 className={css.title}>Contacts</h2>
      {<FilterContacts />}
      <ContactsList />
    </>
  );
};

export default Contacts;
