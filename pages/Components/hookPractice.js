// import React from 'react'
// import {useState} from 'react'

// function hookPractice() {
//     const [result,setResult] = useState(0)
//     const Increment = () =>{
//         setResult(result+2)
//     }

//     const Decrement = () =>{
//         setResult(result-2)
//     }
//   return (
//     <div>
//         <h1>useState</h1>
//         <p>result is {result}</p>
//         <button onClick={Increment}>Increment</button>
//         <button onClick={Decrement}>Decrement</button>
//     </div>
//   )
// }

// export default hookPractice

// import React from "react";
// import { useState, useEffect } from "react";

// function hookPractice() {
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(data => setRayhan(data))
//     }, [])

//     const [rayhan, setRayhan] = useState([]);

//     return (
//         <div>
//             {
//                 rayhan.map((data) => {
//                     return <div>
//                         <h1>{data.title}</h1>
//                     </div>
//                 })
//             }
//         </div>

//     )
// }

// export default hookPractice;

import React from 'react'
import { useState, useEffect } from "react";

function Dollar () {
    const [title,setTitle] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setTitle(data))
    })
    return(
        <div>
            {title.map((a)=>{
                return<div>
                    <p>{a.title}</p>
                </div>
            })}
        </div>
    )
}

export default Dollar