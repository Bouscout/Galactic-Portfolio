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
    const [expanded, setExpanded] = useState(-1)

    const containerRef = useRef<HTMLDivElement>(null)

    const cardWidth = 17
    const separation = 2 + cardWidth
    const range = separation * (Projects.length - 1)

    const scrollSep = 50 / (Projects.length - 1)

    let smallIndex = 0
    const getCardPos = (index : number) : number => {
        let position : number
        let smallCardwidth = 6
        if (expanded >= 0){

            if(index === expanded){return -1}

            position = 10 + (2 + smallCardwidth) * smallIndex
            smallIndex += 1
            return position
        }
        position = 50 + (separation * index) - (scrollPercent * range)
        return position
    }

    const getScrollPos = (index : number) : number => {
        const scrollPos = (50 + (index * scrollSep)) - (scrollPercent * 50)
        return scrollPos
    }


    const updateScroll = (event:React.UIEvent<HTMLElement>) => {
        event.preventDefault()
        event.stopPropagation();
        // get the percentage scrolled
        let value = event.target as HTMLDivElement
        
        const weight = 0.65
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

            <ExitButton func={setExpanded}/>
            
            {/* <SpecialCard /> */}

            {Projects.map((project, i) => {
                const [title, description, image] = project
                const pos = getCardPos(i)
                const scrollPos = getScrollPos(i)
                return <WormWindow key={i} titre={title} 
                        description={description} image={image}
                        scroll={scrollPos} position={pos}
                        index={i}
                        select={expanded} trigger={setExpanded}
                        />
            })}

            {/* place holder for scrolling */}
            <div id="panorama" onScroll={(evt)=>updateScroll(evt)} ref={containerRef} >
                {Array(Projects.length).fill(0).map(x => {
                    return <div />
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

    const regular:React.CSSProperties = {
        transition : 'all 1000ms',
        backgroundImage : `url("${Akira.src}")`,
        position : 'absolute',
        left : '50%',
        translate : "-50% -50%",
        zIndex : '5',
        border : 'solid lime',
        backgroundPosition : 'center'
    }

    let styling : React.CSSProperties = {
        ...regular ,
        width : '20%',
        height : "60%",
        top : "60%",
        // aspectRatio : "0.7",
        backgroundSize : 'cover'
        // backgroundSize : "100vw auto",
    }
    
    if (expand){
        styling  = {
            ...regular,
            top : '50%',
            width : '100%',
            height : '100%',
            backgroundSize : 'cover'
            
            // backgroundSize : '100% auto'
            // animation : "growAnimation 2s linear forwards",
        }
    }

    return (
        <article style={styling} onClick={()=>setExpand(!expand)}>

        </article>
    )
}

interface buttonProps {
    func : Function
} 

export const ExitButton :FC<buttonProps> = () => {
    return (
        <button id="exit-button" style={{pointerEvents : "none"}}>
            <h2>
                <i className="fa-solid fa-xmark"></i>
            </h2>
            <h4>Close</h4>
        </button>
    )
}