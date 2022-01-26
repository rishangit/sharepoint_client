import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'sys/element';
import { FormTextBox } from 'sys/formElement';
import { FlexRow, FormContainer } from 'sys/container';
import { MainTitle } from 'sys/title';
import { formElement, validation } from './constnat';
import { loginAttempt } from '../action';
import { LoginStatus } from '../constant';

const LoginContainer = styled.div`
  width: 350px;
  height: auto;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  margin-top: 4rem;
`;

const LoginComponent = props => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validation),
  });
  const elementSchema = formElement({ register, errors });
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    authReducer: { loginStatus },
  } = useSelector(state => state);

  const onSubmit = values => {
    console.log('values', values);
    // setTimeout(() => {
    //   dispatch(
    //     loginSuccess({
    //       status: 200,
    //       response: {
    //         firstName: 'Rishan',
    //         lastName: 'Nadeera',
    //         avatar:
    //           'https://s3.amazonaws.com/batsman/Rishan%20Nadeera_251b1130-0aa3-4e06-8fb2-1d87ed807344.JPG',
    //       },
    //     }),
    //   );
    // }, 4000);
    dispatch(loginAttempt(values));
  };

  useEffect(() => {
    if (loginStatus === LoginStatus.LOGIN_SUCCESS) {
      const redirectPath = localStorage.getItem('redirectPath');
      if (redirectPath) {
        history.push(redirectPath);
        localStorage.removeItem('redirectPath');
      } else history.push('/');
    }
  }, [loginStatus, history]);

  return (
    <LoginContainer>
      <MainTitle thin>Log in</MainTitle>
      <FormContainer>
        <FormTextBox element={elementSchema['email']} />
        <FormTextBox element={elementSchema['password']} />
      </FormContainer>
      <FlexRow style={{ marginRight: 'auto' }}>
        <Button regular onClick={handleSubmit(onSubmit)}>
          Loging
        </Button>
      </FlexRow>
    </LoginContainer>
  );
};

export default React.memo(LoginComponent);
