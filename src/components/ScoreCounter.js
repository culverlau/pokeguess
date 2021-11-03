import React from 'react';

const ScoreCounter = ({ score, roundsCompleted }) => (
  <h2>
    Current Score: {score}/{roundsCompleted}
  </h2>
);

export default ScoreCounter;
