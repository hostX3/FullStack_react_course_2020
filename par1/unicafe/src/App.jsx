import React, { useState } from "react";
import Statistics from './components/Statistic'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      {(good || neutral || bad ? <Statistics good={good} neutral={neutral} bad={bad} /> : <p>No feedback given</p> )}
      

    </div>
  );
};

export default App;