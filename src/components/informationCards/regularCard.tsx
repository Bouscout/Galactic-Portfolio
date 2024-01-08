// projects informations card layout

import "./infos.scss"

// import GreenNebula from "../../../../assets/panoramas/green_nebula.webp"
// import BlueNebula from "../../../../assets/panoramas/blue_nebula.webp"
import PinkNebula from "../../../assets/panoramas/green_nebula.webp"

import { flying } from "../../components/state_management"

import { type FC, type ReactNode } from "react"

interface Props {
    children : ReactNode
}

export const RegularCard : FC<Props> = ({children}) => {

    // const ambiance = [GreenNebula, BlueNebula, PinkNebula][Math.floor(Math.random() * 3)]

    setTimeout(() => {
        flying.set(false)
    }, 1000);

    const inStyle = {
        backgroundImage : `linear-gradient(to right, transparent, #141414b0 0%), url("${PinkNebula.src}")`
    } as React.CSSProperties

    return (
        <section id="project-container">
            <article style={inStyle} >
                {children}
            </article>
        </section>
    )
}


