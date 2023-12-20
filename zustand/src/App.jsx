import useCount from "./Count";
const App = () => {
  const {count, increase, decrease} = useCount(count => count);
  
  return (
    <div>
      <div>{count}</div>
      <button onClick={increase}>Inc</button>
      <button onClick={decrease}>minus</button>
    </div>
  )
}
export default App;