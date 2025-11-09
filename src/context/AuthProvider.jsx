import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
const user = true

  const authInfo = {
    user
  }

  return (
    <AuthContext value={authInfo}>
      {children}
   </AuthContext>
  );
};

export default AuthProvider;