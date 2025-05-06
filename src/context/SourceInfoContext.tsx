import React, { createContext, useContext, useEffect, useState } from "react";

type StoreInfo = {
  email: string;
  phone: string;
  address: string;
  receiverEmail: string;
};

const StoreInfoContext = createContext<{ info: StoreInfo | null; fetchInfo: () => void }>({
  info: null,
  fetchInfo: () => {},
});

export const useStoreInfo = () => useContext(StoreInfoContext);

export const StoreInfoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [info, setInfo] = useState<StoreInfo | null>(null);
  const fetchInfo = async () => {
    try {
      const res = await fetch("https://infinityedge.us/api/get-info");
      const data = await res.json();
      console.log(data);
      setInfo(data);
    } catch (err) {
      console.error("Failed to fetch store info:", err);
    }
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <StoreInfoContext.Provider value={{ info, fetchInfo }}>{children}</StoreInfoContext.Provider>
  );
};
