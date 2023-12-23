import { useStore } from "@nanostores/react";
import { velocityX, velocityY, flying } from "../state_management";
import { useState, type FC, useEffect, type ReactNode } from "react";

interface Props {
    x : number,
    y : number,
    image : ImageMetadata,
    children : ReactNode,
}


export const AstreSpatial: FC<Props> = ({x, y, image, children}) => { 
    const renderDistance = 2000 // distance at which we render
    const detailsRenderDistance = 200

    const [posX, setPosX] = useState(x)
    const [posY, setPosY] = useState(y)
    const [trigger, setTrigger] = useState(false)

    const adjust = 0.1
    // velocity of the space ship
    const velX = useStore(velocityX) * adjust
    const velY = useStore(velocityY) * adjust

    useEffect(()=> {
        // update position
        setPosX((prevPosX) => prevPosX - velX);
        setPosY((prevPosY) => prevPosY - velY);
    
    }, [velX, velY])

    return (
        <div 
        onClick={()=>{setTrigger(!trigger); flying.set(false)}}
        className="astre" 
        style={{
            // backgroundImage : `url(${image.src})`,
            // transform : `translate(${posX}px, ${posY}px)`,
            top : `${posY}px`, left : `${posX}px`,
            border : trigger ? "3px solid red" : "3px solid transparent"
        }}>
            <div>
            <h2>{posY}</h2>
            <h2>{posX}</h2>
                {(
                    (Math.abs(posX) < detailsRenderDistance && Math.abs(posY) < detailsRenderDistance) || trigger
                ) && children}
            </div>

        </div>
    )
}
