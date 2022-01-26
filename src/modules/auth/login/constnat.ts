import * as Yup from 'yup';

export const validation = Yup.object().shape({
  mobile: Yup.string()
    .required('Email is required'),
    // .email('Invalid email address'),
  password: Yup.string().required('Password is required'),
});

export const formElement = ({ register, errors }:any) => ({
  email: {
    placeholder: 'Email',
    name: 'mobile',
    ref: register,
    error: errors['mobile'],
  },
  password: {
    placeholder: 'Password',
    name: 'password',
    type: 'password',
    ref: register,
    error: errors['password'],
  },
});
