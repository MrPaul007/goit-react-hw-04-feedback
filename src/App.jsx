import { useState } from 'react';
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistic from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

const options = ["good", "neutral", "bad"];

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const onLeaveFeedback = key => {
    setState(prevState => ({
      ...prevState,
      [key]: prevState[key] +1
    }));
  };

  const countTotalFeedback = () => {
    const total = Object.values(state).reduce((item, acc) => item + acc, 0);
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.floor((state.good / countTotalFeedback()) * 100);
    return percentage;
  }

  const allFeedbacks = countTotalFeedback();
  const { good, neutral, bad } = state;
  return (
    <>
        <Section title='Please leave feedback' >
          <FeedbackOptions options ={options} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title='Statistics' >
            {allFeedbacks ? <Statistic good={good} neutral={neutral} bad={bad} total={allFeedbacks} positivePercentage={countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback" />}
        </Section>
    </>
  );
}

export default App;



// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

//   onLeaveFeedback = key => {
//     this.setState(prevState => ({
//       [key]: prevState[key] +1
//     }));
//   };

//   countTotalFeedback = () => {
//     const total = Object.values(this.state).reduce((item, acc) => item + acc, 0);
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const percentage = Math.floor((this.state.good / this.countTotalFeedback()) * 100);
//     return percentage;
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const allFeedbacks = this.countTotalFeedback();
//     return (
//       <>
//           <Section title='Please leave feedback' >
//             <FeedbackOptions options ={options} onLeaveFeedback={this.onLeaveFeedback} />
//           </Section>
//           <Section title='Statistics' >
//               {allFeedbacks ? <Statistic good={good} neutral={neutral} bad={bad} total={allFeedbacks} positivePercentage={this.countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback" />}
//           </Section>
//       </>
//     );
//   }
// }

// export default App;