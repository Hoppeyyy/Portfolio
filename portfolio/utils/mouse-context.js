import React, { createContext, useState } from "react";

export const MouseContext = createContext();

const MouseContextProvider = (props) => {
  const [cursor, setCursor] = useState({ active: false });

  return (
    <MouseContext.Provider value={[cursor, setCursor]}>
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;