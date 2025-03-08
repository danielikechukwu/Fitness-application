import React, { ReactNode } from "react";
import { PaperProvider } from "react-native-paper";

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <PaperProvider>{children}</PaperProvider>;
};

export default Providers;
