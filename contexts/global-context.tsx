"use client";
import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext({});
const { Provider } = GlobalContext;

const GlobalProvider = ({ children }: any) => {
  const [urls, seturls] = useState([]);
  const [redirect, setredirect] = useState();
  const value = {
    urls,
    seturls,
    redirect,
    setredirect,
  };
  const result = <Provider value={value}>{children}</Provider>;

  return result;
};

export { GlobalContext, GlobalProvider };
