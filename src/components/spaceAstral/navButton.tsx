// button to trigger the project informations

import type { FC } from "react"

interface Props {
    func : Function
}

export const ExploreButton :FC<Props> = ({func}) => {
    return <button onClick={()=>{func(true)}} role="button"><h3>Explore</h3></button>
}

