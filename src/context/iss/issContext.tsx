import { createContext } from "react";

export type ISSContextType = {
  position: [number, number] | null;
};

export const ISSContext = createContext<ISSContextType | undefined>(undefined);


