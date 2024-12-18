import { createContext } from "react";

export type ISSContextType = {
  position: [number, number] | null;
  lastUpdateTime: Date | null;
  refresh: () => void;
};

export const ISSContext = createContext<ISSContextType | undefined>(undefined);


