import React from 'react';

const History = ({ history }) => {
  return (
    <div>
      <h2>History</h2>
      {history.map((item, index) => (
        <div key={index}>Grid: {item.grid}, Result: {item.result}</div>
      ))}
    </div>
  );
};

export default History;
