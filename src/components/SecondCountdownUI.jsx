import React from "react";
    
const SecondCountdownUI = ({ timeLeft, isValidDate, isValidFutureDate }) => {
  return (
    <div className="countdown">
      <h3 className="header">Second Countdown UI</h3>
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
            <strong className="countdown-header">{timeLeft.days} : </strong>
            <strong className="countdown-header">
              {timeLeft.hours} :{" "}
            </strong>
            <strong className="countdown-header">
              {timeLeft.minutes} :{" "}
            </strong>
            <strong className="countdown-header">{timeLeft.seconds}</strong>
          </div>
        )}
    </div>
  );
};

export default SecondCountdownUI;
