import React, { useEffect, useState } from 'react';

function Hooks(props) {

    const [ counter, setCounter ] = useState(0)
    const [ isCountVisible, setIsCountVisible ]  = useState(true)
    let intervalId = ''

    useEffect(() => {
        console.log("use effect method runs on mounting, updating")
        // intervalId = setInterval(() => { console.log("set interval running!")}, 1000)
        return () => {
            // console.log(intervalId)
            // clearInterval(intervalId)
            // console.log("Component to be unmounted!")
        }
    }, [counter])

    return (
        <div>
            { isCountVisible && <>Counter:- {counter}</>}
            <br/>
            <button onClick={() => setCounter(counter+1)} > + </button> 
            <button onClick={() => setCounter(counter-1)} > - </button>
            <br/>
            <button onClick={() => setIsCountVisible(!isCountVisible)} >Show/Hide Count</button>
        </div>
    );
}

export default Hooks;