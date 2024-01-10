import { useStore } from "@nanostores/react";
import { velocityX, velocityY, flying, Positions, useGeneralState } from "../state_management";
import { useState, type FC, type ReactNode } from "react";

import { ExploreButton } from "./navButton"
import { CriptedTitle } from "./astre_title"


interface projectStruct {
    index : number,
    name : string,
    shortDescription : string,
    image : ImageMetadata,
    planetImage : ImageMetadata,
    description  : string,
    techStack : string[],
    details : any[],
    gitLink : string,
    webLink? : string,
}

interface Props {
    project : projectStruct,
}


export const AstreSpatial: FC<Props> = ({ project }) => { 
    const renderDistance = 2000 // distance at which we render
    const detailsRenderDistance = 500

    const {index, name, planetImage} = project
    
    const x = Positions.get()[index][0] 
    const y = Positions.get()[index][1] 

    const [posX, setPosX] = useState(x)
    const [posY, setPosY] = useState(y)
    const [landed, setLanded] = useState(false)

    const setLanding = () => {
        // const state = useStore(flying)
        const state = flying.get()
        setLanded(!landed)
        flying.set(landed)
        console.log("landed on ", name, posX, posY)
        setPosX(0)
        setPosY(0)
    }

    const adjust = 0.5
    // velocity of the space ship
    const velX = useStore(velocityX) * adjust
    const velY = useStore(velocityY) * adjust

    setTimeout(() => {
        if (flying.get()){
            setPosX((prevPosX) => prevPosX - velX);
            setPosY((prevPosY) => prevPosY - velY);    
        }
        
    }, 50);
    
    // update position coordinate
    Positions.get()[index][0] = posX 
    Positions.get()[index][1] = posY 
    
    if (Math.abs(posX) > renderDistance){return}
    if (Math.abs(posY) > renderDistance){return}
    
    let renderDetails = true
    if (Math.abs(posX) > detailsRenderDistance || Math.abs(posY) > detailsRenderDistance){
        renderDetails = false
    }

    const triggerInfoPage = () => {
        useGeneralState(null, index)
    }

    return (
        <>

        <div 
        onClick={()=>{setLanding()}} 
        className="astre" 
        style={{
            backgroundImage : `url(${planetImage.src})`,
            transform : `translate(${posX}px, ${posY}px)`,
        }}>

            <div>          
                {renderDetails &&
                <>
                <CriptedTitle title={name}/>
                <ExploreButton func={triggerInfoPage} />
                </>
                }
            </div>

        </div>


        
        </>
    )
}

