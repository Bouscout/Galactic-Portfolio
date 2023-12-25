import { useStore } from "@nanostores/react";
import { velocityX, velocityY, flying } from "../state_management";
import { useState, type FC, useEffect, type ReactNode, Children } from "react";

import { ExploreButton, ExitButton } from "./navButton"
import { CriptedTitle } from "./astre_title"


interface Props {
    x : number,
    y : number,
    title : string,
    image : ImageMetadata,
    children : ReactNode,
}


export const AstreSpatial: FC<Props> = ({x, y, image, title, children}) => { 
    const renderDistance = 2000 // distance at which we render
    const detailsRenderDistance = 500

    const [posX, setPosX] = useState(x)
    const [posY, setPosY] = useState(y)
    const [trigger, setTrigger] = useState(false)
    const [landed, setLanded] = useState(false)


    const setLanding = () => {
        // const state = useStore(flying)
        const state = flying.get()
        console.log("landing : ", state)
        setLanded(!landed)
        flying.set(landed)
    }

    const triggerInfoPage = (state:boolean) => {
        setTrigger(state)
        setTimeout(() => {
            flying.set(false)
        }, 100);
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

    if (Math.abs(posX) > renderDistance){return}
    if (Math.abs(posY) > renderDistance){return}

    let renderDetails = true
    if (Math.abs(posX) > detailsRenderDistance || Math.abs(posY) > detailsRenderDistance){
        renderDetails = false
    }

    return (
        <>
        {trigger ?

        <>
        <ExitButton func={triggerInfoPage}/>
        {children}
        </> :


        <div 
        onClick={()=>{setLanding()}} 
        className="astre" 
        style={{
            backgroundImage : `url(${image.src})`,
            transform : `translate(${posX}px, ${posY}px)`,
            border : trigger ? "3px solid red" : "3px solid transparent"
        }}>

            <div>          
                {renderDetails &&
                <>
                <CriptedTitle title={title}/>
                <ExploreButton func={triggerInfoPage} />
                </>
                }
            </div>

        </div>


        }
        </>
    )
}

