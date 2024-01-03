// worm hole window

import { TiltingInfos } from "../worm_hole/titlting_infos";
import { type FC } from "react";



interface windowProps {
    titre : string,
    description : string,
    image : ImageMetadata,
    scroll : number,
}

export const WormWindow:FC<windowProps> = ({titre, description, image, scroll }) => {
    
    const inStyle = {

        backgroundImage : `url("${image.src}")`,
        backgroundPositionX : `${(1 - scroll)*100}%`,

    } as React.CSSProperties

    return (
        <article style={inStyle}>
            
        <TiltingInfos image={image}>
            <h2>{titre}</h2>
            <h3>{description}</h3>
        </TiltingInfos>

        </article>
    )
}
