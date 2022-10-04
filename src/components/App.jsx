import { useState } from 'react';
import Section from './Section'
import Statistics from './Statistics'
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

const App = () => {
  const [goodItems, setGoodItems] = useState(0);
  const [neutralItems, setNeutralItems] = useState(0);
  const [badItems, setBadItems] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  const totalValue = goodItems + neutralItems + badItems;

  const countPositiveFeedbackPercentage = () => {
  return totalValue === 0 ? 0 : Number(((goodItems / totalValue) * 100).toFixed(0));
  }

  const handleChange = (event) => {
    const btnName = event.currentTarget.name;

    switch (btnName) {
      case 'good':
        setGoodItems(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutralItems(prevState => prevState + 1);
        break;
      case 'bad':
        setBadItems(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }

  return <>
      <Section title="Please leave feedback">
      <FeedbackOptions options={options} onLeaveFeedback={handleChange} />
      </Section>

      <Section title="Statistic">
        {totalValue === 0
          ? <Notification message="There is no feedback" />
          : <Statistics good={goodItems} neutral={neutralItems} bad={badItems} total={totalValue} positivePercentage={countPositiveFeedbackPercentage()} />}
      </Section>
    </>

}


export default App;