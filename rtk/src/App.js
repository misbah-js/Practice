import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'; // Import hooks from react-redux
import { increment, decrement } from './redux/counterSlice'; // Import actions from counterSlice

function App() {
  // Get the current counter value from the Redux store
  const counter = useSelector((state) => state.counter.value);

  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Function to increment the counter
  const handleIncrement = () => {
    dispatch(increment()); // Dispatch the increment action
  };

  // Function to decrement the counter
  const handleDecrement = () => {
    dispatch(decrement()); // Dispatch the decrement action
  };

  return (
    <div className="App" style={{ direction: 'rtl' }}> {/* RTL layout */}
      <h1>Counter App</h1>
      <div>
        <button onClick={handleIncrement}>+</button> {/* Increment button */}
        <span>{counter}</span> {/* Display counter value */}
        <button onClick={handleDecrement}
        disabled={counter === 0} // Disable the button if counter is 0
        >-</button> {/* Decrement button */}
      </div>
    </div>
  );
}

export default App;
