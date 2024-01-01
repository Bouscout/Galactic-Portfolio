// worm hole window

import { TiltingInfos } from "./titlting_infos";
import { useState, type FC, useEffect } from "react";

interface windowProps {
    titre : string,
    description : string,
    image : ImageMetadata,
    margin : number[],
    size : number[],
    scroll : number,
    index : number,

}

export const WormWindow:FC<windowProps> = ({titre, description, image, margin, size, scroll, index}) => {
    
    const [width, setWidth] = useState(0)
    const [newWidth, height] = size

    const [top, left] = margin

    // for animation
    useEffect(() => {
        setTimeout(() => {
            setWidth(newWidth)
        }, 500 + index * 1000);
    }, [])

    const inStyle = {
        width : `${width}%`,
        height : `${height}%`,
        marginTop : top+"%",
        marginLeft : left+"%",
        backgroundImage : `url("${image.src}")`,
        backgroundPositionY : `${(1 - scroll)*100}%`,
    
    } as React.CSSProperties

    return (
        <article>
            <div style={inStyle} />

            <TiltingInfos image={image}>
                <h2>{titre}</h2>
                <h3>{description}</h3>
            </TiltingInfos>

        </article>
    )
}

