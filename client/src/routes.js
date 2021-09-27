import { Switch, Redirect } from 'react-router-dom';
import LoginPage from './modules/AuthPage/LoginPage';
import RegisterPage from './modules/AuthPage/RegisterPage';
import MainPage from './modules/MainPage/MainPage';
import PrivatRoute from './modules/AuthPage/PrivatRoute';

export default function useRouter(isAuthenticated) {
  return (
    <Switch>
      <PrivatRoute condition={!isAuthenticated} fallback="/login" path="/home">
        <MainPage />
      </PrivatRoute>
      <PrivatRoute condition={!isAuthenticated} fallback="/home" path="/login" exact>
        <LoginPage />
      </PrivatRoute>
      <PrivatRoute condition={!isAuthenticated} fallback="/home" path="/register" exact>
        <RegisterPage />
      </PrivatRoute>
      <Redirect to="/home" />
    </Switch>
  );
}
