// worm hole window

import { TiltingInfos } from "../informationCards/titlting_infos";
import React, { useState, type FC } from "react";
import { useGeneralState } from "../state_management";


interface projectStruct {
    index : number,
    name : string,
    shortDescription : string,
    image : ImageMetadata,
    description  : string,
    techStack : string[],
    details : any[],
    gitLink : string,
    webLink? : string,
}

interface windowProps {
    project : projectStruct,
    scroll : number,
    position : number,
    index : number
    select : number,
    trigger : Function,
}

export const WormWindow:FC<windowProps> = ({project, scroll, position, select, trigger, index }) => {
    const [expanded, setExpanded] = useState(false)

    const {name, image, shortDescription} = project

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

    const triggerInfo = () => {
        useGeneralState(null, project.index)        
       
    }


    return (
        <>
        <article style={inStyle}>
        
        {(!expanded && select === -1) &&
        
        <div onClick={()=>expanding()}>
        <TiltingInfos image={image}>
            
            <h2>{name}</h2>
            <h3>{shortDescription}</h3>
        </TiltingInfos> 
        </div>
        }

        {(expanded && select === index) &&
        <div className="info">
            <div className="intro-text">
                <h2>{name}</h2>
                <h4>{shortDescription}</h4>

                <button onClick={()=>triggerInfo()}>Explore</button>
            </div>
        </div>

        } 

        </article>


        </>
    )
}
