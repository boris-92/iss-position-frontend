import { createContext } from "react";

export type ISSContextType = {
  position: [number, number] | null;
  refresh: () => void;
};

export const ISSContext = createContext<ISSContextType | undefined>(undefined);


