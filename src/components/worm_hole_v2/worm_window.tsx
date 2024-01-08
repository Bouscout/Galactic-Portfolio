// worm hole window

import { TiltingInfos } from "../worm_hole/titlting_infos";
import React, { useState, type FC } from "react";
import BuushidoPage from "../../../assets/projects/buushido_website.png"
const LongDescription = `Welcome to Buushido, your ultimate destination for anime streaming. Immerse yourself in a thoughtfully curated collection, seamlessly blending timeless classics with the latest sensations. With user-friendly features enhancing every aspect, Buushido ensures you spend your time savoring only the finest anime experiences`

import { RegularCard } from "../informationCards/regularCard";

interface windowProps {
    titre : string,
    description : string,
    image : ImageMetadata,
    scroll : number,
    position : number,
    index : number
    select : number,
    trigger : Function,
}

export const WormWindow:FC<windowProps> = ({titre, description, image, scroll, position, select, trigger, index }) => {
    const [expanded, setExpanded] = useState(false)

    let inStyle : React.CSSProperties = {
        left : `${position}%`,
        backgroundImage : `url("${image.src}")`,
        backgroundPositionX : !expanded ? `${scroll}%` : "center",  
    }

    if (expanded){
        inStyle = {
            zIndex : '3',
            
            transition : `left 1000ms var(--slow-fast), width 1000ms var(--slow-fast), 
            height 1000ms var(--slow-fast), background-size 1000ms var(--slow-fast), 
            background-position 500ms var(--slow-fast), background-images 1000ms var(--slow-fast)
            `,
            
            left : '50%',
            width : '100%',
            height : '100%',
            backgroundPosition : 'center',
            backgroundImage : `linear-gradient(to right, rgba(0, 0, 0, 0.53), rgba(0, 0, 0, 0.558)), url("${image.src}")`,
        }
        
    }
    else if(select >= 0) {
        
        if (position === -1){return}

        inStyle = {
            
            transition : `left 1000ms var(--slow-fast) ${index * 50}ms, top 1000ms var(--slow-fast) ${index * 50}ms,
            width 1000ms var(--slow-fast) ${index * 50}ms, height 1000ms var(--slow-fast) ${index * 50}ms,
             background-size 1000ms var(--slow-fast) ${index * 50}ms, 
            background-position 500ms var(--slow-fast) ${index * 50}ms
            `,

            zIndex : "4",
            width : "6vmax",
            height : "calc(6vmax * 1)",
            top : "90%",
            left : `${position}%`,
            backgroundImage : `url("${image.src}")`,
            backgroundPosition : "center",
        }
    }

    const expanding = () =>{
        setExpanded(!expanded)
        trigger(select < 0 ? index : -1)
        console.log("setting : ", !expanded)
    }


    return (
        <>
        <article style={inStyle} onClick={()=>expanding()}>
        
        {(!expanded && select === -1) &&
        
        <TiltingInfos image={image}>
            <h2>{titre}</h2>
            <h3>{description}</h3>
        </TiltingInfos> 
        }

        {(expanded && select === index) &&
        <div className="info">
            <div className="intro-text">
                <h2>{titre}</h2>
                <h4>{description}</h4>

                <button>Explore</button>
            </div>
        </div>

        } 

        </article>


        </>
    )
}
