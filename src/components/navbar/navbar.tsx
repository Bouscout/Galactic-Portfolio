// navigation bar 

import type { FC } from "react";

import { GeneralState } from "../state_management";

import "./navbar.scss"

export const Navbar:FC = () => {
    return (
        <nav>
            <NameLogo />

            <div>
                <NavButton text="exploration" state="exploration"/>
                <NavButton text="wormholes" state="accessibility"/>
                <NavButton text="about-me" state="information"/>
            </div>
        </nav>
    )
}

interface buttonProps {
    text : string
    state : string 
}

const NavButton:FC<buttonProps> = ({text, state}) => {
    const settingState = () => {
        // create new dict and set all state to false
        const newState : {[key : string] : boolean} = {}
        Object.keys(GeneralState.get()).forEach(key => {
            newState[key] = false
        });

        // set the selected state to true
        newState[state] = true

        GeneralState.set(newState)
        console.log("activate : ", state)
    }


    return (
        <button onClick={()=>settingState()}>{text}</button>
    )
}


const NameLogo:FC = () => {
    return (
        <h1>Cheick</h1>
    )
}