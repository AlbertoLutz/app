import {useEffect, useState} from 'react';

function App() {
const [count, setCount] = useState(0)

useEffect(() => {
  if(count >= 10 || count <= -10) {
    alert(count);
  }
})

function handleClick() {
 setCount(count + 1)
}

function handleDown() {
  setCount(count - 1)
}

  return (
    <div className="App">
      <p>{count}</p>
    <button onClick={handleClick}>Clique aqui +</button>
    <button onClick={handleDown}>Clique aqui -</button>
    </div>
  );
}

export default App;
