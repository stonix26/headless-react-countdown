import { useState, useEffect, useRef } from 'react'
import { calculateTimeLeft } from '../utils'

/**
 * All logic are same as previous implementation
 * Only change is, instead of rendering a UI, we just send the render props
 */

const Countdown = ({date, children}) => {
  const initialTimeLeft = calculateTimeLeft(date)

  const [timeLeft, setTimeLeft] = useState(initialTimeLeft)
  const timer = useRef()

  useEffect(() => {
    timer.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000)

    return () => {
      if (timer.current !== undefined) {
        clearInterval(timer.current)
      }
    }
  }, [date])

  let isValidDate = true
  let isValidFutureDate = true

  if (timeLeft === null) isValidDate = false
  if (timeLeft && timeLeft.seconds === undefined) isValidFutureDate = false

  // Instead of rendering a UI, we are returning a function through the children props
  return children({
    isValidDate,
    isValidFutureDate,
    timeLeft
  })
}

export default Countdown
