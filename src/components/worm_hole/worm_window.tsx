// worm hole window

import { TiltingInfos } from "./titlting_infos";
import { useState, type FC, useEffect, useRef } from "react";


import image2 from "../../../assets/panoramas/ai_city_2.webp"
import image3 from "../../../assets/panoramas/japan2.webp"
import image4 from "../../../assets/panoramas/discord_planet.webp"

interface windowProps {
    titre : string,
    description : string,
    image : ImageMetadata,
    margin : number[],
    size : number[],
    scroll : number,
    index : number,

}

export const WormWindow:FC<windowProps> = ({titre, description, image, margin, size, scroll, index}) => {
    
    // const [width, setWidth] = useState(0)
    // const [newWidth, height] = size

    // const [top, left] = margin

    // // for animation
    // useEffect(() => {
    //     setTimeout(() => {
    //         setWidth(newWidth)
    //     }, 500 + index * 1000);
    // }, [])

    // const inStyle = {
    //     width : `${width}%`,
    //     height : `${height}%`,
    //     marginTop : top+"%",
    //     marginLeft : left+"%",
    //     backgroundImage : `url("${image.src}")`,
    //     backgroundPositionY : `${(1 - scroll)*100}%`,
    
    // } as React.CSSProperties
    
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

        // console.log("scroll : ", scrollX)

        setScrollPercent(scrollPercentage)
        
    }

    const test = [image2, image3, image4, image2, image3, image4, image2, image3]

    return (
        <article  onScroll={(evt)=>updateScroll(evt)} ref={containerRef} >
            {/* <div style={inStyle} ></div> */}

            {test.map((img, i) => {
                return <Panorama image={img} scroll={scrollPercent} key={i} />
            })}

            {/* <TiltingInfos image={image}>
                <h2>{titre}</h2>
                <h3>{description}</h3>
            </TiltingInfos> */}

        </article>
    )
}

interface Pano {
    image : ImageMetadata,
    scroll : number ,
}

const Panorama:FC<Pano> = ({ image, scroll }) => {

    const inStyle = {

        backgroundImage : `url("${image.src}")`,
        backgroundPositionX : `${(1 - scroll)*100}%`,

    } as React.CSSProperties

    return (
        <div style={inStyle}>

        </div>
    )
}