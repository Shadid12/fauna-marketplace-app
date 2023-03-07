import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});

export default function AppStore({ children } : { children: React.ReactNode }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem('fauna-marketplace') as any;
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      {children}
    </UserContext.Provider>
  );
}


export function useUserContext() {
  return useContext(UserContext);
}