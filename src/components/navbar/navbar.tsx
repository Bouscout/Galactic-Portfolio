// navigation bar 

import type { FC } from "react";

import { GeneralState, useGeneralState } from "../state_management";

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
       useGeneralState(state=state)
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