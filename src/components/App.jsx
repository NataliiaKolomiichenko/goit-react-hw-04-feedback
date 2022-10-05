import { useState } from 'react';
import Section from './Section'
import Statistics from './Statistics'
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const options = Object.keys({ good, neutral, bad });
  const totalValue = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
  return totalValue === 0 ? 0 : Number(((good / totalValue) * 100).toFixed(0));
  }

  const handleChange = (event) => {
    const btnName = event.currentTarget.name;

    switch (btnName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }

  return <>
      <Section title="Please leave feedback">
      <FeedbackOptions options={Object.keys({ good, neutral, bad })} onLeaveFeedback={handleChange} />
      </Section>

      <Section title="Statistic">
        {totalValue === 0
          ? <Notification message="There is no feedback" />
          : <Statistics good={good} neutral={neutral} bad={bad} total={totalValue} positivePercentage={countPositiveFeedbackPercentage()} />}
      </Section>
    </>

}


export default App;