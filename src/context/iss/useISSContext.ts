import { useContext } from "react";

import { ISSContext, ISSContextType } from "./issContext";

export const useISSContext = (): ISSContextType => {
  const context = useContext(ISSContext);

  if (!context) {
    throw new Error("useISS must be used within an ISSProvider");
  }

  return context;
};
