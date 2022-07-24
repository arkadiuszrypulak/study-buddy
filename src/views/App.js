import React from 'react';
import { useAuth } from 'hooks/useAuth';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import { useError } from 'hooks/useError';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

const App = () => {
  const auth = useAuth();
  const { error } = useError();

  return (
    <>
      {error ? <ErrorMessage /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default App;
