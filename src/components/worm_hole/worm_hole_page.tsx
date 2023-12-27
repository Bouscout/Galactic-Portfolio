// worm hole component to jump to the planets project without needind to explore from space

import { useState, type FC, useEffect } from "react";
import { TiltingInfos } from "./titlting_infos";

import "./worm_hole.scss"

import akira from "../../../assets/panoramas/akira.webp"
import japan from "../../../assets/panoramas/japan2.webp"
import rl from "../../../assets/panoramas/rl_3.webp"
import discord from "../../../assets/panoramas/discord_planet.webp"

import placeHolder from "../../../assets/panoramas/blue_nebula.webp"


export const WormHolePage :FC = () => {
    const cases = [akira, japan, rl, discord]
    
    const [margins, setMargins] = useState<Array<number[]>>([])
    const [sizes, setSizes] = useState<Array<number[]>>([])

    const [scroll, setScroll] = useState(0)
    
    useEffect(() => {
        const marginTopLimit = [30, 3];
        const marginLeftLimit = [20, 1];
        const widthLimit = [90, 50]
        const heightLimit = [70, 30]
    
        const generateRandom = (limit:number[]): number => {
            const [max, min] = limit
            return (Math.random() * (max - min + 1)) + min;
        };
        
        const new_margins = []
        const new_sizes = []
        for (let index = 0; index < cases.length; index++) {

            new_margins.push([
                generateRandom(marginTopLimit), generateRandom(marginLeftLimit)
            ])
            new_sizes.push([
                generateRandom(widthLimit), generateRandom(heightLimit)
            ])            
        }
        setSizes(new_sizes)
        setMargins(new_margins);
    
    }, []);

    const updateScroll = (event:React.UIEvent<HTMLDivElement>) => {
        // get the percentage scrolled
        let value = event.target as HTMLDivElement
        
        //find max scroll width
        let max = value.scrollHeight - value.clientHeight
        // find percentage
        let scrollPercentage = value.scrollTop / max

        setScroll(scrollPercentage)
        
    }

    if (margins.length === 0){return}
    else if (sizes.length === 0){return}

    return (
        <div id="worm-hole" onScroll={(evt)=>updateScroll(evt)}>
            <div className="window">
            {/* <div> */}
                {cases.map((project, i) => {

                    return <Window key={i} image={project} margin={margins[i]} scroll={scroll} size={sizes[i]}/>
                })}
                {cases.map((project, i) => {
                    return <Window key={i} image={project} margin={margins[i]} scroll={scroll} size={sizes[i]}/>
                })}
            </div>
        </div>
    )
}

interface windowProps {
    image : ImageMetadata,
    margin : number[],
    size : number[],
    scroll : number,

}

const Window:FC<windowProps> = ({ image, margin, size, scroll}) => {
    const [width, height] = size
    const [top, left] = margin

    const inStyle = {
        width : `${width}%`,
        height : `${height}%`,
        marginTop : top+"%",
        marginLeft : left+"%",
        backgroundImage : `url("${image.src}")`,
        backgroundPositionY : `${(1 - scroll)*100}%`,
    
    } as React.CSSProperties

    return (
        <article>
            <div style={inStyle} />

            <TiltingInfos>
                <h2>Demon Ware</h2>
                <h3>Serveur De call of duty gaming</h3>
                </TiltingInfos>

        </article>
    )
}