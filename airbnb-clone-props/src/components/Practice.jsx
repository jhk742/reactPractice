import React from 'react'

export default function Practice() {
    // const jin = {
    //     firstName: 'Jin',
    //     lastName: 'Kim',
    //     age: 28
    // }
    // const paul = {
    //     firstName: 'Paul',
    //     lastName: 'Singh',
    //     age: 26
    // }
    // const shannon = {
    //     firstName: 'Shannon',
    //     lastName: 'Cruz',
    //     age: 27
    // }

    // let people = [jin, paul, shannon];

    // return (
    //     <ul>
    //         {
    //             people.map((person, index) => (
    //                 <li key={index}>Name: {person.firstName + " " + person.lastName} is {person.age} years old.</li>
    //             ))
    //         }
    //     </ul>
    // )
    
    const date = new Date()
    const hours = date.getHours();
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "Morning"
    } else if (hours > 12) {
        timeOfDay = "Afternoon"
    } else {
        timeOfDay = "Night"
    }

    return (
        <h1>Good {timeOfDay}!</h1>
    )
}