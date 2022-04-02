import { useState, useEffect } from "react";

function App() {
  const [number,setNumber] = useState(0)
  const [number2,setNumber2] = useState(0)

  useEffect(()=>{
    console.log(`I am click ${number} times`);
  })

  useEffect(()=>{
    console.log(`I am click ${number2}`);
  })

  const changeButton1 =()=>{
    setNumber(number+1)
  }

  const changeButton2=()=>{
    setNumber2(number2+1)
  }

  return(
    <div>
      <p>Number is {number}</p>
      <button onClick={changeButton1}>Button 1</button>
      <p>Number is {number2}</p>
      <button onClick={changeButton2}>Button 2</button>
    </div>
  )
}

export default App;