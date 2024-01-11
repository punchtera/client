import React, { useState } from 'react';

const ConductivityForm = ({ setResult, setPath, updateHistory }) => {
  const [gridInput, setGridInput] = useState('');

  const evaluateGrid = () => {
    // Call backend API to evaluate the grid
    fetch('/evaluateGrid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ grid: gridInput }),
    })
    .then(response => response.json())
    .then(data => {
      // Update result, grid visualization, and history
      setResult(data.result);
      setPath(data.path);
      updateHistory(data);
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <textarea
        value={gridInput}
        onChange={(e) => setGridInput(e.target.value)}
        placeholder="Enter grid here"
      />
      <button onClick={evaluateGrid}>Evaluate Grid</button>
    </div>
  );
};

export default ConductivityForm;
