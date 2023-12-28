// small temporary message pop up
// takes in a message, a deley and a duration, with also a button to cancel it

// display the message in an animation where the text is written slowly

import { useState, type FC, useEffect } from "react";

import "./message_window.scss"

interface Props {
    msg : string,
    // cancel : Function,
    duration : number, // ms
    delay ? : number, // ms
    speed ? : number,
}

export const MessageWindow:FC<Props> = ({msg, duration, delay=0, speed=5}) => {
    const writtingDelay = (msg.length / speed)
    const [index, setIndex] = useState(1)
    const [text, setText] = useState('')
    const [started, setStarted] = useState(false)

    if (index < msg.length && started){
        
        setTimeout(() => {
            let displayText = msg.slice(0, index)
            displayText = displayText + " ".repeat(msg.length - displayText.length)

            setText(displayText)

            setIndex(index + 1)
            
        }, writtingDelay);
    }

    useEffect(() => {
        // handling the starting delay
        console.log("delay is : ", delay)
        setTimeout(() => {
            setStarted(true)
        }, delay);

        // handling the display duration
        const total_duration = delay + (msg.length * writtingDelay) + duration 
        setTimeout(() => {
            setStarted(false)
        }, total_duration);

    }, [])


    if (!started){return}

    return (
        <section id="pop-up">
            <div>
                <h2>
                    <pre>
                    {text}
                    </pre>
                </h2>
                <OkButton func={setStarted}/>
            </div>
        </section>
    )
}

interface buttonProps {
    func : Function
} 


const OkButton:FC<buttonProps> = ({func}) => {
    return (
        <button onClick={()=>func(false)} role="button"><h3>Continue</h3></button>
    )
}