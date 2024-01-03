// worm hole component to jump to the planets project without needind to explore from space

import { useState, type FC, useEffect, useRef } from "react";
import { CriptedTitle } from "../spaceAstral/astre_title"

import { WormWindow } from "./worm_window"

import "./worm_hole.scss"

type projectStruct = [string, string, ImageMetadata]

interface Props {
    Projects: projectStruct[];
}

export const WormHolePage :FC<Props> = ({ Projects }) => {
    const [scrollPercent, setScrollPercent] = useState(0)
    const [scrollX, setScroll] = useState(0)

    const containerRef = useRef<HTMLDivElement>(null)


    const updateScroll = (event:React.UIEvent<HTMLElement>) => {
        event.preventDefault()
        event.stopPropagation();
        // get the percentage scrolled
        let value = event.target as HTMLDivElement
        
        const weight = 0.7
        // weighting the scroll
        if (containerRef.current){
            // containerRef.current.scrollLeft = scrollX

            const difference = value.scrollLeft - scrollX

            // setting the weighted value
            const newScrollValue = scrollX + (weight * difference)
            containerRef.current.scrollLeft = newScrollValue

            setScroll(newScrollValue)
        }

        // for parallax effect
        //find max scroll width
        let max = value.scrollWidth - value.clientWidth
        // find percentage
        let scrollPercentage = value.scrollLeft / max

        setScrollPercent(scrollPercentage)
        
    }

    return (
        <div id="worm-hole">

            <HeadMessage />

            <div id="panorama" onScroll={(evt)=>updateScroll(evt)} ref={containerRef} >

                <SpecialCard />
                
                {Projects.map((project, i) => {
                    const [title, description, image] = project
                    return <WormWindow titre={title} description={description} image={image} scroll={scrollPercent}/>
                })}

            </div>
        </div>
    )
}



const HeadMessage:FC = () => {
    return (
        <header>
            {/* <CriptedTitle title="Jump into the wormholes to get directly to your destination 🚀." header={true} duration={3000}/> */}
            <h1>Jump into the wormholes to get directly to your destination 🚀.</h1>
        </header>
    )
}


import Akira from "../../../assets/panoramas/akira2.webp"
const SpecialCard = () => {
    const [expand, setExpand] = useState(false)

    let styling : React.CSSProperties = {
        transition : 'all 1000ms',
        backgroundImage : `url("${Akira.src}")`,
        position : 'absolute',
        left : '50%',
        top : "50%",
        translate : "-50% -50%",
        zIndex : '5',
        border : 'solid lime',
        width : '20%',
        aspectRatio : "0.7",
        backgroundSize : "auto 100%",
    }
    
    if (expand){
        styling  = {
            transition : 'all 1000ms',
            backgroundImage : `url("${Akira.src}")`,
            backgroundSize : "100% 100%",
            position : 'absolute',
            left : '50%',
            top : "50%",
            translate : "-50% -50%",
            zIndex : '5',
            border : 'solid lime',
            width : '100%',
            height : "100%"
        }
    }

    return (
        <article style={styling} onClick={()=>setExpand(true)}>

        </article>
    )
}