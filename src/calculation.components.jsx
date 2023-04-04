import React from 'react';

function Calculation({ input, result }) {
  return (
    <div className="calculation">
      <div className="calculation-input">{input}</div>
      <div className="calculation-result">{result}</div>
    </div>
  );
}

export default Calculation;
