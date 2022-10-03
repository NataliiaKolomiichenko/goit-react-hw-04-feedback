import React, { Component } from 'react';
import Section from './Section'
import Statistics from './Statistics'
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification'

class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0,
  } 

  countTotalFeedback() {
    return Object.values(this.state).reduce((prevValue, number) => {
      return Number(prevValue + number)
    }, 0);
  }
  
  countPositiveFeedbackPercentage() {
    const totalValue = this.countTotalFeedback();
    const { good } = this.state;
    return totalValue === 0 ? 0 : Number(((good / totalValue) * 100).toFixed(0));
  }

  leaveFeedback = (event) => {
    const bntName = event.currentTarget.textContent;
    
    this.setState(prevState => {
      return { [bntName]: prevState[bntName] + 1 }
    }
    )
  }

  render() {
    return <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.leaveFeedback} />
      </Section>

      <Section title="Statistic">
        {this.countTotalFeedback() === 0
          ? <Notification message="There is no feedback" />
          : <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />}
      </Section>
    </>
  }
}

export default App;