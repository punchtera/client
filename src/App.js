import React, { useState } from 'react';
import ConductivityForm from './components/ConductivityForm';
import ConductivityResult from './components/ConductivityResult';
import History from './components/History';

function App() {
  const [result, setResult] = useState('');
  const [path, setPath] = useState([]);
  const [history, setHistory] = useState([]);

  const updateHistory = (data) => {
    setHistory([...history, data]);
  };

  return (
    <div className="App">
      <ConductivityForm setResult={setResult} setPath={setPath} updateHistory={updateHistory} />
      <ConductivityResult result={result} path={path} />
      <History history={history} />
    </div>
  );
}

export default App;
