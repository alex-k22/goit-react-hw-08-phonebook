import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/AuthSlice/operations';
import css from '../Form/Form.module.css'

const LogInForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    dispatch(loginThunk(user))
      .unwrap()
      .then(() => {
        event.target.reset();
      })
      .catch(() => alert(`Incorrect login or password. Try again`));
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
      </label>

      <label>
        <input
          className={css.input}
          type="password"
          name="password"
          placeholder="Password"
          required
          minLength="8"
          title="Password must be eight symbols."
        />
      </label>
      <button className={css.button} type="submit">
        Sign in
      </button>
    </form>
  );
};
export default LogInForm;
