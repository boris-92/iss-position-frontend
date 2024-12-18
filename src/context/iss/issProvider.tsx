import { FC, ReactNode } from "react";

import { ISSContext } from "./issContext";

import useISSPosition from "../../hooks/useISSPosition";

export const ISSProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const position = useISSPosition(5000);

  return (
    <ISSContext.Provider value={{ position }}>{children}</ISSContext.Provider>
  );
};
