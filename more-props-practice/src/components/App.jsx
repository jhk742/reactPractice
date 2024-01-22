import React from 'react'
import Joke from './Joke'
import jokes from './jokes'

export default function App() {
    return (
        <div>
            {jokes.map(joke => {
                return <Joke 
                    setup={joke.setup}
                    punchline={joke.punchline}
                />
            })}
        </div>
    )
}

/**
 * <Joke 
                random={[1,2,3,4]}
                setup="setup 1"
                punchline="punchline 1!"
            />
            <Joke 
                random={2}
                setup="setup 2"
                punchline="punchline 2!"
            />
            <Joke 
                random={true}
                setup="setup 3"
                punchline="punchline 3!"
            />
            <Joke 
                random={false}
                setup="setup 4"
                punchline="punchline 4!"
            />
            <Joke 
                setup="setup 5"
                punchline="punchline 5!"
            />
 */