import React from 'react';

export default function Prac() {
    const thingsArray = ["Thing 1", "Thing 2"]
    const things = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    function handleOnClick() {
        thingsArray.push(`Thing ${thingsArray.length + 1}`)
        console.log(thingsArray)
    }
    
    return (
        <div>
            <button onClick={handleOnClick}>Add Item</button>
            {things}
        </div>
    )
}
