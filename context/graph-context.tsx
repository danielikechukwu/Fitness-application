import React, { createContext, ReactNode, useContext, useState } from "react";

interface GraphContextType {
  workoutGraph: string;
  changeGraph: (value: string) => void;
}

//create context
export const GraphContext = createContext<GraphContextType | null>(null);

//create the context provider
export const GraphProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [workoutGraph, setWorkoutGraph] = useState<string>("1");

  const changeGraph = (value: string) => {
    setWorkoutGraph(value);
  };

  return (
    <GraphContext.Provider value={{ workoutGraph, changeGraph }}>
      {children}
    </GraphContext.Provider>
  );
};

//create hook for easy access
export const useGraph = (): GraphContextType | undefined => {
  const context: GraphContextType | null = useContext(GraphContext);

  if (context) {
    return context;
  }
};
