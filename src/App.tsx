import {useState} from 'react';

function App() {
const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>{count}</p>
    <button>Clique aqui</button>
    </div>
  );
}

export default App;
