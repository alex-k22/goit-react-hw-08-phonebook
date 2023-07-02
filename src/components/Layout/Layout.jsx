import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/selectors';
import { FaRegAddressBook } from "react-icons/fa";
import { Oval } from 'react-loader-spinner';

const Layout = () => {
  const { isLoggedIn } = useSelector(getAuth);
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <ul className={css.list}>
            <li className={css.nav__item}>
              <FaRegAddressBook fontSize="32px" fill="white" />
              <NavLink to="/">Phonebook</NavLink>
            </li>
            {isLoggedIn && (
              <li className={css.nav__item}>
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
            )}
          </ul>
        </nav>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <ul className={css.list}>
            <li className={css.list__item}>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li className={css.list__item}>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        )}
      </header>
      <main className={css.container}>
        <Suspense
          fallback={
            <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass={css.loaderWrapper}
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
