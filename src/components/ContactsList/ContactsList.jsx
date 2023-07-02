import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/ContactSlice/operations';
import { getContacts, getFilterValue } from 'redux/selectors';
import css from './ContactsList.module.css';
import { MdAccountBox } from "react-icons/md";

const ContactsList = () => {
  const { items } = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const dispatch = useDispatch();

  const filterContact = () => {
    return items.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const visibleContacts = filterContact();
  
  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={name} className={css.item}>
            <MdAccountBox style={{ width: "20px", height: "20px" }}/>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              className={css.delBtn}
              onClick={() => dispatch(deleteContactThunk(id))}
            >
              Delete 
            </button>
          </li>
        );
      })}
    </ul>
  );
}


export default ContactsList;
