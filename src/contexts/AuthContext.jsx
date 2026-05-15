import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
     const [token, setToken] = useState(null);

     useEffect(() => {
          const storedToken = localStorage.getItem('token');
          if (storedToken) {
               setToken(storedToken);
          }
     }, []);

     const login = (data) => {
          localStorage.setItem('token', data.token);
          setToken(data.token);
     };

     const logout = () => {
          localStorage.removeItem('token');
          setToken(null);
     };

     const isLoggedIn = !!token;

     return (
          <AuthContext.Provider
               value={{
                    token,
                    isLoggedIn,
                    login,
                    logout,
               }}>
               {children}
          </AuthContext.Provider>
     );
}
