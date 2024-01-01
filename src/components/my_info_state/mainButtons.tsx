// buttons for the introduction page

import type { FC } from "react";

import { first_time, GeneralState } from "../state_management"

const AnimationDelay = 9000 // ms

// function for changing the page
const settingState = ( state:string) : void => {
    // create new dict and set all state to false
    const newState : {[key : string] : boolean} = {}
    Object.keys(GeneralState.get()).forEach(key => {
        newState[key] = false
    });

    // set the selected state to true
    newState[state] = true

    // animation for transition to new page
    setTimeout(() => {
        GeneralState.set(newState)
    }, AnimationDelay);

    console.log("activate : ", state)
}


interface Props {
    func : Function
}

// button to go to exploration page from the introduction page
export const HyperSpaceButton:FC<Props> = ({func}) => {

    

    // if not the first time, do not render
    if (!first_time.get()){return}

    const Position = {
        right : "5%",
        bottom : "5%",
    } as React.CSSProperties

    const activ_func = () => {
        first_time.set(false)
        func()
        
        settingState("exploration")
    }

    return (
        <div className="intro-button" style={Position}>
            <button onClick={() => activ_func()}>
                <h3>Hyper-Space</h3>
            </button>
        </div>
    )
}

// button to go to wormhole page from intro page
export const WormHolesButton:FC<Props> = ({func}) => {
    
    // if not the first time, do not render
    if (!first_time.get()){return}

    const Position = {
        left : "5%",
        bottom : "5%",
    } as React.CSSProperties

    const activ_func = () => {
        first_time.set(false)
        func()

        settingState("accessibility")
    }

    return (
        <div className="intro-button" style={Position}>
            <button onClick={() => activ_func()}>
                <h3>Worm-Holes</h3>
            </button>
        </div>
    )
}