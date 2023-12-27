// informations window

// tilting card components
// takes a child component and displays it inside an article tilting card

import { type FC, type ReactNode } from "react"

interface Props {
    children? : ReactNode
}

export const TiltingInfos :FC<Props> = ({children}) => {
    const columns = 3
    const rows = 3
    
    return (
        <div className="info-container">

            <div className="tilting-card">

                {children}

                <div id="mouse-tracker">
                    {Array(columns * rows).fill(0).map((x, i) => {
                        return <div key={i}/>
                    })}
                </div>


            </div>
        </div>
    )
}