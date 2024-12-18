import { FC, ReactNode } from "react";

import { ISSContext } from "./issContext";

import useISSPosition from "../../hooks/useISSPosition";

export const ISSProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { position, lastUpdateTime, refresh } = useISSPosition(5000);

  return (
    <ISSContext.Provider value={{ position, lastUpdateTime, refresh }}>
      {children}
    </ISSContext.Provider>
  );
};
