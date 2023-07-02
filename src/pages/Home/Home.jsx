import css from './Home.module.css';

const Home = () => {
  return (
    <>
      <h1 className={css.title}>Welcome to your Phonebook</h1>
      <p className={css.text}>
      The best place to store your contacts. 
      To continue working please register. If you already have an account, please log in.
      </p>
    </>
  );
};

export default Home;
