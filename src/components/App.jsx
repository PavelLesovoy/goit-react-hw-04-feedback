import { useEffect, useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const handleClick = evt => {
    const { id } = evt.target;
    switch (id) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    const calculatedPositivePercentage = Math.round((good / total) * 100);
    setPositivePercentage(calculatedPositivePercentage);
  }, [total, good]);

  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
        padding: '25px',
      }}
    >
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClick}
        />
      </Section>

      <Section title={'Statistics'}>
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no Feedback"></Notification>
        )}
      </Section>
    </div>
  );
};
