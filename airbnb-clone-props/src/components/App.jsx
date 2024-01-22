import React from 'react'
import Contact from './Contact'
import cat1 from '../img/cat-1.png'
import cat2 from '../img/cat-2.png'
import cat3 from '../img/cat-3.png'
import cat4 from '../img/cat-4.png'

export default function App() {
    return (
        <div className="contacts">
            <Contact 
                img={cat1}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskax@catnap.meow"
            />
            <Contact 
                img={cat2}
                name="FluffyKins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img={cat3}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img={cat4}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

// const person = {
//     image: "./images/mr-whiskerson.png",
//     title: "Mr. Whiskerson",
//     number: "(800) 555-1234",
//     mail: "mr.whiskaz@catnap.meow"
// }


// const {image: i, title: t, number: n, mail: m} = person;
// console.log(i, t, n, m)