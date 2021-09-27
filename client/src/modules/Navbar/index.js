// import { Layout, Menu, Button } from 'antd';
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/users';

const { Header } = Layout;

export default function Navbar({ isAuth }) {
  const dispatch = useDispatch();

  function logoutHandler() {
    fetch('/auth/logout')
      .then(() => dispatch(logoutUser()));
  }

  if (!isAuth) {
    return (
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="Register">
            <Link to="/register">Register</Link>
          </Menu.Item>
          <Menu.Item key="Login">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }

  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="Home">
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="Logout">
          <Button type="link" onClick={logoutHandler}>Logout</Button>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
