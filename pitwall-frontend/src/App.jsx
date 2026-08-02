import DrawComparison from './components/SpeedTrace'
import { useState, useEffect } from 'react';

function App() {
  let [result, setResult] = useState(null)
  useEffect( () => {
    fetch("http://localhost:8000/drivervsdriver/VER/LEC/2023/Monaco")
    .then(Response => Response.json())
    .then(data => setResult(data))
  }, [] )

  return (
    <><div>
      <h1 style={{ textAlign: 'center' }}>Pitwall</h1>
    </div>
    <div>
      {result && <DrawComparison driver1={result.driver1} driver2={result.driver2} />}
    </div></>
  );
}

export default App
