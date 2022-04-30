import { useState } from "react";
import { STORE_KEY_USER } from "../constants";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem(STORE_KEY_USER);
    return JSON.parse(tokenString) || null;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (token) => {
    localStorage.setItem(STORE_KEY_USER, JSON.stringify(token));
    setToken(token);
  };

  return {
    setToken: saveToken,
    token,
  };
}
