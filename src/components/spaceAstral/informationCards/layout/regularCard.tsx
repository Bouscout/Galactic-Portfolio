// projects informations card layout

import { PicWithButtons } from "./picture"
import "./infos.scss"

import { flying } from "../../../state_management"

import { type FC, type ReactNode } from "react"

interface Props {
    children : ReactNode
}

export const RegularCard : FC<Props> = ({children}) => {
    setTimeout(() => {
        flying.set(false)
    }, 1000);


    return (
        <article>
            {children}
        </article>
    )
}


