import React from "react";


import Component from "./component/component";
import ContextProvider from "./context/context";

const App = () => {
  return (
    <ContextProvider>
      <Component />
    </ContextProvider>
  );
};

export default App;