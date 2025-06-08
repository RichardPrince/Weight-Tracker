import React, { useState } from 'react';
import '../Style/WeightTable.css';

function WeightTable() {
  const [weights, setWeights] = useState(Array(7).fill(''));

  const handleChange = (index, value) => {
    const newWeights = [...weights];
    newWeights[index] = value;
    setWeights(newWeights);
  
  };

  const calculateAverage = () => {
    const validWeights = weights
      .map(Number)
      .filter((w) => !isNaN(w) && w > 0);
    if (validWeights.length === 0) return 0;
    const total = validWeights.reduce((acc, val) => acc + val, 0);
    return (total / validWeights.length).toFixed(1);
  };

  const days = [
    'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  return (
    <div className="weight-table-container">
      <h2 className="title">Weekly Weight Tracker</h2>
      <table className="weight-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day, idx) => (
            <tr key={day}>
              <td>{day}</td>
              <td>
                <input
                  type="number"
                  value={weights[idx]}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  className="weight-input"
                />
              </td>
            </tr>
          ))}
          <tr className="avg-row">
            <td><strong>Average</strong></td>
            <td><strong>{calculateAverage()} </strong></td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}

export default WeightTable;
