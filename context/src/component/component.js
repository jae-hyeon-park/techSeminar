import React, { useContext } from "react";
import { Context } from "../context/context";


const Component = () => {
 // useContext를 이용하여 import한 Context안의 provider value를 가지고 온다.
  const { count, setCount } = useContext(Context);

  return (
    <div>
    	<p> count: {count} </p>
        <button  onClick={() => setCount(count+1)}> 
          증가 
          </button>

          <button  onClick={() => setCount(count-1)}> 
          감소
          </button>
    </div>
    
  );
};

export default Component;