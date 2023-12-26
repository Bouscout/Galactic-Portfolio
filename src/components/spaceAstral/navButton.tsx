// button to trigger the project informations

import type { FC } from "react"

interface Props {
    func : Function
}

export const ExploreButton :FC<Props> = ({func}) => {
    return <button onClick={()=>{func(true)}} role="button"><h3>Explore</h3></button>
}

export const ExitButton :FC<Props> = ({func}) => {
    return (
        <div className="exit-button">
            <button onClick={()=>{func(false)}}>
                <i className="fa-solid fa-arrow-left-long"></i>
            </button>
            <h4>Exit</h4>
        </div>
        )
}