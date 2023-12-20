import React, {useState} from 'react';

// context를 생성한 후 export 한다
export const Context = React.createContext();

const ContextProvider = ({ children }) => {
  
  const [count, setCount] = useState(0);
  
  return (
    <Context.Provider
      
      value={{ count, setCount }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;