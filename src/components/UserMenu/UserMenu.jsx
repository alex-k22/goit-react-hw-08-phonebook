import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'redux/selectors';
import css from './UserMenu.module.css';
import { logoutThunk } from 'redux/AuthSlice/operations';
import { MdOutlineLogout } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";



const UserMenu = () => {
  const { user } = useSelector(getAuth);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutThunk());
  };
  return (
    <div className={css.wrapper}>
      <FaRegUser fontSize="32px" fill="white" />
      <p className={css.text}>{user.name}</p>
      <button className={css.button} onClick={handleClick} type="button">
        <span> Logout</span>
        <MdOutlineLogout fontSize="25px" fill="white" />
      </button>
    </div>
  );
};
export default UserMenu;
