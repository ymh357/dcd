import React, {useState} from 'react'

export interface C1Inputs {input1: string; input2: string;}
const Component1 =  (props: C1Inputs) => {
    const [count, setCount] = useState(0)
    return (
        <>
        <h2>inputs: {props.input1 + props.input2}</h2>
        <h2>Clicked Num: {count}</h2>
        <button onClick={()=>{setCount(count+1)}}>click me</button>
        </>
        
    )
}
export default Component1