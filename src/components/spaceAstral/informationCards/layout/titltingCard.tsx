// tilting card components
// takes a child component and displays it inside an article tilting card
import { flying } from "../../../state_management"

import { type FC, type ReactNode } from "react"

interface Props {
    children? : ReactNode
}

export const TiltingCardLayout :FC<Props> = ({children}) => {

    const columns = 3
    const rows = 3

    setTimeout(() => {
        flying.set(false)
    }, 1000);

    return (
        <article className="tilting-card">
            {children}
            <nav>
                {Array(columns * rows).fill(0).map((x, i) => {
                    return <div />
                })}
            </nav>
        {/* <article> */}


        </article>
    )
}