import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/Firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {displayName, photoURL})
  }

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOutUser = () => {
    return signOut(auth)
  }

  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    setUser,
    googleLogin,
    logOutUser,
    createUser,
    LoginUser,
    updateUserProfile,
  };
  
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
