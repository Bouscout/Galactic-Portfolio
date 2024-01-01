// navigation bar 

import type { FC } from "react";

import { GeneralState } from "../state_management";

import "./navbar.scss"

interface Props {
    logo : boolean,
    shortcuts : boolean,
}

export const Navbar:FC<Props> = ({ logo, shortcuts }) => {
    return (
        <nav>

            
            <NameLogo appear={logo} />
            

            {shortcuts &&
            <div>
                <NavButton text="exploration" state="exploration"/>
                <NavButton text="wormholes" state="accessibility"/>
                <NavButton text="about-me" state="information"/>
            </div>
            }

        </nav>
    )
}

interface buttonProps {
    text : string
    state : string 
}

const NavButton:FC<buttonProps> = ({text, state}) => {
    const settingState = () : void => {
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


interface Appear {
    appear : boolean
}

const NameLogo:FC<Appear> = ({ appear }) => {

    const inlineStyle: React.CSSProperties | null = appear ? {} : {
        color : "transparent"
    }

    return (
        <h1 style={inlineStyle}>Cheick</h1>
    )
}