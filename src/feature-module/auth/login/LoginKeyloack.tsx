import React, { useEffect, useState } from "react";
import Keycloak from "keycloak-js";

// Create Keycloak instance with configuration
const keycloak = new (Keycloak as any)({
  url: "https://keycloak.billmex.com/",
  realm: "smarthr",
  clientId: "smarthr",
});

const LoginKeycloak: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const initializeKeycloak = async () => {
      try {
        const isAuthenticated = await keycloak.init({ onLoad: "login-required" });
        setAuthenticated(isAuthenticated);
        if (isAuthenticated) {
          setUser(keycloak.tokenParsed);
        }
      } catch (error) {
        console.error("Keycloak initialization failed:", error);
        setAuthenticated(false);
      }
    };

    initializeKeycloak();
  }, []);

  const handleLogin = async () => {
    try {
      await keycloak.login();
      setAuthenticated(true);
      setUser(keycloak.tokenParsed);
    } catch (err) {
      console.error("Login failed:", err);
      setAuthenticated(false);
    }
  };

  const handleLogout = () => {
    keycloak.logout();
    setAuthenticated(false);
    setUser(null);
  };

  if (!authenticated) {
    return (
      <div>
        <h2>Login</h2>
        <button onClick={handleLogin}>Login with Keycloak</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome, {user?.given_name} {user?.family_name}</h2>
      <p>Email: {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LoginKeycloak;
