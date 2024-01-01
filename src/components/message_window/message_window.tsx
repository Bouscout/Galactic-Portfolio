// small temporary message pop up
// takes in a message, a deley and a duration, with also a button to cancel it

// display the message in an animation where the text is written slowly

import { useState, type FC, useEffect, type ReactNode } from "react";

import "./message_window.scss"

interface Props {
    msg : string,
    duration? : number, // ms
    delay ? : number, // ms
    speed ? : number,
    children? : ReactNode
}

export const MessageWindow:FC<Props> = ({msg, duration=null, delay=0, speed=5, children=null}) => {
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
        setTimeout(() => {
            setStarted(true)
        }, delay);

        // handling the display 
        if (duration){
            const total_duration = delay + (msg.length * writtingDelay) + duration 
            setTimeout(() => {
                setStarted(false)
            }, total_duration);
        }

    }, [])


    if (!started){return}

    return (
        <section id="pop-up">
            <div>

                <div>
                    <h2>
                        <pre>
                        {text}
                        </pre>
                    </h2>

                </div>
                
                <ExitButton func={setStarted}/>
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

export const ExitButton :FC<buttonProps> = ({ func }) => {
    return (
        <button id="exit-button">
            <h2 onClick={()=>{func(false)}}>
                <i className="fa-solid fa-xmark"></i>
            </h2>
            <h4>Close</h4>
        </button>
    )
}