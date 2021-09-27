/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './redux/actions/users';
import Navbar from './modules/Navbar';
import useRouter from './routes';

function App() {
  const user = useSelector((state) => state.user);
  const isAuthenticated = !!user.id;
  // const isAuthenticated = true;
  const dispatch = useDispatch();
  const routes = useRouter(isAuthenticated);

  useEffect(() => {
    fetch('/auth/me')
      .then((data) => data.json())
      .then((userData) => dispatch(loginUser(userData)));
  }, []);

  return (
    <>
      <Navbar isAuth={isAuthenticated} />
      {routes}
    </>
  );
}

export default App;
