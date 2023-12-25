// projects informations card layout

import { PicWithButtons } from "./picture"
import { velocityX, velocityY } from "../../../state_management"
import "./infos.scss"

import { flying } from "../../../state_management"

import { type FC, type ReactNode } from "react"
import { useStore } from "@nanostores/react"

interface Props {
    image : ImageMetadata,
    url : string,
    gitUrl : string,
    children : ReactNode
}

export const ProjectCardLayout : FC<Props> = ({image, url, gitUrl, children}) => {

    const velX = useStore(velocityX) 
    const velY = useStore(velocityY) 

    setTimeout(() => {
        flying.set(false)
    }, 1000);

    console.log("velocities : ", velX, velY)

    return (
        <section id="project-container">

            <article style={{
                transform : `rotateX(${velX}deg) rotateY(${velY}deg)`
                // transform : "rotateX(-1deg) rotateY(5deg)"
            }}>

                <PicWithButtons 
                image={image}
                url={url}
                gitUrl={gitUrl}
                />

                {children}
            </article>
        </section>
    )
}


