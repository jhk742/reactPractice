import React, {useState} from 'react'

export default function App() {
    //useState returns an array - we are simply destructuring it
    //the first is the value that is sent in as a paramter into useState
    //and the second value is a function, conventionally named 'use' + theFirstValue
    //which allows us to set the new version of state
    const [count, setCount] = useState(0);

    function decreaseCount() {
        /**
         * use a callback function when updating state
         * this is the equivalent to:
         * setCount(function(oldValue) {
         *      return oldValue - 1
         * })
         */
        setCount(prev => prev - 1)
    }

    function increaseCount() {
        setCount(prev => prev + 1)
    }


    return (
        <div className="counter">
            <button className="counter--minus" onClick={decreaseCount}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={increaseCount}>+</button>
        </div>    
        )
}

/**
 * 1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
    a. New value of state (setCount(42))
    b. Callback function - whatever the callback function 
       returns === new value of state

2. When would you want to pass the first option (from answer
   above) to the state setter function?
    Whenever you don't need the previous value of state to determine
    what the new value of state should be.

3. When would you want to pass the second option (from answer
   above) to the state setter function?
    Whenever you DO need the previous value to determine the new value
 */