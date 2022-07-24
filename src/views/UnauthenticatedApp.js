import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { useForm } from 'react-hook-form';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { FormWrapper } from './UnauthenticatedApp.styles';
import { Warning } from './App.styles';

const UnauthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <FormWrapper onSubmit={handleSubmit(auth.signIn)}>
      <FormField label="Login" name="login" id="login" {...register('login', { required: true })} />
      {errors.login && <Warning>Login is required</Warning>}
      <FormField label="Password" name="password" id="password" type="password" {...register('password', { required: true })} />
      {errors.password && <Warning>Password is required</Warning>}
      <Button type="submit">Sign in</Button>
    </FormWrapper>
  );
};

export default UnauthenticatedApp;
