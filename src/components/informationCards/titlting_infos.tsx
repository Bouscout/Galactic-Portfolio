// informations window

// tilting card components
// takes a child component and displays it inside an article tilting card

import BlueNebula from "../../../assets/panoramas/blue_nebula.webp"

import "./tilting_info.scss"

import { type FC, type ReactNode } from "react"

interface Props {
    image : ImageMetadata,
    children : ReactNode
}

export const TiltingInfos :FC<Props> = ({image, children}) => {
    const columns = 3
    const rows = 3

    image = image ? image : BlueNebula

    const inlineStyle = {
        backgroundImage : `linear-gradient(to bottom, transparent, #090909 70%), url("${image.src}")`
    } as React.CSSProperties
    
    return (
        <div className="info-container">

            <div className="tilting-card" style={inlineStyle}>

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