import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/User/Firebase/firebase.init";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
    updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  const registerNewUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
        history.replace("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
    
    
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
    
    
    useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        }
        else {
          setUser({});
        }
        setIsLoading(false);
      });
      return () => unsubscribed;
    }, [auth]);


    const logout = () => {
      setIsLoading(true);
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        })
        .finally(() => setIsLoading(false));
    };
    return {
        user, admin, isLoading, error, registerNewUser, loginUser, logout, setError
    }
};

export default useFirebase;
