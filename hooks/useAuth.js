import { useEffect, useState } from "react";
import { auth } from "../firebase";
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user?.uid);
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  return { user, isLoggedIn };
};
export default useAuth;