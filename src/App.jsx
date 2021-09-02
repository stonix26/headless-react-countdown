import './App.css';

import Countdown from './components/Countdown';
import useCountdown from './components/use-countdown';

import SimpleCountdown from './components/SimpleCountdown';
import FirstCountdownUI from './components/FirstCountdownUI';
import SecondCountdownUI from './components/SecondCountdownUI'

function App() {
  const date = new Date('2021-12-25')

  // custom hook usage
  // pass in the date and get all the values from the hook, throw it to the UI
  const { timeLeft, isValidDate, isValidFutureDate } = useCountdown(date)
  
  // same hook, but using spread instead
  const {...spreadAllVal} = useCountdown(date)

  return (
    <div className="App">
      {/* Basic */}
      <div className='container'>
        <p className='title'>Basic</p>
        <SimpleCountdown date={date} />
      </div>

      {/* Render prop usage */}
      <div className='container'>
        <p className='title'>Render prop usage</p>
        <Countdown date={date}>
          {(props) => (
            <>
              <FirstCountdownUI {...props} />
              <SecondCountdownUI {...props} />
            </>
            
          )}
        </Countdown>
      </div>

      {/* Custom hooks usage */}
      <div className='container'>
        <p className='title'>Custom hook usage</p>
        <FirstCountdownUI
          timeLeft={timeLeft}
          isValidDate={isValidDate}
          isValidFutureDate={isValidFutureDate}
        />
        <SecondCountdownUI
          timeLeft={timeLeft}
          isValidDate={isValidDate}
          isValidFutureDate={isValidFutureDate}
        />
      </div>

      {/* Custom hooks usage - spread */}
      <div className='container'>
        <p className='title'>Custom hook usage - spread</p>
        <FirstCountdownUI {...spreadAllVal} />
        <SecondCountdownUI {...spreadAllVal} />
      </div>
    </div>
  );
}

export default App;
