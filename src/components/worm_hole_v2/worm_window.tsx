// worm hole window

import { TiltingInfos } from "../worm_hole/titlting_infos";
import React, { useState, type FC } from "react";

interface windowProps {
    titre : string,
    description : string,
    image : ImageMetadata,
    scroll : number,
}

export const WormWindow:FC<windowProps> = ({titre, description, image, scroll }) => {
    const [expanded, setExpanded] = useState(false)

    let inStyle : React.CSSProperties = {
        backgroundImage : `url("${image.src}")`,
        backgroundPositionX : !expanded ? `${(1 - scroll)*100}%` : "",  
        
    }
    // if (expanded){
    //     inStyle = {
    //         backgroundImage : `url("${image.src}")`,
    //         backgroundPosition : 'center',
    //         backgroundSize : "100% auto",
    //         position : 'fixed',
    //         inset : '0',
    //     } 
    // }


    return (
        <>
        <article style={inStyle} className={expanded ? "expanded" : ""}>
        
        {!expanded &&
        <div onClick={()=>{setExpanded(false)}}>
        <TiltingInfos image={image}>
            <h2>{titre}</h2>
            <h3>{description}</h3>
        </TiltingInfos>
        </div>   
        }

        </article>


        </>
    )
}
