import React, { useState, useEffect, useRef } from 'react'
// import our util function which calculate the time remaining
import { calculateTimeLeft } from '../utils'

const SimpleCountdown = ({date}) => {
  // Calculate the initial time left
  const initialTimeLeft = calculateTimeLeft(date)

  // Assign it to a state, so that we will update the state every second
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft)
  const timer = useRef()

  // Inorder to update the state every second, we are using useEffect
  useEffect(() => {
    // Every second this setInterval runs and re-calculate the current time left and update the counter in the UI
    timer.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000)

    // Cleaning up the timer when unmounting
    return () => {
      if (timer.current !== undefined) {
        clearInterval(timer.current)
      }
    }
  }, [date])

  let isValidDate = true
  let isValidFutureDate = true

  // If timeLeft is Null, then it is not a valid date
  if (timeLeft === null) isValidDate = false

  // If timeLeft is not null, but the object doesn't have any key or seconds key, then it's not a future date
  if (timeLeft && timeLeft.seconds === undefined) isValidFutureDate = false

  return (
    <div className="countdown">
      <h3 className="header">Simple Countdown</h3>
      {!isValidDate && <div>Pass in a valid date props</div>}
      {!isValidFutureDate && (
        <div>
          Time up, let's pass a future date to procrastinate more{" "}
          <span role="img" aria-label="sunglass-emoji">
            😎
          </span>
        </div>
      )}
      {isValidDate && isValidFutureDate && (
        <div>
          {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes}{" "}
          minutes, {timeLeft.seconds} seconds
        </div>
      )}
    </div>
  )
}

export default SimpleCountdown
