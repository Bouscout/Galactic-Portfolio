// button to trigger the project informations

import type { FC, ReactNode } from "react"

interface Props {
    func : Function,
    children : ReactNode
}

export const ExploreButton :FC<Props> = ({func, children}) => {
    return <button onClick={()=>{func(true)}} role="button">
                <h3>Explore</h3>

                <div>{children}</div>
                
            </button>
}

