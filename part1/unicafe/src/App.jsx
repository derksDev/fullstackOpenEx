import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1) 
  const increaseNeutral = () => setNeutral(neutral + 1) 
  const increaseBad = () => setBad(bad + 1) 

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="Neutral" />
      <Button onClick={increaseBad} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good * 1) + (neutral * 0) + (bad * -1)
  if (total === 0){
    return (
      <p>No feedback given</p>
    )
  }
  return(
    <>
      <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={total} />
            <StatisticLine text="Average" value={average/total} />
            <StatisticLine text="Positive" value={(good/total)*100} />
          </tbody>
      </table>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return(
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

export default App