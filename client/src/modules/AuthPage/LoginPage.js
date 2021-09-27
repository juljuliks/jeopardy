import { useDispatch } from 'react-redux';
import CustomForm from '../Form';
import { loginUser } from '../../redux/actions/users';

const formItems = [
  {
    name: 'email',
    label: 'Email',
    defaultValue: '',
    rules: [
      {
        required: true,
        message: 'Please input valid email',
        type: 'email',
      },
    ],
  },
  {
    name: 'password',
    label: 'Password',
    defaultValue: '',
    isPassword: true,
    rules: [
      {
        required: true,
        min: 6,
        message: 'Password must be at least 6 characters',
      },
    ],
  },
];

export default function LoginPage() {
  const dispatch = useDispatch();
  function onSubmit(values) {
    fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    }).then((data) => data.json())
      .then((data) => dispatch(loginUser(data)))
      .catch((e) => console.log(e));
  }

  return (
    <CustomForm formItems={formItems} submitHandler={onSubmit} />
  );
}
