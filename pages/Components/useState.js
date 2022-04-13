import React from 'react'
import {useState} from 'react'
import styles from '../../styles/useState.module.css'

function useStates() {
  // Apply useState hook
  const [number,setNumber] = useState(0)

  // function for button
  const changeNumber=()=>{
    setNumber(number+1)
  }

  // return statement
  return (
    <div>
      <p>Number is {number} ok</p>
      <button onClick={changeNumber}>Increase</button>
    </div>
  )
}

export default useStates