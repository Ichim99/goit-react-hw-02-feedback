import {useState} from 'react';
import {FeedbackOptions} from "./Feedback/FeedbackOptions";
import {Notification} from './Notification/Notification';
import {Section} from './Section/Section';
import {Statistics} from './Statistics/Statistics';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = feedbackType => {
    switch (feedbackType) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = good + neutral + bad;
  const positiveFeedback = totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleLeaveFeedback}
        />
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        )}
      </Section>
    </div>
  );
};