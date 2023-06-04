import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userUpdate = (name, photourl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photourl,
    });
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    loading,
    createUser,
    googleLogin,
    userUpdate,
    login,
    logOut,
  };
  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log("current user is ", currentUser);
        // Get & Set jToken
        if (currentUser) {
          axios
            .post("http://localhost:5000/jwt", { email: currentUser.email })
            .then((data) => {
              console.log(data);
              if (data.data.jToken) {
                localStorage.setItem("accessToken", data.data.jToken);
                setLoading(false);
              }
            })
            .catch((err) => {
              console.log(err.message);
            });
        } else {
          localStorage.removeItem("accessToken");
        }
      });
    };
    return () => {
      return unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
