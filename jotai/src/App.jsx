import { atom, useAtom } from 'jotai';

const count_atom = atom(0);

function App() {
  const [count, setCount] = useAtom(count_atom);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={()=>setCount(count-1)}>minus</button>
    </div>)
}

export default App;
