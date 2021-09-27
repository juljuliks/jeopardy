/* eslint-disable react/jsx-props-no-spreading */
import { Route, Redirect } from 'react-router-dom';

export default function PrivatRoute({
  children, condition, fallback, ...restProps
}) {
  return (
    <Route {...restProps}>
      {condition ? children : <Redirect to={fallback} />}
    </Route>
  );
}
